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

_emails2.default.forEach(function (email) {
    var html = _oyVey2.default.renderTemplate(_react2.default.createElement(email.component, null), email.options, function (templateOptions) {
        return (0, _generateCustomTemplate2.default)(templateOptions);
    });
    (0, _writeFile2.default)(email.fileName, html);
    console.log("Finished!");
});