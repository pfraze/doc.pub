var multicb = require('multicb')
var s = require('../lib/static')
var indexView = require('../views/pages/index')

module.exports = function (req, res, next) {

  // Homepage
  if (req.url == '/' || req.url == '/index.html') {
    s.type(res, 'text/html')
    res.writeHead(200)
    return res.end(indexView().outerHTML)
  }

  next()
}