const sessionController = require('./../session/sessionController');

const cookieController = {};
cookieController.setCookie = setCookie;
cookieController.setSSIDCookie = setSSIDCookie;

/**
* setCookie - set a cookie with a random number
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
* @param next - Callback with signature ([err])
*/
function setCookie(req, res, next) {
  res.cookie('codesmith', 'hi');
  res.cookie('secret', Math.floor(Math.random() * 100));
  // res.send();
  next();
  // next() instead of send? in approach lecture
}

/**
* setSSIDCookie - store the supplied id in a cookie
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
* @param next - Callback with signature ([err])
*/
function setSSIDCookie(req, res, next) {
  // write code here
  // if (res.locals.userid) {
  // res.cookie('ssid', res.locals.userid, {httpOnly: true});
  // next()
  // }

}

module.exports = cookieController;