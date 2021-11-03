const fs = require("fs");
const path = require("path");
const folderPath = path.join(__dirname, "styles");
const distPath = path.join(__dirname, "project-dist", "bundle.css");
fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    if (file.isFile()) {
      const filePath = path.join(__dirname, "styles", file.name);
      const fileExt = path.parse(filePath).ext;
      fs.stat(filePath, (err, stats) => {
        if (err) throw err;
        if (fileExt === ".css") {
          const stream = fs.createReadStream(filePath, "utf8");
          stream.on("data", (data) => {
            fs.appendFile(distPath, data, (err) => {
              if (err) throw err;
            });
          });
          stream.on("error", (err) => {
            console.log(`Err:${err}`);
          });
        }
      });
    }
  });
});
