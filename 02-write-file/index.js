const fs = require("fs");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });
const stdout = process.stdout;
const stdin = process.stdin;
// rl.question("Hi! What do you think of Node.js? ", (answer) => {
//   // TODO: Log the answer in a database
// stdin.on("data", (data)=>
// fs.writeFile(
// '02-write-file',
// `${data}`,
// 'utf8',
// (err)=>{
//     if(err) throw err;
//     console.log('done');
// }
// );

// process.on("beforeExit", () => {
//   stdout.write("Good luck\n");
// });

process.on("exit", (code) => {
  rl.close();
  stdout.write("Good luck\n");
  process.exit();
});
if (`${stdin}` == "exit") {
  stdout.write("exit");
  rl.close();
  stdout.write("Process exit event with code: ", code);
  process.exit();
}
