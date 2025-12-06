const { expect } = require("chai");
const memoize = require("../src/memoize.js").default;

/**
 * Unit tests for memoize.js
 *
 * @module test/memoize
 */
describe("memoize.js", () => {
  /**
   * Tests for the memoize() function
   */
  describe("memoize()", () => {
    /**
     * It should memoize results based on the first argument by default.
     */
    it("should memoize results using first argument as key", () => {
      let callCount = 0;
      const fn = (x) => {
        callCount++;
        return x * 2;
      };
      const memoized = memoize(fn);

      expect(memoized(2)).to.equal(4);
      expect(memoized(2)).to.equal(4);
      expect(callCount).to.equal(1); // second call should use cache
    });

    /**
     * It should throw TypeError if func is not a function.
     */
    it("should throw TypeError if func is not a function", () => {
      expect(() => memoize(123)).to.throw(TypeError);
    });

    /**
     * It should throw TypeError if resolver is not a function.
     */
    it("should throw TypeError if resolver is not a function", () => {
      const fn = (x) => x;
      expect(() => memoize(fn, 123)).to.throw(TypeError);
    });

  });
});
