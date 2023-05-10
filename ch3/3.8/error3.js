// const fs = require('fs').promises;

// setInterval(() => {
//   fs.unlink('./abcdefg.js')
// }, 1000);


const fs = require('fs').promises;

setInterval(() => {
  fs.unlink('./abcdefg.js')
}, 3000);