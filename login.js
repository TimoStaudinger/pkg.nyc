const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')

const INTERNAL_SERVER_ERROR = 500
const UNAUTHORIZED = 401

const LOGIN_URL = 'https://www.buildinglink.com/v2/global/login/login.aspx'

const getRequestBody = req => {
  return new Promise(resolve => {
    let body = []
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

module.exports = async (req, res) => {
  try {
    const {username, password} = await getRequestBody(req)

    console.log('Starting new Chromium instance...')
    const browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless
    })
    console.log('Chromium instance started successfully.')

    const page = await browser.newPage()

    console.log('Opening BuildingLink...')
    await page.goto(LOGIN_URL)
    console.log('BuildingLink opened successfully.')

    if ((await page.$('input#ctl00_Login1_Password')) !== null) {
      console.log('Logging in...')

      await page.type('#ctl00_Login1_UserName', username)
      console.log('Filled user name')

      await page.type('#ctl00_Login1_Password', password)
      console.log('Filled password')

      await Promise.all([page.waitForNavigation(), page.click('#LoginButton')])
      console.log('Submitted form')

      console.log('Logged in successfully.')
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
    return
  } catch (err) {
    console.error(err)
    res.statusCode = INTERNAL_SERVER_ERROR
    res.end('Internal Server Error')
  }
}
