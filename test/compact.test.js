const { expect } = require("chai");
const compact = require("../src/compact.js").default; 

/**
 * Unit tests for compact.js
 *
 * @module test/compact
 */
describe("compact.js", () => {
  /**
   * Tests for the compact() function
   */
  describe("compact()", () => {
    /**
     * It should remove all falsey values from the array.
     */
    it("should remove falsey values from [0, 1, false, 2, '', 3]", () => {
        expect(compact([0, 1, false, 2, "", 3])).to.deep.equal([1, 2, 3]);
    });

    /**
     * It should return an empty array when all values are falsey.
     */
    it("should return [] when all values are falsey", () => {
        expect(compact([false, null, 0, "", undefined, NaN])).to.deep.equal([]);
    });

    /**
     * It should return the same array when no values are falsey.
     */
    it("should return [1,2,3] unchanged when all values are truthy", () => {
        expect(compact([1, 2, 3])).to.deep.equal([1, 2, 3]);
    });

    /**
     * It should handle an empty array input.
     */
    it("should return [] when input array is empty", () => {
        expect(compact([])).to.deep.equal([]);
    });

    /**
     * It should handle mixed types correctly.
     */
    it("should remove falsey values from ['a', 0, 'b', null, 'c']", () => {
        expect(compact(["a", 0, "b", null, "c"])).to.deep.equal(["a", "b", "c"]);
    });
  });
});
