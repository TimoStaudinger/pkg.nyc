const chrome = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");

const url = require("url");
const delay = require("delay");

const BUILDING_LINK_DELIVERIES_URL =
  "http://www.buildinglink.com/V2/Tenant/Deliveries/Deliveries.aspx";

const fetchPackageData = async () => {
  const { BUILDING_LINK_USERNAME, BUILDING_LINK_PASSWORD } = process.env;

  console.log("Starting new Chromium instance...");
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless
  });
  console.log("Chromium instance started successfully.");

  const page = await browser.newPage();

  console.log("Opening BuildingLink...");
  await page.goto(BUILDING_LINK_DELIVERIES_URL, { timeout: 0 });
  console.log("BuildingLink opened successfully.");

  // Needs sign-on?
  if ((await page.$("input#ctl00_Login1_Password")) !== null) {
    console.log("Logging in...");

    await page.type("#ctl00_Login1_UserName", BUILDING_LINK_USERNAME);
    console.log("Filled user name");

    await page.type("#ctl00_Login1_Password", BUILDING_LINK_PASSWORD);
    console.log("Filled password");

    await Promise.all([
      page.waitForNavigation({ timeout: 0 }),
      page.click("#LoginButton")
    ]);
    console.log("Submitted form");

    console.log("Logged in successfully.");
  } else console.log("Already logged in.");

  console.log("Extracting package data...");
  const packageElements = await page.$$(
    "table#ctl00_ContentPlaceHolder1_GridDeliveries_ctl00 tbody tr:not(.rgNoRecords)"
  );

  let packages = [];

  for (let packageElement of packageElements) {
    const packageDataElements = await packageElement.$$("td");

    let package = {};

    let index = 0;
    for (let packageDataElement of packageDataElements) {
      let value = await (await packageDataElement.getProperty(
        "textContent"
      )).jsonValue();
      value = value && value.trim();

      switch (index) {
        case 0:
          package.date = value;
          break;
        case 1:
          package.carrier = value;
          break;
        case 2:
          package.text = value;
      }

      index++;
    }

    packages.push(package);
  }

  console.log("Package data extracted successfully.");

  await page.close();

  return packages;
};

module.exports = async (req, res) => {
  try {
    const { BUILDING_LINK_PIN } = process.env;

    const parsedUrl = url.parse(req.url, true);
    const urlParams = (parsedUrl && parsedUrl.query) || {};

    if (urlParams.pin !== BUILDING_LINK_PIN) {
      await delay(1000);

      res.statusCode = 401;
      res.end("Unauthorized");
      return;
    }

    const text = await fetchPackageData();

    res.end(JSON.stringify(text));
    return;
  } catch (err) {
    res.statusCode = 500;
    console.error(err);
    res.end(JSON.stringify(err));
  }
};
