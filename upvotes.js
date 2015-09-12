exports.processData = function(n, k, votes) {    
  var i, j, l;
  for(i = 0; i < n-k+1; i++){
    var str = '';
    var arr = [votes[i]];
    var nonDecr = 0;    

    for(j = i; j < i+k-1; j++){
      // find non-decr.
      if(votes[j] <= votes[j+1]){
        arr.push(votes[j+1]);
      } else {
        nonDecr += arr.length;
        console.log(arr);
        arr = [];
      };
    }
    
    console.log(arr);
  }
  return "something";
  // [3,0,-2];
}