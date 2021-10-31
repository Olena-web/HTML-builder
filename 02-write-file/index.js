const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });
const stdout = process.stdout;
const stdin = process.stdin;
const filePath = path.join(__dirname, "answer.txt");

rl.question("Hi! What do you think of Node.js?\n", (data) => {
  stdout.write(
    `You can writedown something or To exit, press ^C or type .exit\n`
  );
  stdin.on("data", (data) => {
    answer = data.toString().trim();
    if (answer === "exit") {
      stdout.write(`Good luck,\n exit with code: ${code}`);
      process.exit();
    }
  });
  fs.writeFile(filePath, data, (err) => {
    if (err) throw err;
  });
  stdin.on("data", (data) => {
    fs.appendFile(filePath, data, (err) => {
      if (err) throw err;
    });

    //
  });
});
process.on("exit", (code) => {
  rl.close();
  stdout.write(`Good luck,\nexit with code: ${code}`);
  process.exit(0);
});
