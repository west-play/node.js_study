// const fs = require('fs');

// setInterval(() => {
//   fs.unlink('./abcdefg.js', (err) => {
//     if (err) {
//       console.error(err);
//     }
//   });
// }, 1000);


const fs = require('fs');

setInterval(() => {
  fs.unlink('./abcdefg.js', (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 2000);