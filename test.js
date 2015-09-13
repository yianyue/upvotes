var assert = require("assert");
var upvotes = require("./upvotes");

describe('Upvotes', function() {
  describe('#processData()', function () {
    it('should return non-decreasing and non-increasing subranges', function () {
      // Deep (aka structural) equality does not test whether the operands are the same object, but rather that they're equivalent.
      assert.deepEqual([3,0,-2], upvotes.processData(5, 3, [1, 2, 3, 1, 1]));
    });
    it('should work on the maximum number of votes', function () {
      var max = 10000,
        i = max,
        kM = 3,
        votesM = [],
        resultM = [];

      while(i--){
        votesM[i] = 1;
        resultM[i] = 0;
      }

      resultM = resultM.slice(max - kM);
      assert.deepEqual(resultM, upvotes.processData(max, kM, votesM));
    });
  });
});