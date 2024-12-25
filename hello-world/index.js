const http = require("http"); // Use "http" instead of "https"
const fs = require("fs");

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("sample.txt");
  stream.pipe(res);
  // fs.readFile("sample.txt", (err, data) => {
  //   res.end(data);
  // });
});
server.listen(3000);

//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const fs = require("fs");

// fs.unlink("test.txt", (err) => {
//   if (err) throw err;
//   console.log("File test.txt deleted successfully!");
// });

// fs.rename("sample.txt", "test.txt", (err) => {
//   if (err) throw err;
//   console.log("File name updated!");
// });

// fs.appendFile("sample.txt", " This is my updated content", (err) => {
//   if (err) throw err;
//   console.log("File updated!");
// });

// fs.readFile("sample.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// fs.writeFile(
//   "sample.txt",
//   "Hello world. Welcome to Node.js file system module.",
//   (err) => {
//     if (err) throw err;
//     console.log("File created!");
//   }
// );
