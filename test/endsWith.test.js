const { expect } = require("chai");
const endsWith = require("../src/endsWith.js").default;
/**
 * Unit tests for endsWith.js
 *
 * @module test/endsWith
 */
describe("endsWith.js", () => {
  /**
   * Tests for the endsWith() function
   */
  describe("endsWith()", () => {
    /**
     * It should return true when string ends with target.
     */
    it("should return true for endsWith('abc','c')", () => {
        expect(endsWith("abc", "c")).to.equal(true);
    });

    /**
     * It should return false when string does not end with target.
     */
    it("should return false for endsWith('abc','b')", () => {
        expect(endsWith("abc", "b")).to.equal(false);
    });

    /**
     * It should respect the position argument.
     */
    it("should return true for endsWith('abc','b',2)", () => {
        expect(endsWith("abc", "b", 2)).to.equal(true);
    });

    /**
     * It should clamp position greater than length to length.
     */
    it("should return true for endsWith('abc','c',10)", () => {
        expect(endsWith("abc", "c", 10)).to.equal(true);
    });

    /**
     * It should treat negative position as 0.
     */
    it("should return false for endsWith('abc','a',-1)", () => {
        expect(endsWith("abc", "a", -1)).to.equal(false);
    });

    /**
     * It should handle NaN position by treating it as 0.
     */
    it("should return false for endsWith('abc','a',NaN)", () => {
        expect(endsWith("abc", "a", NaN)).to.equal(false);
    });

    /**
     * It should return false when target is longer than string.
     */
    it("should return false for endsWith('abc','abcd')", () => {
        expect(endsWith("abc", "abcd")).to.equal(false);
    });

    /**
     * It should return true when target equals the whole string.
     */
    it("should return true for endsWith('abc','abc')", () => {
        expect(endsWith("abc", "abc")).to.equal(true);
    });

    /**
     * It should handle empty target string.
     */
    it("should return true for endsWith('abc','')", () => {
        expect(endsWith("abc", "")).to.equal(true);
    });

    /**
     * It should handle empty string input.
     */
    it("should return false for endsWith('','a')", () => {
        expect(endsWith("", "a")).to.equal(false);
    });
  });
});
