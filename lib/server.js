'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _oyVey = require('oy-vey');

var _oyVey2 = _interopRequireDefault(_oyVey);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _emails = require('./emails');

var _emails2 = _interopRequireDefault(_emails);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _writeFile = require('./lib/writeFile');

var _writeFile2 = _interopRequireDefault(_writeFile);

var _generateCustomTemplate = require('./lib/generateCustomTemplate');

var _generateCustomTemplate2 = _interopRequireDefault(_generateCustomTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
server.set('port', process.env.PORT || 8887);

server.use(_bodyParser2.default.json()); // to support JSON-encoded bodies
server.use(_bodyParser2.default.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

server.get('/:template.:type', function (req, res) {
  var email = _lodash2.default.find(_emails2.default, function (email) {
    return email.fileName == req.params.template + '.html';
  });

  var query = req.query,
      body = req.body;

  var data = Object.assign({}, query, body);

  if (email) {
    var html = _oyVey2.default.renderTemplate(_react2.default.createElement(email.component, { data: data }), email.options, function (templateOptions) {
      return (0, _generateCustomTemplate2.default)(templateOptions);
    });

    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.send(html);
  }
});

server.listen(server.get('port'), function () {
  console.log('Node server is running on port', server.get('port'));
});