exports.processData = function(n, k, votes) {    
  var i, j, l;
  var result = [];
  for(i = 0; i < n-k+1; i++){
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
    result.push(nonDecr - nonIncr);
  }
  return result;
}