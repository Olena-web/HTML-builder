const fs = require("fs");
const path = require("path");
const process = require("process");
const stdout = process.stdout;
const folderPath = path.join(__dirname, "secret-folder");
fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  files.forEach((file) => {
    if (file.isFile()) {
      const filePath = path.join(__dirname, "secret-folder", file.name);
      const fileName = path.parse(filePath).name;
      const fileExt = path.parse(filePath).ext.slice(1);
      let size;
      fs.stat(filePath, (err, stats) => {
        if (err) throw err;
        size = stats.size;
        stdout.write(
          `${fileName}` + " " + `${fileExt}` + " " + `${size}` + " \n"
        );
      });
    }
  });
});
