const { expect } = require("chai");
const drop = require("../src/drop.js").default;

/**
 * Unit tests for drop.js
 *
 * @module test/drop
 */
describe("drop.js", () => {
  /**
   * Tests for the drop() function
   */
  describe("drop()", () => {
    /**
     * It should drop one element by default.
     */
    it("should drop the first element from [1,2,3]", () => {
        expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
    });

    /**
     * It should drop two elements when n=2.
     */
    it("should drop the first two elements from [1,2,3]", () => {
        expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
    });

    /**
     * It should return [] when n is greater than array length.
     */
    it("should return [] when dropping 5 elements from [1,2,3]", () => {
        expect(drop([1, 2, 3], 5)).to.deep.equal([]);
    });

    /**
     * It should return the same array when n=0.
     */
    it("should return [1,2,3] unchanged when n=0", () => {
        expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
    });

    /**
     * It should return [] when array is null.
     */
    it("should return [] when array is null", () => {
        expect(drop(null, 2)).to.deep.equal([]);
    });

    /**
     * It should treat negative n as 0.
     */
    it("should return [1,2,3] unchanged when n=-2", () => {
        expect(drop([1, 2, 3], -2)).to.deep.equal([1, 2, 3]);
    });

    /**
     * It should coerce string n to integer.
     */
    it("should drop two elements when n='2'", () => {
        expect(drop([1, 2, 3], "2")).to.deep.equal([3]);
    });

    /**
     * It should coerce float n to integer.
     */
    it("should drop one element when n=1.9", () => {
        expect(drop([1, 2, 3], 1.9)).to.deep.equal([2, 3]);
    });

    /**
     * It should handle empty arrays.
     */
    it("should return [] when input array is empty", () => {
        expect(drop([], 2)).to.deep.equal([]);
    });
  });
});
