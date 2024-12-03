const path = require('path');

const filePath = "D:\\Darshan University\\Data\\BTech\\Sem-4\\WT-2\\2024-25\\Codes\\index.js"
let ansDirName = path.dirname(filePath);
let ansBaseName = path.basename(filePath);
let ansExtName = path.extname(filePath);

console.log("ansDirName", ansDirName)
console.log("ansBaseName", ansBaseName)
console.log("ansExtName", ansExtName)