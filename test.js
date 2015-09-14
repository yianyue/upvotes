var assert = require("assert");
var upvotes = require("./upvotes");

describe('Upvotes', function() {
  describe('#processData()', function () {
    
    it('should return non-decreasing and non-increasing subranges', function () {
      // Deep (aka structural) equality does not test whether the operands are the same object, but rather that they're equivalent.
      assert.deepEqual([3,0,-2], upvotes.processData(5, 3, [1, 2, 3, 1, 1]));
    });

    it('should work on the maximum number of votes', function () {
      var max = 100000,
        i = max,
        kM = 10,
        votesM = [],
        resultM = [];
        // if the number of votes is constant, the program should return an array of 0s
      while(i--){
        votesM[i] = 1;
        resultM[i] = 0;
      }
      resultM = resultM.slice(0, max - kM + 1);

      assert.deepEqual(resultM, upvotes.processData(max, kM, votesM));
    });
  });
});