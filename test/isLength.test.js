const { expect } = require("chai");
const isLength = require("../src/isLength.js").default;

/**
 * Unit tests for isLength.js
 *
 * @module test/isLength
 */
describe("isLength.js", () => {
  /**
   * Tests for the isLength() function
   */
  describe("isLength()", () => {
    /**
     * It should return true for valid lengths.
     */
    it("should return true for 3", () => {
      expect(isLength(3)).to.equal(true);
    });

    it("should return true for 0", () => {
      expect(isLength(0)).to.equal(true);
    });

    it("should return true for MAX_SAFE_INTEGER", () => {
      expect(isLength(9007199254740991)).to.equal(true);
    });

    /**
     * It should return false for non-integer numbers.
     */
    it("should return false for 3.5", () => {
      expect(isLength(3.5)).to.equal(false);
    });

    /**
     * It should return false for negative numbers.
     */
    it("should return false for -1", () => {
      expect(isLength(-1)).to.equal(false);
    });

    /**
     * It should return false for Number.MIN_VALUE.
     */
    it("should return false for Number.MIN_VALUE", () => {
      expect(isLength(Number.MIN_VALUE)).to.equal(false);
    });

    /**
     * It should return false for Infinity.
     */
    it("should return false for Infinity", () => {
      expect(isLength(Infinity)).to.equal(false);
    });

    /**
     * It should return false for strings.
     */
    it("should return false for '3'", () => {
      expect(isLength("3")).to.equal(false);
    });

    /**
     * It should return false for null and undefined.
     */
    it("should return false for null", () => {
      expect(isLength(null)).to.equal(false);
    });

    it("should return false for undefined", () => {
      expect(isLength(undefined)).to.equal(false);
    });

    /**
     * It should return false for objects and arrays.
     */
    it("should return false for {}", () => {
      expect(isLength({})).to.equal(false);
    });

    it("should return false for []", () => {
      expect(isLength([])).to.equal(false);
    });
  });
});
