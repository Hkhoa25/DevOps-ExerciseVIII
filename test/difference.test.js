const { expect } = require("chai");
const difference = require("../src/difference.js").default; 

/**
 * Unit tests for difference.js
 *
 * @module test/difference
 */
describe("difference.js", () => {
  /**
   * Tests for the difference() function
   */
  describe("difference()", () => {
    /**
     * It should return values from the first array not present in the second.
     */
    it("should return [1] for difference([2,1],[2,3])", () => {
        expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
    });

    /**
     * It should return an empty array when all values are excluded.
     */
    it("should return [] when all values are excluded", () => {
        expect(difference([1, 2], [1, 2])).to.deep.equal([]);
    });

    /**
     * It should return the same array when no values are excluded.
     */
    it("should return [1,2,3] unchanged when no exclusions", () => {
        expect(difference([1, 2, 3])).to.deep.equal([1, 2, 3]);
    });

    /**
     * It should handle multiple exclusion arrays.
     */
    it("should exclude values from multiple arrays", () => {
        expect(difference([1, 2, 3, 4], [2], [3, 5])).to.deep.equal([1, 4]);
    });

    /**
     * It should return [] when input array is null.
     */
    it("should return [] when input array is null", () => {
        expect(difference(null, [1, 2])).to.deep.equal([]);
    });

    /**
     * It should handle empty exclusion arrays.
     */
    it("should return [1,2] when exclusions are empty", () => {
        expect(difference([1, 2], [])).to.deep.equal([1, 2]);
    });

    /**
     * It should handle non-array exclusions gracefully.
     */
    it("should exclude string values when provided", () => {
        expect(difference(["a", "b", "c"], ["b"])).to.deep.equal(["a", "c"]);
    });
  });
});
