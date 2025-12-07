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
     * It should return all elements when all satisfy the predicate.
     */
    it("should return all elements when all match", () => {
      const numbers = [2, 4, 6];
      const result = filter(numbers, (n) => n % 2 === 0);
      expect(result).to.deep.equal([2, 4, 6]);
    });

    /**
     * It should pass index and array to predicate.
     */
    it("should pass index and array to predicate", () => {
      const arr = ["a", "b", "c"];
      const result = filter(arr, (value, index, array) => array[index] === value);
      expect(result).to.deep.equal(["a", "b", "c"]);
    });
  });
});
