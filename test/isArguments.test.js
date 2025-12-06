const { expect } = require("chai");
const isArguments = require("../src/isArguments.js").default; 

/**
 * Unit tests for isArguments.js
 *
 * @module test/isArguments
 */
describe("isArguments.js", () => {
  /**
   * Tests for the isArguments() function
   */
  describe("isArguments()", () => {
    /**
     * It should return true when value is an arguments object.
     */
    it("should return true for arguments object", () => {
      const result = (function () {
        return isArguments(arguments);
      })();
      expect(result).to.equal(true);
    });

    /**
     * It should return false when value is an array.
     */
    it("should return false for arrays", () => {
      expect(isArguments([1, 2, 3])).to.equal(false);
    });

    /**
     * It should return false when value is a plain object.
     */
    it("should return false for plain objects", () => {
      expect(isArguments({ a: 1 })).to.equal(false);
    });

    /**
     * It should return false when value is null.
     */
    it("should return false for null", () => {
      expect(isArguments(null)).to.equal(false);
    });

    /**
     * It should return false when value is undefined.
     */
    it("should return false for undefined", () => {
      expect(isArguments(undefined)).to.equal(false);
    });

    /**
     * It should return false when value is a string.
     */
    it("should return false for strings", () => {
      expect(isArguments("abc")).to.equal(false);
    });

    /**
     * It should return false when value is a number.
     */
    it("should return false for numbers", () => {
      expect(isArguments(123)).to.equal(false);
    });

    /**
     * It should return false when value is a function.
     */
    it("should return false for functions", () => {
      expect(isArguments(function () {})).to.equal(false);
    });
  });
});
