const fs = require("fs");
const path = require("path");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const stdout = process.stdout;
const stdin = process.stdin;
const filePath = path.join(__dirname, "answer.txt");

rl.question("Hi! What do you think of Node.js?\n", (data) => {
  rl.on("line", function (line) {
    if (line === "exit") rl.close();
  }).on("close", function () {
    process.exit(0);
  });
  stdout.write(
    `You can writedown something or To exit, press ^C or type exit\n`
  );
  fs.writeFile(filePath, data + "\n", (err) => {
    if (err) throw err;
  });

  stdin.on("data", (data) => {
    fs.appendFile(filePath, data, (err) => {
      if (err) throw err;
    });
  });
});
process.on("exit", (code) => {
  rl.close();
  stdout.write(`Good luck,\nexit with code: ${code}`);
  process.exit();
});
