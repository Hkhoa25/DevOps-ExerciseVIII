const { expect } = require("chai");
const isArrayLike = require("../src/isArrayLike.js").default; 

/**
 * Unit tests for isArrayLike.js
 *
 * @module test/isArrayLike
 */
describe("isArrayLike.js", () => {
  /**
   * Tests for the isArrayLike() function
   */
  describe("isArrayLike()", () => {
    /**
     * It should return true for arrays.
     */
    it("should return true for [1,2,3]", () => {
      expect(isArrayLike([1, 2, 3])).to.equal(true);
    });

    /**
     * It should return true for array-like objects (with length).
     */
    it("should return true for { length: 2 }", () => {
      expect(isArrayLike({ length: 2 })).to.equal(true);
    });

    /**
     * It should return true for strings.
     */
    it("should return true for 'abc'", () => {
      expect(isArrayLike("abc")).to.equal(true);
    });

    /**
     * It should return false for functions.
     */
    it("should return false for Function", () => {
      expect(isArrayLike(Function)).to.equal(false);
    });

    /**
     * It should return false for null.
     */
    it("should return false for null", () => {
      expect(isArrayLike(null)).to.equal(false);
    });

    /**
     * It should return false for undefined.
     */
    it("should return false for undefined", () => {
      expect(isArrayLike(undefined)).to.equal(false);
    });

    /**
     * It should return false for objects without length.
     */
    it("should return false for {}", () => {
      expect(isArrayLike({})).to.equal(false);
    });

    /**
     * It should return false for negative length.
     */
    it("should return false for { length: -1 }", () => {
      expect(isArrayLike({ length: -1 })).to.equal(false);
    });

    /**
     * It should return false for length greater than Number.MAX_SAFE_INTEGER.
     */
    it("should return false for { length: Number.MAX_SAFE_INTEGER + 1 }", () => {
      expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER + 1 })).to.equal(false);
    });
  });
});
