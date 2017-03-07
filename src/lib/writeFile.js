import fs from "fs";
import inlineCss from "inline-css";

const writeFile = (fileName, html) => {
  // inlineCss(html, {url: './'})
  // .then((html) => {
  const outputPath = "./output/";
  const path = outputPath + fileName;

  deleteFolderRecursive(outputPath);
  fs.mkdir(outputPath);

  fs.open(path, "w+", function(err, data) {
    if (err) {
      console.log("ERROR !! " + err);
    } else {
      fs.writeFile(path, html, function(err) {
        if (err) {
          return console.log(err);
        }

        console.log(`Wrote ${path}`);
      });
    }
  });
  // })
};

const deleteFolderRecursive = function(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index) {
      const curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

export default writeFile;
