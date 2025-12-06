const { expect } = require("chai");
const slice = require("../src/slice.js").default;
/**
 * Unit tests for slice.js
 *
 * @module test/slice
 */
describe("slice.js", () => {
  /**
   * Tests for the slice() function
   */
  describe("slice()", () => {
    /**
     * It should slice from a given start index to the end.
     */
    it("should return [3,4] for slice([1,2,3,4],2)", () => {
      expect(slice([1, 2, 3, 4], 2)).to.deep.equal([3, 4]);
    });

    /**
     * It should slice between start and end indices.
     */
    it("should return [2,3] for slice([1,2,3,4],1,3)", () => {
      expect(slice([1, 2, 3, 4], 1, 3)).to.deep.equal([2, 3]);
    });

    /**
     * It should handle negative start index.
     */
    it("should return [3,4] for slice([1,2,3,4],-2)", () => {
      expect(slice([1, 2, 3, 4], -2)).to.deep.equal([3, 4]);
    });

    /**
     * It should handle negative end index.
     */
    it("should return [1,2] for slice([1,2,3,4],0,-2)", () => {
      expect(slice([1, 2, 3, 4], 0, -2)).to.deep.equal([1, 2]);
    });

    /**
     * It should return [] if start > end.
     */
    it("should return [] for slice([1,2,3,4],3,1)", () => {
      expect(slice([1, 2, 3, 4], 3, 1)).to.deep.equal([]);
    });

    /**
     * It should return [] for empty array.
     */
    it("should return [] for slice([],0,1)", () => {
      expect(slice([], 0, 1)).to.deep.equal([]);
    });

    /**
     * It should return [] for null input.
     */
    it("should return [] for slice(null,0,1)", () => {
      expect(slice(null, 0, 1)).to.deep.equal([]);
    });

    /**
     * It should return [] for undefined input.
     */
    it("should return [] for slice(undefined,0,1)", () => {
      expect(slice(undefined, 0, 1)).to.deep.equal([]);
    });

    /**
     * It should slice full array when no start/end provided.
     */
    it("should return [1,2,3,4] for slice([1,2,3,4])", () => {
      expect(slice([1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4]);
    });

    /**
     * It should handle start greater than array length.
     */
    it("should return [] for slice([1,2,3],10)", () => {
      expect(slice([1, 2, 3], 10)).to.deep.equal([]);
    });

    /**
     * It should handle end greater than array length.
     */
    it("should return [2,3] for slice([1,2,3],1,10)", () => {
      expect(slice([1, 2, 3], 1, 10)).to.deep.equal([2, 3]);
    });
  });
});
