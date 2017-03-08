'use strict';

var _oyVey = require('oy-vey');

var _oyVey2 = _interopRequireDefault(_oyVey);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _writeFile = require('./lib/writeFile');

var _writeFile2 = _interopRequireDefault(_writeFile);

var _welcomeUser = require('./emails/welcomeUser');

var _welcomeUser2 = _interopRequireDefault(_welcomeUser);

var _resetPassword = require('./emails/resetPassword');

var _resetPassword2 = _interopRequireDefault(_resetPassword);

var _helloWorld = require('./emails/helloWorld');

var _helloWorld2 = _interopRequireDefault(_helloWorld);

var _goodbyeWorld = require('./emails/goodbyeWorld');

var _goodbyeWorld2 = _interopRequireDefault(_goodbyeWorld);

var _generateCustomTemplate = require('./lib/generateCustomTemplate');

var _generateCustomTemplate2 = _interopRequireDefault(_generateCustomTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emails = [{
    component: _react2.default.createElement(_resetPassword2.default, null),
    fileName: 'resetPassword.html',
    options: {
        title: 'Password Reset Request',
        headCSS: 'body { background-color: #f7f6f5; }',
        previewText: 'Password Reset Request'
    }
}, {
    component: _react2.default.createElement(_welcomeUser2.default, null),
    fileName: 'welcomeUser.html',
    options: {
        title: 'Welcome to Lumi!',
        headCSS: 'body { background-color: #f7f6f5; }',
        previewText: 'Welcome to Lumi!'
    }
}];

emails.forEach(function (email) {
    var html = _oyVey2.default.renderTemplate(email.component, email.options, function (templateOptions) {
        return (0, _generateCustomTemplate2.default)(templateOptions);
    });
    (0, _writeFile2.default)(email.fileName, html);
    console.log("Finished!");
});