const { appendFile } = require("fs");
const os = require("os")
//const calc = require("./calc")

console.log(os.arch());
console.log(os.platform());
console.log(os.totalmem() / 1024 / 1024 / 1024);
console.log(os.freemem() / 1024 / 1024 / 1024);
console.log(os.version());


