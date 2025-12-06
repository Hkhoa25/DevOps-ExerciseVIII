const { expect } = require("chai");
const isObjectLike = require("../src/isObjectLike.js").default;

/**
 * Unit tests for isObjectLike.js
 *
 * @module test/isObjectLike
 */
describe("isObjectLike.js", () => {
  /**
   * Tests for the isObjectLike() function
   */
  describe("isObjectLike()", () => {
    /**
     * It should return true for plain objects.
     */
    it("should return true for {}", () => {
      expect(isObjectLike({})).to.equal(true);
    });

    /**
     * It should return true for arrays.
     */
    it("should return true for [1,2,3]", () => {
      expect(isObjectLike([1, 2, 3])).to.equal(true);
    });

    /**
     * It should return false for functions.
     */
    it("should return false for Function", () => {
      expect(isObjectLike(Function)).to.equal(false);
    });

    /**
     * It should return false for null.
     */
    it("should return false for null", () => {
      expect(isObjectLike(null)).to.equal(false);
    });

    /**
     * It should return false for undefined.
     */
    it("should return false for undefined", () => {
      expect(isObjectLike(undefined)).to.equal(false);
    });

    /**
     * It should return false for primitive numbers.
     */
    it("should return false for 42", () => {
      expect(isObjectLike(42)).to.equal(false);
    });

    /**
     * It should return false for primitive strings.
     */
    it("should return false for 'abc'", () => {
      expect(isObjectLike("abc")).to.equal(false);
    });

    /**
     * It should return false for primitive booleans.
     */
    it("should return false for true", () => {
      expect(isObjectLike(true)).to.equal(false);
    });

    it("should return false for false", () => {
      expect(isObjectLike(false)).to.equal(false);
    });
  });
});
