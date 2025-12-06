const { expect } = require("chai");
const isTypedArray = require("../src/isTypedArray.js").default;

/**
 * Unit tests for isTypedArray.js
 *
 * @module test/isTypedArray
 */
describe("isTypedArray.js", () => {
  /**
   * Tests for the isTypedArray() function
   */
  describe("isTypedArray()", () => {
    /**
     * It should return true for Uint8Array.
     */
    it("should return true for new Uint8Array()", () => {
      expect(isTypedArray(new Uint8Array())).to.equal(true);
    });

    /**
     * It should return true for Int16Array.
     */
    it("should return true for new Int16Array()", () => {
      expect(isTypedArray(new Int16Array())).to.equal(true);
    });

    /**
     * It should return true for Float32Array.
     */
    it("should return true for new Float32Array()", () => {
      expect(isTypedArray(new Float32Array())).to.equal(true);
    });

    /**
     * It should return false for plain arrays.
     */
    it("should return false for []", () => {
      expect(isTypedArray([])).to.equal(false);
    });

    /**
     * It should return false for plain objects.
     */
    it("should return false for {}", () => {
      expect(isTypedArray({})).to.equal(false);
    });

    /**
     * It should return false for strings.
     */
    it("should return false for 'abc'", () => {
      expect(isTypedArray("abc")).to.equal(false);
    });

    /**
     * It should return false for numbers.
     */
    it("should return false for 123", () => {
      expect(isTypedArray(123)).to.equal(false);
    });

    /**
     * It should return false for booleans.
     */
    it("should return false for true", () => {
      expect(isTypedArray(true)).to.equal(false);
    });

    it("should return false for false", () => {
      expect(isTypedArray(false)).to.equal(false);
    });

    /**
     * It should return false for null and undefined.
     */
    it("should return false for null", () => {
      expect(isTypedArray(null)).to.equal(false);
    });

    it("should return false for undefined", () => {
      expect(isTypedArray(undefined)).to.equal(false);
    });
  });
});
