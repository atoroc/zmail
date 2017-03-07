'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _oyVey = require('oy-vey');

var _oyVey2 = _interopRequireDefault(_oyVey);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inlineCss = require('inline-css');

var _inlineCss2 = _interopRequireDefault(_inlineCss);

var _generateCustomTemplate = require('./lib/generateCustomTemplate');

var _generateCustomTemplate2 = _interopRequireDefault(_generateCustomTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emails = {};

var html = _oyVey2.default.renderTemplate(_react2.default.createElement(_app2.default, null), {
    title: 'Welcome to Lumi!',
    headCSS: 'body { background-color: #f7f6f5; }',
    previewText: 'Welcome to Lumi!'
}, function (templateOptions) {
    return (0, _generateCustomTemplate2.default)(templateOptions);
});

// inlineCss(html, {url: './'})
// .then((html) => {
var path = './output/helloWorld.html';

_fs2.default.open(path, 'w+', function (err, data) {
    if (err) {
        console.log("ERROR !! " + err);
    } else {
        _fs2.default.writeFile(path, html, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    }
});
// })