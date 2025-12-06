const { expect } = require("chai");
const every = require("../src/every.js").default; 

/**
 * Unit tests for every.js
 *
 * @module test/every
 */
describe("every.js", () => {
  /**
   * Tests for the every() function
   */
  describe("every()", () => {
    /**
     * It should return true when all elements satisfy the predicate.
     */
    it("should return true when all elements are truthy", () => {
      expect(every([1, 2, 3], Boolean)).to.equal(true);
    });

    /**
     * It should return false when any element fails the predicate.
     */
    it("should return false when one element is null", () => {
      expect(every([true, 1, null, "yes"], Boolean)).to.equal(false);
    });

    /**
     * It should return true for empty arrays (vacuous truth).
     */
    it("should return true for empty array", () => {
      expect(every([], Boolean)).to.equal(true);
    });

    /**
     * It should return false when predicate fails on first element.
     */
    it("should return false when first element fails predicate", () => {
      expect(every([0, 1, 2], Boolean)).to.equal(false);
    });

    /**
     * It should return true when array is null.
     */
    it("should return true when array is null", () => {
      expect(every(null, Boolean)).to.equal(true);
    });

    /**
     * It should handle custom predicate correctly.
     */
    it("should return true when all numbers are even", () => {
      expect(every([2, 4, 6], (n) => n % 2 === 0)).to.equal(true);
    });

    /**
     * It should return false when not all numbers are even.
     */
    it("should return false when some numbers are odd", () => {
      expect(every([2, 3, 4], (n) => n % 2 === 0)).to.equal(false);
    });
  });
});
