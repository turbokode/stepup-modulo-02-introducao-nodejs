const path = require('path');
// console.log('Hello world');
console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
// console.log(global);

for (let key in global) console.log(key);
