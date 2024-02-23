console.log("hello f1 group");

const http = require("node:http");
const hostname = "localhost:";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//

// const fs = require("node:fs/promises");
// async function example() {
//   try {
//     const data = await fs.readFile("./resume.txt", { encoding: "utf8" });
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// example();
console.log("Good bye f1");
