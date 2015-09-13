var upvotes = require("./upvotes");

var start = process.hrtime();

var elapsed_time = function(note){
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
}

var max = 1000000,
      i = max,
      kM = 3,
      votesM = [];

while(i--){
  votesM[i] = 100;
}

var result = upvotes.processData(max, kM, votesM)

elapsed_time("end loop for "+ result.length);