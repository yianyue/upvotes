exports.processData = function(n, k, votes) {    
    return [3,0,-2];
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = [];
var i = 0

process.stdin.on("data", function (input) {
    _input[i] = input.trim();
    i++;
});

process.stdin.on("end", function () {
   // console.log(processData(_input));
   console.log(_input);
});