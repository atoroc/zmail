'use strict';

var _oyVey = require('oy-vey');

var _oyVey2 = _interopRequireDefault(_oyVey);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _writeFile = require('./lib/writeFile');

var _writeFile2 = _interopRequireDefault(_writeFile);

var _helloWorld = require('./emails/helloWorld');

var _helloWorld2 = _interopRequireDefault(_helloWorld);

var _goodbyeWorld = require('./emails/goodbyeWorld');

var _goodbyeWorld2 = _interopRequireDefault(_goodbyeWorld);

var _generateCustomTemplate = require('./lib/generateCustomTemplate');

var _generateCustomTemplate2 = _interopRequireDefault(_generateCustomTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emails = [{
    component: _react2.default.createElement(_helloWorld2.default, null),
    outputPath: './output/helloWorld.html',
    options: {
        title: 'Welcome to Lumi!',
        headCSS: 'body { background-color: #f7f6f5; }',
        previewText: 'Welcome to Lumi!'
    }
}, {
    component: _react2.default.createElement(_goodbyeWorld2.default, null),
    outputPath: './output/goodbyeWorld.html',
    options: {
        title: 'Goodbye Lumi!',
        headCSS: 'body { background-color: #f7f6f5; }',
        previewText: 'See you later!'
    }
}];

emails.forEach(function (email) {
    var html = _oyVey2.default.renderTemplate(email.component, email.options, function (templateOptions) {
        return (0, _generateCustomTemplate2.default)(templateOptions);
    });

    (0, _writeFile2.default)(email.outputPath, html);
    console.log("Finished!");
});