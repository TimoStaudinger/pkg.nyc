(function() {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-aws-lambda */ "chrome-aws-lambda");
/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__);

const INTERNAL_SERVER_ERROR = 500;
const UNAUTHORIZED = 401;
const LOGIN_URL = 'https://www.buildinglink.com/v2/global/login/login.aspx';

async function getBrowserInstance() {
  const executablePath = await (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().executablePath);
  return chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().puppeteer.launch({
    args: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().args),
    defaultViewport: {
      width: 1280,
      height: 720
    },
    executablePath,
    headless: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().headless),
    ignoreHTTPSErrors: true
  });
}

const getRequestBody = req => {
  return new Promise(resolve => {
    let body = [];
    req.on('data', chunk => {
      body.push(chunk);
    }).on('end', () => {
      body = JSON.parse(Buffer.concat(body).toString());
      resolve(body);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const {
      username,
      password
    } = await getRequestBody(req);

    if (!username || !password || username.length === 0 || password.length === 0) {
      console.error('No username/password provided');
      res.statusCode = UNAUTHORIZED;
      res.end('Unauthorized');
      return;
    }

    const browser = await getBrowserInstance();
    const page = await browser.newPage();
    await page.goto(LOGIN_URL);

    if ((await page.$('#UserName')) !== null && (await page.$('#Password')) !== null && (await page.$('#LoginButton')) !== null) {
      await page.type('#UserName', username);
      await page.type('#Password', password);
      await Promise.all([page.waitForNavigation(), page.click('#LoginButton')]);
    } else {
      console.error('Could not find login form.');
      res.statusCode = INTERNAL_SERVER_ERROR;
      res.end('Internal Server Error');
      return;
    }

    await page.waitForSelector('div.user-links');
    const cookies = await page.cookies();
    console.log('Cookies after login', cookies.map(cookie => [cookie.name, cookie.value]));
    const tokenCookies = cookies.filter(cookie => cookie.name.startsWith('bl.auth'));

    if (tokenCookies && tokenCookies.length > 0) {
      console.log(`${tokenCookies.length} token cookies found`);
      const tokens = tokenCookies.map(cookie => ({
        name: cookie.name,
        value: cookie.value
      }));
      res.end(JSON.stringify(tokens));
    } else {
      console.error('No token cookies found');
      res.statusCode = UNAUTHORIZED;
      res.end('Unauthorized');
    }
  } catch (err) {
    console.error(err);
    res.statusCode = INTERNAL_SERVER_ERROR;
    res.end('Internal Server Error');
  }
});

/***/ }),

/***/ "chrome-aws-lambda":
/*!************************************!*\
  !*** external "chrome-aws-lambda" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("chrome-aws-lambda");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wa2cvLi9wYWdlcy9hcGkvbG9naW4udHMiLCJ3ZWJwYWNrOi8vcGtnL2V4dGVybmFsIFwiY2hyb21lLWF3cy1sYW1iZGFcIiJdLCJuYW1lcyI6WyJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJVTkFVVEhPUklaRUQiLCJMT0dJTl9VUkwiLCJnZXRCcm93c2VySW5zdGFuY2UiLCJleGVjdXRhYmxlUGF0aCIsImNocm9taXVtIiwiYXJncyIsImRlZmF1bHRWaWV3cG9ydCIsIndpZHRoIiwiaGVpZ2h0IiwiaGVhZGxlc3MiLCJpZ25vcmVIVFRQU0Vycm9ycyIsImdldFJlcXVlc3RCb2R5IiwicmVxIiwiUHJvbWlzZSIsInJlc29sdmUiLCJib2R5Iiwib24iLCJjaHVuayIsInB1c2giLCJKU09OIiwicGFyc2UiLCJCdWZmZXIiLCJjb25jYXQiLCJ0b1N0cmluZyIsInJlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNDb2RlIiwiZW5kIiwiYnJvd3NlciIsInBhZ2UiLCJuZXdQYWdlIiwiZ290byIsIiQiLCJ0eXBlIiwiYWxsIiwid2FpdEZvck5hdmlnYXRpb24iLCJjbGljayIsIndhaXRGb3JTZWxlY3RvciIsImNvb2tpZXMiLCJsb2ciLCJtYXAiLCJjb29raWUiLCJuYW1lIiwidmFsdWUiLCJ0b2tlbkNvb2tpZXMiLCJmaWx0ZXIiLCJzdGFydHNXaXRoIiwidG9rZW5zIiwic3RyaW5naWZ5IiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQSxNQUFNQSxxQkFBcUIsR0FBRyxHQUE5QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxHQUFyQjtBQUVBLE1BQU1DLFNBQVMsR0FBRyx5REFBbEI7O0FBRUEsZUFBZUMsa0JBQWYsR0FBb0M7QUFDbEMsUUFBTUMsY0FBYyxHQUFHLE1BQU1DLHlFQUE3QjtBQUVBLFNBQU9BLHlFQUFBLENBQTBCO0FBQy9CQyxRQUFJLEVB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TyxNQUFSLENBQWdCSixNQUFELElBQ2xDQSxNQUFNLENBQUNDLElBQVAsQ0FBWUksVUFBWixDQUF1QixTQUF2QixDQURtQixDQUFyQjs7QUFJQSxRQUFJRixZQUFZLElBQUlBLFlBQVksQ0FBQ3JCLE1BQWIsR0FBc0IsQ0FBMUMsRUFBNkM7QUFDM0NDLGFBQU8sQ0FBQ2UsR0FBUixDQUFhLEdBQUVLLFlBQVksQ0FBQ3JCLE1BQU8sc0JBQW5DO0FBQ0EsWUFBTXdCLE1BQU0sR0FBR0gsWUFBWSxDQUFDSixHQUFiLENBQWtCQyxNQUFELEtBQWE7QUFDM0NDLFlBQUksRUFBRUQsTUFBTSxDQUFDQyxJQUQ4QjtBQUUzQ0MsYUFBSyxFQUFFRixNQUFNLENBQUNFO0FBRjZCLE9BQWIsQ0FBakIsQ0FBZjtBQUlBdkIsU0FBRyxDQUFDTyxHQUFKLENBQVFaLElBQUksQ0FBQ2lDLFNBQUwsQ0FBZUQsTUFBZixDQUFSO0FBQ0QsS0FQRCxNQU9PO0FBQ0x2QixhQUFPLENBQUNDLEtBQVIsQ0FBYyx3QkFBZDtBQUNBTCxTQUFHLENBQUNNLFVBQUosR0FBaUI5QixZQUFqQjtBQUNBd0IsU0FBRyxDQUFDTyxHQUFKLENBQVEsY0FBUjtBQUNEO0FBQ0YsR0E3REQsQ0E2REUsT0FBT3NCLEdBQVAsRUFBWTtBQUNaekIsV0FBTyxDQUFDQyxLQUFSLENBQWN3QixHQUFkO0FBQ0E3QixPQUFHLENBQUNNLFVBQUosR0FBaUIvQixxQkFBakI7QUFDQXlCLE9BQUcsQ0FBQ08sR0FBSixDQUFRLHVCQUFSO0FBQ0Q7QUFDRixDQW5FRCxFOzs7Ozs7Ozs7OztBQ3JDQSwrQyIsImZpbGUiOiJwYWdlcy9hcGkvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2V9IGZyb20gJ2h0dHAnXHJcbmltcG9ydCBjaHJvbWl1bSBmcm9tICdjaHJvbWUtYXdzLWxhbWJkYSdcclxuXHJcbmNvbnN0IElOVEVSTkFMX1NFUlZFUl9FUlJPUiA9IDUwMFxyXG5jb25zdCBVTkFVVEhPUklaRUQgPSA0MDFcclxuXHJcbmNvbnN0IExPR0lOX1VSTCA9ICdodHRwczovL3d3dy5idWlsZGluZ2xpbmsuY29tL3YyL2dsb2JhbC9sb2dpbi9sb2dpbi5hc3B4J1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QnJvd3Nlckluc3RhbmNlKCkge1xyXG4gIGNvbnN0IGV4ZWN1dGFibGVQYXRoID0gYXdhaXQgY2hyb21pdW0uZXhlY3V0YWJsZVBhdGhcclxuXHJcbiAgcmV0dXJuIGNocm9taXVtLnB1cHBldGVlci5sYXVuY2goe1xyXG4gICAgYXJnczogY2hyb21pdW0uYXJncyxcclxuICAgIGRlZmF1bHRWaWV3cG9ydDoge1xyXG4gICAgICB3aWR0aDogMTI4MCxcclxuICAgICAgaGVpZ2h0OiA3MjAsXHJcbiAgICB9LFxyXG4gICAgZXhlY3V0YWJsZVBhdGgsXHJcbiAgICBoZWFkbGVzczogY2hyb21pdW0uaGVhZGxlc3MsXHJcbiAgICBpZ25vcmVIVFRQU0Vycm9yczogdHJ1ZSxcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBnZXRSZXF1ZXN0Qm9keSA9IChyZXE6IEluY29taW5nTWVzc2FnZSk6IG9iamVjdCA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBsZXQgYm9keTogVWludDhBcnJheVtdID0gW11cclxuICAgIHJlcVxyXG4gICAgICAub24oJ2RhdGEnLCAoY2h1bms6IFVpbnQ4QXJyYXkpID0+IHtcclxuICAgICAgICBib2R5LnB1c2goY2h1bmspXHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbignZW5kJywgKCkgPT4ge1xyXG4gICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKEJ1ZmZlci5jb25jYXQoYm9keSkudG9TdHJpbmcoKSlcclxuICAgICAgICByZXNvbHZlKGJvZHkpXHJcbiAgICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogSW5jb21pbmdNZXNzYWdlLCByZXM6IFNlcnZlclJlc3BvbnNlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHt1c2VybmFtZSwgcGFzc3dvcmR9ID0gKGF3YWl0IGdldFJlcXVlc3RCb2R5KHJlcSkpIGFzIHtcclxuICAgICAgdXNlcm5hbWU/OiBzdHJpbmdcclxuICAgICAgcGFzc3dvcmQ/OiBzdHJpbmdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICF1c2VybmFtZSB8fFxyXG4gICAgICAhcGFzc3dvcmQgfHxcclxuICAgICAgdXNlcm5hbWUubGVuZ3RoID09PSAwIHx8XHJcbiAgICAgIHBhc3N3b3JkLmxlbmd0aCA9PT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHVzZXJuYW1lL3Bhc3N3b3JkIHByb3ZpZGVkJylcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSBVTkFVVEhPUklaRURcclxuICAgICAgcmVzLmVuZCgnVW5hdXRob3JpemVkJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnJvd3NlciA9IGF3YWl0IGdldEJyb3dzZXJJbnN0YW5jZSgpXHJcblxyXG4gICAgY29uc3QgcGFnZSA9IGF3YWl0IGJyb3dzZXIubmV3UGFnZSgpXHJcbiAgICBhd2FpdCBwYWdlLmdvdG8oTE9HSU5fVVJMKVxyXG5cclxuICAgIGlmIChcclxuICAgICAgKGF3YWl0IHBhZ2UuJCgnI1VzZXJOYW1lJykpICE9PSBudWxsICYmXHJcbiAgICAgIChhd2FpdCBwYWdlLiQoJyNQYXNzd29yZCcpKSAhPT0gbnVsbCAmJlxyXG4gICAgICAoYXdhaXQgcGFnZS4kKCcjTG9naW5CdXR0b24nKSkgIT09IG51bGxcclxuICAgICkge1xyXG4gICAgICBhd2FpdCBwYWdlLnR5cGUoJyNVc2VyTmFtZScsIHVzZXJuYW1lKVxyXG4gICAgICBhd2FpdCBwYWdlLnR5cGUoJyNQYXNzd29yZCcsIHBhc3N3b3JkKVxyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbcGFnZS53YWl0Rm9yTmF2aWdhdGlvbigpLCBwYWdlLmNsaWNrKCcjTG9naW5CdXR0b24nKV0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgZmluZCBsb2dpbiBmb3JtLicpXHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gSU5URVJOQUxfU0VSVkVSX0VSUk9SXHJcbiAgICAgIHJlcy5lbmQoJ0ludGVybmFsIFNlcnZlciBFcnJvcicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHBhZ2Uud2FpdEZvclNlbGVjdG9yKCdkaXYudXNlci1saW5rcycpXHJcblxyXG4gICAgY29uc3QgY29va2llcyA9IGF3YWl0IHBhZ2UuY29va2llcygpXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgJ0Nvb2tpZXMgYWZ0ZXIgbG9naW4nLFxyXG4gICAgICBjb29raWVzLm1hcCgoY29va2llKSA9PiBbY29va2llLm5hbWUsIGNvb2tpZS52YWx1ZV0pXHJcbiAgICApXHJcbiAgICBjb25zdCB0b2tlbkNvb2tpZXMgPSBjb29raWVzLmZpbHRlcigoY29va2llKSA9PlxyXG4gICAgICBjb29raWUubmFtZS5zdGFydHNXaXRoKCdibC5hdXRoJylcclxuICAgIClcclxuXHJcbiAgICBpZiAodG9rZW5Db29raWVzICYmIHRva2VuQ29va2llcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAke3Rva2VuQ29va2llcy5sZW5ndGh9IHRva2VuIGNvb2tpZXMgZm91bmRgKVxyXG4gICAgICBjb25zdCB0b2tlbnMgPSB0b2tlbkNvb2tpZXMubWFwKChjb29raWUpID0+ICh7XHJcbiAgICAgICAgbmFtZTogY29va2llLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IGNvb2tpZS52YWx1ZSxcclxuICAgICAgfSkpXHJcbiAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkodG9rZW5zKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHRva2VuIGNvb2tpZXMgZm91bmQnKVxyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IFVOQVVUSE9SSVpFRFxyXG4gICAgICByZXMuZW5kKCdVbmF1dGhvcml6ZWQnKVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IElOVEVSTkFMX1NFUlZFUl9FUlJPUlxyXG4gICAgcmVzLmVuZCgnSW50ZXJuYWwgU2VydmVyIEVycm9yJylcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hyb21lLWF3cy1sYW1iZGFcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=