import {IncomingMessage, ServerResponse} from 'http'
import chromium from 'chrome-aws-lambda'

const INTERNAL_SERVER_ERROR = 500
const UNAUTHORIZED = 401

const LOGIN_URL = 'https://www.buildinglink.com/v2/global/login/login.aspx'

async function getBrowserInstance() {
  const executablePath = await chromium.executablePath

  return chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: {
      width: 1280,
      height: 720,
    },
    executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  })
}

const getRequestBody = (req: IncomingMessage): object => {
  return new Promise((resolve) => {
    let body: Uint8Array[] = []
    req
      .on('data', (chunk: Uint8Array) => {
        body.push(chunk)
      })
      .on('end', () => {
        body = JSON.parse(Buffer.concat(body).toString())
        resolve(body)
      })
  })
}

export default async (req: IncomingMessage, res: ServerResponse) => {
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

    const browser = await getBrowserInstance()

    const page = await browser.newPage()
    await page.goto(LOGIN_URL)

    if ((await page.$('input#Password')) !== null) {
      await page.type('#UserName', username)
      await page.type('#Password', password)
      await Promise.all([page.waitForNavigation(), page.click('#LoginButton')])
    } else console.log('Could not find login form.')

    const cookies = await page.cookies()
    const tokenCookies = cookies.filter(
      (cookie) => cookie.name.startsWith('bl.auth')
    )
    
    if (tokenCookies && tokenCookies.length > 0) {
      const tokens = tokenCookies.map(cookie => ({name: cookie.name, value: cookie.value}))
      res.end(tokens)
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
