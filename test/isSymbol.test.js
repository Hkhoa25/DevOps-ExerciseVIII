const { expect } = require("chai");
const isSymbol = require("../src/isSymbol.js").default;

/**
 * Unit tests for isSymbol.js
 *
 * @module test/isSymbol
 */
describe("isSymbol.js", () => {
  /**
   * Tests for the isSymbol() function
   */
  describe("isSymbol()", () => {
    /**
     * It should return true for symbol primitives.
     */
    it("should return true for Symbol()", () => {
      expect(isSymbol(Symbol())).to.equal(true);
    });

    it("should return true for Symbol.iterator", () => {
      expect(isSymbol(Symbol.iterator)).to.equal(true);
    });

    /**
     * It should return true for Symbol objects created with Object().
     */
    it("should return true for Object(Symbol('desc'))", () => {
      expect(isSymbol(Object(Symbol("desc")))).to.equal(true);
    });

    /**
     * It should return false for strings.
     */
    it("should return false for 'abc'", () => {
      expect(isSymbol("abc")).to.equal(false);
    });

    /**
     * It should return false for numbers.
     */
    it("should return false for 123", () => {
      expect(isSymbol(123)).to.equal(false);
    });

    /**
     * It should return false for booleans.
     */
    it("should return false for true", () => {
      expect(isSymbol(true)).to.equal(false);
    });

    it("should return false for false", () => {
      expect(isSymbol(false)).to.equal(false);
    });

    /**
     * It should return false for null and undefined.
     */
    it("should return false for null", () => {
      expect(isSymbol(null)).to.equal(false);
    });

    it("should return false for undefined", () => {
      expect(isSymbol(undefined)).to.equal(false);
    });

    /**
     * It should return false for plain objects and arrays.
     */
    it("should return false for {}", () => {
      expect(isSymbol({})).to.equal(false);
    });

    it("should return false for []", () => {
      expect(isSymbol([])).to.equal(false);
    });
  });
});
