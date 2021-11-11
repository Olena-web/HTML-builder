const fs = require("fs");
const path = require("path");
const destination = path.resolve(__dirname, "project-dist");
const srcStyle = path.resolve(__dirname, "styles");
const distStyle = path.resolve(destination, "style.css");
const srcAssets = path.resolve(__dirname, "assets");
const distAssets = path.resolve(destination, "assets");
const srcHTML = path.resolve(__dirname, "template.html");
const srcComponents = path.resolve(__dirname, "components");
let testHTML = path.resolve(__dirname, "test.html");
const distHTML = path.resolve(destination, "index.html");

//creating folder project-dist

fs.mkdir(destination, { recursive: true }, function (err) {
  if (err && err.code === "EEXIST") {
    console.log(err);
  } else {
    console.log("project-dist created");
  }
});

//copy assets to project-dist
function copyAssets(pathFolder, pathCopy) {
  fs.mkdir(pathCopy, { recursive: true }, (err) => {
    if (err) console.log(err);
  });
  fs.readdir(pathFolder, { withFileTypes: true }, (err, files) => {
    if (err) console.log(err);
    files.forEach((file) => {
      if (file.isFile()) {
        fs.copyFile(
          path.resolve(pathFolder, file.name),
          path.resolve(pathCopy, file.name),
          (err) => {
            if (err) console.log(err);
          }
        );
      } else if (file.isDirectory()) {
        copyAssets(
          path.resolve(pathFolder, file.name),
          path.resolve(pathCopy, file.name)
        );
      }
    });
  });
}
copyAssets(srcAssets, distAssets);

//  create style.css

fs.open(distStyle, "w", (err) => {
  if (err) throw err;
});
function copyStyle() {
  fs.readdir(srcStyle, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    fs.stat(distStyle, function (err, stats) {
      if (err) {
        return console.error(err);
      }
    });
    files.forEach((file) => {
      if (file.isFile()) {
        const filePath = path.join(__dirname, "styles", file.name);
        const fileExt = path.parse(filePath).ext;
        fs.stat(filePath, (err, stats) => {
          if (err) throw err;
          if (fileExt === ".css") {
            const stream = fs.createReadStream(filePath, "utf8");
            let data = "";
            stream.on("data", (partData) => (data += partData));
            stream.on("end", () =>
              fs.appendFile(distStyle, data, (err) => {
                if (err) throw err;
              })
            );
            stream.on("error", (err) => {
              console.log(`Err:${err}`);
            });
          }
        });
      }
    });
    console.log("Styles created");
  });
}
copyStyle();

//TO-DO - create index.html
function createHTML() {
  fs.readFile(srcHTML, "utf8", (err, data) => {
    if (err) console.log(err);
    fs.readdir(srcComponents, (err, files) => {
      if (err) console.log(err);
      files.forEach((file) => {
        if (path.extname(file).slice(1) === "html") {
          const fileName = path.parse(file).name;
          const result = data.match(new RegExp(`{{${fileName}}}`, "g"));
          if (data.includes(result)) {
            fs.readFile(
              path.join(srcComponents, file),
              "utf8",
              (err, component) => {
                if (err) console.log(err);
                data = data.replace(result, component);
                fs.writeFile(distHTML, data, (err) => {
                  if (err) console.log(err);
                });
              }
            );
          }
        }
      });
    });
  });
  console.log("HTML created");
}
createHTML();
