//first create files with creating_new_file.js

var fs = require("fs");

fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
    if (err) throw err;
    console.log("File Renamed!");
});