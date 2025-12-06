const { expect } = require("chai");
const reduce = require("../src/reduce.js").default;

/**
 * Unit tests for reduce.js
 *
 * @module test/reduce
 */
describe("reduce.js", () => {
  /**
   * Tests for the reduce() function
   */
  describe("reduce()", () => {
    /**
     * It should reduce an array with an initial accumulator.
     */
    it("should sum [1,2] with initial accumulator 0", () => {
      const result = reduce([1, 2], (sum, n) => sum + n, 0);
      expect(result).to.equal(3);
    });

    /**
     * It should reduce an array without an initial accumulator.
     */
    it("should sum [1,2,3] without initial accumulator", () => {
      const result = reduce([1, 2, 3], (sum, n) => sum + n);
      expect(result).to.equal(6);
    });

    /**
     * It should reduce an object to grouped keys by value.
     */
    it("should group object keys by their values", () => {
      const obj = { a: 1, b: 2, c: 1 };
      const result = reduce(
        obj,
        (res, value, key) => {
          (res[value] || (res[value] = [])).push(key);
          return res;
        },
        {}
      );
      expect(result[1]).to.include.members(["a", "c"]);
      expect(result[2]).to.include.members(["b"]);
    });

    /**
     * It should return the initial accumulator for empty array.
     */
    it("should return initial accumulator for []", () => {
      const result = reduce([], (sum, n) => sum + n, 10);
      expect(result).to.equal(10);
    });

    /**
     * It should return undefined for empty array without initial accumulator.
     */
    it("should return undefined for [] without initial accumulator", () => {
      const result = reduce([], (sum, n) => sum + n);
      expect(result).to.equal(undefined);
    });

    /**
     * It should handle strings as array-like collections.
     */
    it("should concatenate characters of 'abc'", () => {
      const result = reduce("abc", (acc, ch) => acc + ch, "");
      expect(result).to.equal("abc");
    });

    /**
     * It should handle null and undefined collections.
     */
    it("should return initial accumulator for null collection", () => {
      const result = reduce(null, (sum, n) => sum + n, 5);
      expect(result).to.equal(5);
    });

    it("should return initial accumulator for undefined collection", () => {
      const result = reduce(undefined, (sum, n) => sum + n, 7);
      expect(result).to.equal(7);
    });
  });
});
