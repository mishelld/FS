import fs from "fs";
const readFileWithErrorHandling = function (filename, callback) {
  fs.stat(filename, (err, stats) => {
    if (err) {
      callback(`File not found: ${filename}`);
      return;
    }

    if (stats.isDirectory()) {
      callback(`${filename} is a directory not a file`);
      return;
    }
  });
  fs.readFile(filename, (err, data) => {
    if (err) {
      callback(`error reading the file ${filename}`);
      return;
    }

    callback(`File read successfully. Size: ${data.length} bytes`);
  });
};

readFileWithErrorHandling("temp", (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});
