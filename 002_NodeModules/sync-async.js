const fs = require("fs")

// const data = fs.readFileSync("test.txt", "utf-8")
// console.log(data);
// console.log("calling after readsync");

fs.readFile("test.txt", "utf-8", (err, data) => {
    console.log(data);
})
console.log("calling after readasync");