import {IncomingMessage, ServerResponse} from 'http'
import {launch} from 'puppeteer'
import chrome from 'chrome-aws-lambda'
// const chrome = require('chrome-aws-lambda')
// const puppeteer = require('puppeteer-core')

const INTERNAL_SERVER_ERROR = 500
const UNAUTHORIZED = 401

const LOGIN_URL = 'https://www.buildinglink.com/v2/global/login/login.aspx'

const getRequestBody = (req: IncomingMessage): object => {
  return new Promise(resolve => {
    let body: Uint8Array[] = []
    req
      .on('data', chunk => {
        body.push(chunk)
      })
      .on('end', () => {
        body = JSON.parse(Buffer.concat(body).toString())
        resolve(body)
      })
  })
}

module.exports = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const {username, password} = (await getRequestBody(req)) as {
      username?: string
      password?: string
    }

    if (
      !username ||
      !password ||
      username.length === 0 ||
      password.length === 0
    ) {
      res.statusCode = UNAUTHORIZED
      res.end('Unauthorized')
      return
    }

    const browser = await launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless
    })

    const page = await browser.newPage()

    await page.goto(LOGIN_URL)

    if ((await page.$('input#ctl00_Login1_Password')) !== null) {
      await page.type('#ctl00_Login1_UserName', username)
      await page.type('#ctl00_Login1_Password', password)
      await Promise.all([page.waitForNavigation(), page.click('#LoginButton')])
    } else console.log('Already logged in.')

    const cookies = await page.cookies()
    const tokenCookie = cookies.find(cookie => cookie.name === 'bl.auth.cookie')
    const token = tokenCookie && tokenCookie.value

    if (token && token.length > 0) {
      res.end(token)
    } else {
      res.statusCode = UNAUTHORIZED
      res.end('Unauthorized')
    }
  } catch (err) {
    console.error(err)
    res.statusCode = INTERNAL_SERVER_ERROR
    res.end('Internal Server Error')
  }
}
