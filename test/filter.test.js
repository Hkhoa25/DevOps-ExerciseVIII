const { expect } = require("chai");
const filter = require("../src/filter.js").default; 

/**
 * Unit tests for filter.js
 *
 * @module test/filter
 */
describe("filter.js", () => {
  /**
   * Tests for the filter() function
   */
  describe("filter()", () => {

    /**
     * It should return an empty array when no elements satisfy the predicate.
     */
    it("should return [] when no elements match", () => {
      const numbers = [1, 2, 3];
      const result = filter(numbers, (n) => n > 5);
      expect(result).to.deep.equal([]);
    });

    /**
     * It should return all elements when all satisfy the predicate.
     */
    it("should return all elements when all match", () => {
      const numbers = [2, 4, 6];
      const result = filter(numbers, (n) => n % 2 === 0);
      expect(result).to.deep.equal([2, 4, 6]);
    });

    /**
     * It should return [] when array is null.
     */
    it("should return [] when array is null", () => {
      const result = filter(null, Boolean);
      expect(result).to.deep.equal([]);
    });

    /**
     * It should pass index and array to predicate.
     */
    it("should pass index and array to predicate", () => {
      const arr = ["a", "b", "c"];
      const result = filter(arr, (value, index, array) => array[index] === value);
      expect(result).to.deep.equal(["a", "b", "c"]);
    });

    /**
     * It should handle empty arrays.
     */
    it("should return [] when input array is empty", () => {
      const result = filter([], Boolean);
      expect(result).to.deep.equal([]);
    });
  });
});
