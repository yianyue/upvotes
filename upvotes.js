exports.processData = function(n, k, votes) {    
  var i,
      j;
  for(i = 0; i < n-k+1; i++){
    console.log(i, votes[i]);
    var str = '';
    for(j = 0; j < k; j++){
      str += ' '+votes[i+j];
    }
    console.log(str);
  }
  return "something";
  // [3,0,-2];
}