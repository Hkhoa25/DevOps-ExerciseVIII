const { expect } = require("chai");
const isObject = require("../src/isObject.js").default;

/**
 * Unit tests for isObject.js
 *
 * @module test/isObject
 */
describe("isObject.js", () => {
  /**
   * Tests for the isObject() function
   */
  describe("isObject()", () => {
    /**
     * It should return true for plain objects.
     */
    it("should return true for {}", () => {
      expect(isObject({})).to.equal(true);
    });

    /**
     * It should return true for arrays.
     */
    it("should return true for [1,2,3]", () => {
      expect(isObject([1, 2, 3])).to.equal(true);
    });

    /**
     * It should return true for functions.
     */
    it("should return true for Function", () => {
      expect(isObject(Function)).to.equal(true);
    });

    /**
     * It should return true for regex objects.
     */
    it("should return true for /abc/", () => {
      expect(isObject(/abc/)).to.equal(true);
    });

    /**
     * It should return true for wrapper objects like new Number(0).
     */
    it("should return true for new Number(0)", () => {
      expect(isObject(new Number(0))).to.equal(true);
    });

    /**
     * It should return true for wrapper objects like new String('').
     */
    it("should return true for new String('')", () => {
      expect(isObject(new String(""))).to.equal(true);
    });

    /**
     * It should return false for null.
     */
    it("should return false for null", () => {
      expect(isObject(null)).to.equal(false);
    });

    /**
     * It should return false for undefined.
     */
    it("should return false for undefined", () => {
      expect(isObject(undefined)).to.equal(false);
    });

    /**
     * It should return false for primitive numbers.
     */
    it("should return false for 42", () => {
      expect(isObject(42)).to.equal(false);
    });

    /**
     * It should return false for primitive strings.
     */
    it("should return false for 'abc'", () => {
      expect(isObject("abc")).to.equal(false);
    });

    /**
     * It should return false for primitive booleans.
     */
    it("should return false for true", () => {
      expect(isObject(true)).to.equal(false);
    });

    it("should return false for false", () => {
      expect(isObject(false)).to.equal(false);
    });
  });
});
