exports.processData = function(n, k, votes) {    
  var i, j, l;
  for(i = 0; i < n-k+1; i++){
    var str = '';
    var arr = [votes[i]];
    var nonDecr = 0;    

    for(j = i; j < i+k-1; j++){
      // Non-decreasing
      if(votes[j] <= votes[j+1]){
        arr.push(votes[j+1]);
      } else {
        // Total number of non-decreasing subset = S(S−1)/2 
        nonDecr += (arr.length - 1)*arr.length/2;
        console.log(arr);
        arr = [votes[j+1]];
      };
      // Non-increasing
      
    }
    nonDecr += (arr.length - 1)*arr.length/2;
    console.log(arr, nonDecr);
  }
  return "something";
  // [3,0,-2];
}