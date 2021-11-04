const fs = require("fs");
const path = require("path");
const destination = path.resolve(__dirname, "project-dist");
const srcStyle = path.resolve(__dirname, "styles");
const distStyle = path.resolve(destination, "style.css");
const srcAssets = path.resolve(__dirname, "assets");
const srcHTML = path.resolve(__dirname, "template.html");
const srcComponents = path.resolve(__dirname, "components");
const distComponents = path.resolve(destination, "components");
const testHTML = path.resolve(__dirname, "test.html");
const distHTML = path.resolve(destination, "index.html");

//creating folder project-dist

// fs.mkdir(destination, { recursive: true }, function (err) {
//   if (err && err.code === "EEXIST") {
//     console.log(err);
//   } else {
//     console.log("project-dist created");
//   }
// });
//TO-DO - copy assets to project-dist

// fs.readdir(source, { withFileTypes: true }, (err, files) => {
//   if (err) throw err;
//   files.forEach((file) => {
//     if (file.isFile()) {
//       const filePath = path.resolve(__dirname, source, file.name);
//       const filePathNew = path.resolve(__dirname, destination, file.name);
//       fs.stat(filePath, (err, stats) => {
//         if (err) throw err;
//         fs.copyFile(filePath, filePathNew, (err) => {
//           if (err) throw err;
//           console.log(`${file.name} was copied to destination`);
//         });
//       });
//     }
//   });
// });

//  create style.css

// fs.readdir(srcStyle, { withFileTypes: true }, (err, files) => {
//   if (err) throw err;
//   fs.stat(distStyle, function (err, stats) {
//     //console.log(stats);
//     if (err) {
//       return console.error(err);
//     }
//     fs.unlink(distStyle, function (err) {
//       if (err) return console.log(err);
//       console.log("file remove for change");
//     });
//   });
//   files.forEach((file) => {
//     if (file.isFile()) {
//       const filePath = path.join(__dirname, "styles", file.name);
//       const fileExt = path.parse(filePath).ext;
//       fs.stat(filePath, (err, stats) => {
//         if (err) throw err;
//         if (fileExt === ".css") {
//           const stream = fs.createReadStream(filePath, "utf8");
//           let data = "";
//           stream.on("data", (partData) => (data += partData));
//           stream.on("end", () =>
//             fs.appendFile(distStyle, data, (err) => {
//               if (err) throw err;
//             })
//           );
//           stream.on("error", (err) => {
//             console.log(`Err:${err}`);
//           });
//         }
//       });
//     }
//   });
// });
//TO-DO - create index.html
// const stream = fs.createReadStream(srcHTML, "utf8");
// let data = "";
// stream.on("data", (partData) => (data += partData));
// stream.on("end", () =>
//   fs.appendFile(testHTML, data, (err) => {
//     if (err) throw err;
//   })
// );
// stream.on("error", (err) => {
//   console.log(`Err:${err}`);
// });
// TO-DO read components, find their names
fs.readdir(srcComponents, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  //   fs.stat(distComponents, function (err, stats) {
  //     //console.log(stats);
  //     if (err) {
  //       return console.error(err);
  //     }
  //     fs.unlink(distComponents, function (err) {
  //       if (err) return console.log(err);
  //       console.log("file remove for change");
  //     });
  //   });
  files.forEach((file) => {
    if (file.isFile()) {
      const filePath = path.join(srcComponents, file.name);
      const fileExt = path.parse(filePath).ext;
      const fileName = path.parse(filePath).name;
      fs.stat(filePath, (err, stats) => {
        if (err) throw err;
        if (fileExt === ".html") {
          console.log(fileName);
          //   const stream = fs.createReadStream(filePath, "utf8");
          //   let data = "";
          //   stream.on("data", (partData) => (data += partData));
          // stream.on("end", () =>
          //   fs.appendFile(distStyle, data, (err) => {
          //     if (err) throw err;
          //   })
          // );
          //   stream.on("error", (err) => {
          //     console.log(`Err:${err}`);
          //   });
        }
      });
    }
  });
});
