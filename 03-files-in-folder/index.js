const fs = require("fs");
const path = require("path");
const filePath = path.resolve("03-files-in-folder", "secret-folder");
fs.readdir(filePath, (err, files) => {
  files.forEach((file) => {
    console.log("name " + file);
  });
});
