var assert = require("assert");
var upvotes = require("./upvotes");

describe('Upvotes', function() {
  describe('#processData()', function () {
    it('should return non-decreasing and non-increasing subranges', function () {
      // Deep (aka structural) equality does not test whether the operands are the same object, but rather that they're equivalent.
      assert.deepEqual([3,0,-2], upvotes.processData(5, 3, [1, 2, 3, 1, 1]));
    });
  });
});