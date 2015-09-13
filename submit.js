function processData(input) {    
  var inputs = input.split('\n');
  var n = parseInt(inputs[0].split(' ')[0]);
  var k = parseInt(inputs[0].split(' ')[1]);
  var votes = [];
  
  inputs[1].split(' ').forEach(function(el){
    votes.push(parseInt(el));
  });
  
  var i, j, l;
  var result = [];

  for(i = 0; i < n-k+1; i++){
    var arr = [votes[i]];
    var arr2 = [votes[i]];
    var nonDecr = 0;
    var nonIncr = 0;    

    for(j = i; j < i+k-1; j++){
      // Non-decreasing
      if(votes[j] <= votes[j+1]){
        arr.push(votes[j+1]);
      } else {
        // Total number of non-decreasing subset = S(S−1)/2 
        nonDecr += (arr.length - 1)*arr.length/2;
        arr = [votes[j+1]];
      };
      // Non-increasing
      if(votes[j] >= votes[j+1]){
        arr2.push(votes[j+1]);
      } else {
        nonIncr += (arr2.length - 1)*arr2.length/2;
        arr2 = [votes[j+1]];
      };
    }
    nonDecr += (arr.length - 1)*arr.length/2;
    nonIncr += (arr2.length - 1)*arr2.length/2;
    console.log(nonDecr - nonIncr)
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

