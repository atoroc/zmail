"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _inlineCss = require("inline-css");

var _inlineCss2 = _interopRequireDefault(_inlineCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const writeFile = (fileName, html) => {
  // inlineCss(html, {url: './'})
  // .then((html) => {
  const outputPath = "./output/";
  const path = outputPath + fileName;

  deleteFolderRecursive(outputPath);
  _fs2.default.mkdir(outputPath);

  _fs2.default.open(path, "w+", function (err, data) {
    if (err) {
      console.log("ERROR !! " + err);
    } else {
      _fs2.default.writeFile(path, html, function (err) {
        if (err) {
          return console.log(err);
        }

        console.log(`Wrote ${path}`);
      });
    }
  });
  // })
};

const deleteFolderRecursive = function deleteFolderRecursive(path) {
  if (_fs2.default.existsSync(path)) {
    _fs2.default.readdirSync(path).forEach(function (file, index) {
      const curPath = path + "/" + file;
      if (_fs2.default.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        _fs2.default.unlinkSync(curPath);
      }
    });
    _fs2.default.rmdirSync(path);
  }
};

exports.default = writeFile;