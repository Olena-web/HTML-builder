const fs = require("fs");
const path = require("path");
let source = path.resolve(__dirname, "files");
let destination = path.resolve(__dirname, "files-copy");

function copyFolder() {
  fs.mkdir(destination, { recursive: true }, function (err) {
    if (err && err.code === "EEXIST") {
      console.log(err);
    } else {
      console.log("folder created");
    }
  });

  fs.readdir(source, { withFileTypes: true }, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
      if (file.isFile()) {
        const filePath = path.resolve(__dirname, source, file.name);
        const filePathNew = path.resolve(__dirname, destination, file.name);
        fs.stat(filePath, (err, stats) => {
          if (err) throw err;
          fs.copyFile(filePath, filePathNew, (err) => {
            if (err) throw err;
            console.log(`${file.name} was copied to destination`);
          });
        });
      }
    });
  });
}
fs.access(destination, (err) => {
  if (err) {
    copyFolder();
  } else {
    fs.rm(destination, { recursive: true }, (err) => {
      if (err) {
        throw err;
      }
      copyFolder();
    });
  }
});
