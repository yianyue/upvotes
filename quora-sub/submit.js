function processData(input) {    
  var inputs = input.split('\n');
  var n = parseInt(inputs[0].split(' ')[0]);
  var k = parseInt(inputs[0].split(' ')[1]);

  inputs.shift();
  var votes = [];
  inputs = inputs.join(' ').trim().split(' ');
  var l = inputs.length;
// while is supposed to be faster
  while(l--){
    votes[l] = parseInt(inputs[l]);
  }

  for(var i = 0; i < n-k+1; i++){
    var counterD = 1;
    var counterI = 1;
    var nonDecr = 0;
    var nonIncr = 0;    

    for(var j = i; j < i+k-1; j++){
      if(votes[j] == votes[j+1]){
        counterD += 1;
        counterI += 1;
      } else if (votes[j] < votes[j+1]){
        counterD += 1;
        nonIncr += (counterI - 1)*counterI/2;
        counterI = 1;
      } else {
        counterI += 1;
        nonDecr += (counterD - 1)*counterD/2;
        counterD = 1;
      }
    }
    
    nonDecr += (counterD - 1)*counterD/2;
    nonIncr += (counterI - 1)*counterI/2;
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