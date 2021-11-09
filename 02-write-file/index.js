const fs = require("fs");
const path = require("path");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const stdout = process.stdout;
const stdin = process.stdin;
const filePath = path.join(__dirname, "answer.txt");
fs.writeFile(filePath, "" + "\n", (err) => {
  if (err) throw err;
});
stdout.write("Hi! What do you think of Node.js?\n");
rl.on("line", function (line) {
  if (line === "exit") {
    rl.close();
    stdout.write(`Good luck,\nexit with code: ${code}`);
    process.exit();
  }
}).on("close", function () {
  process.exit(0);
});

stdin.on("data", (data) => {
  fs.appendFile(filePath, data, (err) => {
    if (err) throw err;
  });
});
process.on("exit", (code) => {
  rl.close();
  stdout.write(`Good luck,\nexit with code: ${code}`);
  process.exit();
});
