'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _inlineCss = require('inline-css');

var _inlineCss2 = _interopRequireDefault(_inlineCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateCustomTemplate = function generateCustomTemplate(path, html) {
    // inlineCss(html, {url: './'})
    // .then((html) => {
    _fs2.default.open(path, 'w+', function (err, data) {
        if (err) {
            console.log("ERROR !! " + err);
        } else {
            _fs2.default.writeFile(path, html, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log('Wrote ' + path);
            });
        }
    });
    // })
};

exports.default = generateCustomTemplate;