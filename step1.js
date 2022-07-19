const fs = require('fs');
const process = require('process');

/** read file at path and print it out. */

function cat(Path) {
  fs.readFile(Path, 'utf8', function(err, data) {
    if (err) {
      console.log('ERROR:',err);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

cat('one.txt')