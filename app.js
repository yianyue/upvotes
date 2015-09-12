var upvotes = require("./upvotes");

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = [];
var i = 0;
var str = '';
process.stdin.on("data", function (input) {
    _input[i] = input.trim().split(' ');
    i++;
});

process.stdin.on("end", function () {
   console.log(upvotes.processData(parseInt(_input[0]), parseInt(_input[1]), _input[2]));
});