const { expect } = require("chai");
const isBuffer = require("../src/isBuffer.js").default;

/**
 * Unit tests for isBuffer.js
 *
 * @module test/isBuffer
 */
describe("isBuffer.js", () => {
  /**
   * Tests for the isBuffer() function
   */
  describe("isBuffer()", () => {
    /**
     * It should return false for Uint8Array.
     */
    it("should return false for new Uint8Array(2)", () => {
      const arr = new Uint8Array(2);
      expect(isBuffer(arr)).to.equal(false);
    });

    /**
     * It should return false for arrays.
     */
    it("should return false for [1,2,3]", () => {
      expect(isBuffer([1, 2, 3])).to.equal(false);
    });

    /**
     * It should return false for plain objects.
     */
    it("should return false for {}", () => {
      expect(isBuffer({})).to.equal(false);
    });

    /**
     * It should return false for strings.
     */
    it("should return false for 'abc'", () => {
      expect(isBuffer("abc")).to.equal(false);
    });

    /**
     * It should return false for numbers.
     */
    it("should return false for 123", () => {
      expect(isBuffer(123)).to.equal(false);
    });

    /**
     * It should return false for null and undefined.
     */
    it("should return false for null", () => {
      expect(isBuffer(null)).to.equal(false);
    });

    it("should return false for undefined", () => {
      expect(isBuffer(undefined)).to.equal(false);
    });
  });
});
