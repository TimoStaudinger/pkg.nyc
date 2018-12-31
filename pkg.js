const fetch = require("node-fetch");
const cheerio = require("cheerio");

const BUILDING_LINK_PACKAGES_URL =
  "http://www.buildinglink.com/V2/Tenant/Deliveries/Deliveries.aspx";

module.exports = async (req, res) => {
  const authHeader = req.headers.authorization;
  let authParts = authHeader && authHeader.split(" ");
  const [tokenType, token] = authParts || [];

  if (tokenType !== "Bearer" || !token) {
    res.statusCode = 401;
    res.end("Unauthorized");
    return;
  }

  try {
    const deliveriesPageHTTPResponse = await fetch(BUILDING_LINK_PACKAGES_URL, {
      headers: { Cookie: `bl.auth.cookie=${token}` }
    });
    const deliveriesPage = await deliveriesPageHTTPResponse.text();

    const $ = cheerio.load(deliveriesPage);

    if ($("#ctl00_ContentPlaceHolder1_GridDeliveries_ctl00").length === 0) {
      res.statusCode = 401;
      res.end("Unauthorized");
      return;
    }

    const deliveries = [];
    $(
      "#ctl00_ContentPlaceHolder1_GridDeliveries_ctl00 tbody tr:not(.rgNoRecords)"
    ).each(function() {
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
    console.error(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
};
