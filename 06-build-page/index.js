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
//TO-DO - copy assets to project-dist
fs.mkdir(distAssets, { recursive: true }, function (err) {
  if (err && err.code === "EEXIST") {
    console.log(err);
  } else {
    console.log("distAssets created");
  }
});
fs.readdir(srcAssets, { withFileTypes: true }, (err, folders) => {
  if (err) throw err;
  folders.forEach((folder) => {
    const filePath = path.resolve(__dirname, srcAssets, folder.name);
    const filePathNew = path.resolve(__dirname, distAssets, folder.name);
    if (folder.isDirectory()) {
      fs.mkdir(filePathNew, { recursive: true }, (err) => {
        if (err) {
          throw err;
        }
        fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
          if (err) throw err;
          files.forEach((file) => {
            if (file.isFile()) {
              const filePath = path.resolve(__dirname, source, file.name);
              const filePathNew = path.resolve(
                __dirname,
                destination,
                file.name
              );
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
      });
      // } else {
      //   const filePathInFolder = path.resolve(filePath, file.name);
      //   console.log(filePathInFolder);
      //   const filePathInNewFolder = path.resolve(filePathNew, file.name);
      //   fs.copyFile((filePathInFolder, filePathInNewFolder), (err) => {
      //     if (err) {
      //       throw err;
      //     }
      //   });
    }
  });
  // const filePathNew = path.resolve(__dirname, distAssets, folder.name);
  // //console.log(filePathNew);
  // for (let i = 0; i < folders.length; i++) {
  //   fs.mkdir(filePathNew, { recursive: true }, function (err) {
  //     if (err && err.code === "EEXIST") {
  //       console.log(err);
  //     } else {
  //       console.log("folders in distAssets created");
  //     }
  //   });
  // }

  // fs.readdir(filePath, { withFileTypes: true }, (err, folders) => {
  //   if (err) throw err;
  //   for (let i = 0; i < folders.length; i++) {
  //     fs.createReadStream(filePath).pipe(fs.createWriteStream(filePathNew));
  //     console.log(`${folders[i].name} was copied to destination`);
  //   }
  // });
});
// else {
//   // files.forEach((file) => {
//   //   if (file.isFile()) {
//   const filePath = path.resolve(__dirname, srcAssets, file.name);
//   const filePathNew = path.resolve(__dirname, distAssets, file.name);
//   for (let i = 0; i < files.length; i++) {
//     fs.createReadStream(filePath[i]).pipe(
//       fs.createWriteStream(filePathNew[i])
//     );
//   }
// }
//   });
// });
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
// fs.readdir(srcComponents, { withFileTypes: true }, (err, components) => {
//   if (err) throw err;
//   components.forEach((component) => {
//     if (component.isFile()) {
//       const filePath = path.join(srcComponents, component.name);
//       const fileExt = path.parse(filePath).ext;
//       const fileName = path.parse(filePath).name;
//       const stream = fs.createReadStream(srcHTML, "utf8");
//       let data = "";
//       stream.on("data", (partData) => (data += partData));
//       // stream.on("end", () =>
//       //   fs.appendFile(testHTML, data, (err) => {
//       //     if (err) throw err;
//       //   })
//       // );
//       stream.on("error", (err) => {
//         console.log(`Err:${err}`);
//       });
//       if (fileExt === ".html") {
//         fs.readFile(filePath, "utf8", (err, text) => {
//           if (err) throw err;
//           // console.log(text);
//           let re = new RegExp(`{{${fileName}}}`);
//           //console.log(re);
//           let newData = data.toString().replace(re, text);
//           fs.writeFile(testHTML, newData, (err) => {
//             if (err) throw err;
//           });
//         });
//       }
//     }
//   });
// });
