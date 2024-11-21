console.log("Hello World");
console.log(process.env.USER);

// reading file using fs

// const { readFileSync, readFile } = require("fs");

// readFile("./helo.txt", "utf8", (error, text) => {
//   if (error) {
//     console.log(error)
//   }
//   console.log(text);
// });

// reading file using fs promise

const { readFile } = require("fs").promises;

// async function readFileAsync(filePath, encoding) {
//   const file = await readFile("./helo.txt", "utf8");
//   console.log(file);
// }
// readFileAsync();

// making module using module.exports

// const myModule = require("./my-module");
// console.log(myModule.name);

// start

const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.send(await readFile("./index.html", "utf8"));
});

app.listen(process.env.PORT || 3000, () =>
  console.log("App is able in http://localhost:3000")
);
