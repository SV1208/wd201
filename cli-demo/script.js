//
//
//
//
//
//
//
// const minimist = require("minimist");
// const args = minimist(process.argv.slice(2), {
//   alias: {
//     num1: "n1",
//     num2: "n2",
//   },
// });

// console.log(`Num1 is: ${args.num1}`); // Works with --num1 or -n1
//
//
//
//
// const args = minimist(process.argv.slice(2), {
//   default: {
//     num1: 1,
//   },
// });

// console.log(`Num1 is: ${args.num1}`);
//
//
//
//
//
//
//
//
// const minimist = require("minimist");
// const args = minimist(process.argv.slice(2));

// // Now we can access our arguments by name
// const num1 = parseInt(args.num1);
// const num2 = parseInt(args.num2);
// const operation = args.operation;

// if (operation === "add") {
//   console.log(`The result is: ${num1 + num2}`);
// } else if (operation === "subtract") {
//   console.log(`The result is: ${num1 - num2}`);
// } else if (operation === "multiply") {
//   console.log(`The result is: ${num1 * num2}`);
// } else {
//   console.log("Unknown operation");
// }
//
//
//
//
//
//
// const args = process.argv;
//
// const operation = args[2];
// const num1 = parseInt(args[3]);
// const num2 = parseInt(args[4]);
//
// if (operation === "+") {
//   console.log(`The result is: ${num1 + num2}`);
// } else if (operation === "-") {
//   console.log(`The result is: ${num1 - num2}`);
// } else if (operation === "x") {
//   console.log(`The result is: ${num1 * num2}`);
// } else if (operation === "/") {
//   console.log(`The result is: ${num1 / num2}`);
// } else {
//   console.log("Unknown Operation");
// }
//
//
//
//
//
//
//
// console.log("args[0]:", args[0]);
// console.log("args[1]:", args[1]);
// console.log("args[2]:", args[2]);
// console.log("args[3]:", args[3]);
//
//
//
//
// const readline = require("readline");
// const lineDetail = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// lineDetail.question("Provide your name: ", (name) => {
//   console.log(`Hi ${name}!`);
//   lineDetail.close();
// });