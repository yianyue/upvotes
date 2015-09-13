function processData(input) {    
  var inputs = input.split('\n');
  var n = parseInt(inputs[0].split(' ')[0]);
  var k = parseInt(inputs[0].split(' ')[1]);

  var votes = [];
  inputs.shift();
  inputs.join(' ').trim().split(' ').forEach(function(el){
    votes.push(parseInt(el));
  });
  
  var i, j, l;

  for(i = 0; i < n-k+1; i++){
    var counter = 1;
    var counter2 = 1;
    var nonDecr = 0;
    var nonIncr = 0;    

    for(j = i; j < i+k-1; j++){
      // Non-decreasing
      if(votes[j] <= votes[j+1]){
        counter += 1;
      } else {
        // Total number of non-decreasing subset = S(S−1)/2 
        nonDecr += (counter - 1)*counter/2;
        counter = 1;
      };
      // Non-increasing
      if(votes[j] >= votes[j+1]){
        counter2 += 1
      } else {
        nonIncr += (counter2 - 1)*counter2/2;
        counter2 = 1;
      };
    }
    nonDecr += (counter - 1)*counter/2;
    nonIncr += (counter2 - 1)*counter2/2;
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

