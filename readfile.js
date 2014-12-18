var fs = require('fs');
var fileContentBuf = fs.readFileSync(process.argv[2]);
var fileContentStr = fileContentBuf.toString();
var splitArray = fileContentStr.split("\n");
console.log(splitArray.length-1);


