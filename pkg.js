const url = require("url");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const delay = require("delay");

const isPINCorrect = pin => pin === process.env.BUILDING_LINK_PIN;

module.exports = async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const urlParams = (parsedUrl && parsedUrl.query) || {};

  if (!isPINCorrect(urlParams.pin)) {
    await delay(1000);

    res.statusCode = 401;
    res.end("Unauthorized");
    return;
  }

  try {
    const deliveriesPageHTTPResponse = await fetch(
      "http://www.buildinglink.com/V2/Tenant/Deliveries/Deliveries.aspx",
      {
        headers: {
          Cookie: `bl.auth.cookie=${process.env.BUILDING_LINK_TOKEN}`
        }
      }
    );
    const deliveriesPage = await deliveriesPageHTTPResponse.text();

    const $ = cheerio.load(deliveriesPage);

    const deliveries = [];
    $("table.rgMasterTable tbody tr:not(.rgNoRecords)").each(function() {
      const delivery = {};
      $(this)
        .children("td")
        .each(function(index) {
          switch (index) {
            case 0:
              delivery.date = $(this).text();
              break;
            case 1:
              delivery.carrier = $(this).text();
              break;
            case 2:
              delivery.text = $(this).text();
          }
        });
      deliveries.push(delivery);
    });

    res.end(JSON.stringify(deliveries));
  } catch (err) {
    res.statusCode = 500;
    res.end(JSON.stringify(err));
  }
};
