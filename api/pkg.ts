import {IncomingMessage, ServerResponse} from 'http'
import fetch from 'node-fetch'
import * as cheerio from 'cheerio'

const UNAUTHORIZED = 401
const INTERNAL_SERVER_ERROR = 500

const BUILDING_LINK_PACKAGES_URL =
  'https://www.buildinglink.com/V2/Tenant/Deliveries/Deliveries.aspx'

const DELIVERIES_TABLE_SELECTOR =
  '#ctl00_ContentPlaceHolder1_GridDeliveries_ctl00'
const DELIVERIES_SELECTOR =
  '#ctl00_ContentPlaceHolder1_GridDeliveries_ctl00 tbody tr:not(.rgNoRecords)'

interface Delivery {
  date?: string
  carrier?: string
  text?: string
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  const authHeader = req.headers.authorization
  let authParts = authHeader && authHeader.split(' ')
  const [tokenType, token] = (authParts || []) as [
    string | undefined,
    string | undefined
  ]

  if (tokenType !== 'Bearer' || !token) {
    res.statusCode = UNAUTHORIZED
    res.end('Unauthorized')
    return
  }

  try {
    const deliveriesPageHTTPResponse = await fetch(BUILDING_LINK_PACKAGES_URL, {
      headers: {Cookie: `bl.auth.cookie=${token}`}
    })
    const deliveriesPage = await deliveriesPageHTTPResponse.text()

    const $ = cheerio.load(deliveriesPage)

    if ($(DELIVERIES_TABLE_SELECTOR).length === 0) {
      res.statusCode = UNAUTHORIZED
      res.end('Unauthorized')
      return
    }

    const deliveries: Delivery[] = []
    $(DELIVERIES_SELECTOR).each(function() {
      const delivery: Delivery = {}
      $(this)
        .children('td')
        .each(function(index) {
          switch (index) {
            case 0:
              delivery.date = $(this)
                .text()
                .trim()
              break
            case 1:
              delivery.carrier = $(this)
                .text()
                .replace(' (Location:)', '')
                .trim()
              break
            case 2:
              delivery.text = $(this)
                .text()
                .trim()
          }
        })
      deliveries.push(delivery)
    })

    res.end(JSON.stringify(deliveries))
  } catch (err) {
    console.error(err)
    res.statusCode = INTERNAL_SERVER_ERROR
    res.end('Internal Server Error')
  }
}
