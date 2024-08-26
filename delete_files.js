//first create files with creating_new_file.js
var fs = require("fs")

fs.unlink("mynewfile2.txt", function (err){
    if (err) throw err;
    console.log("file deleted");
});