const { expect } = require("chai");
const toNumber = require("../src/toNumber.js").default;

/**
 * Unit tests for toNumber.js
 *
 * @module test/toNumber
 */
describe("toNumber.js", () => {
  /**
   * Tests for the toNumber() function
   */
  describe("toNumber()", () => {
    /**
     * It should return numbers unchanged.
     */
    it("should return 3.2 for toNumber(3.2)", () => {
      expect(toNumber(3.2)).to.equal(3.2);
    });

    it("should return Infinity for toNumber(Infinity)", () => {
      expect(toNumber(Infinity)).to.equal(Infinity);
    });

    it("should return Number.MIN_VALUE for toNumber(Number.MIN_VALUE)", () => {
      expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
    });

    /**
     * It should convert string numbers.
     */
    it("should return 3.2 for toNumber('3.2')", () => {
      expect(toNumber("3.2")).to.equal(3.2);
    });

    it("should return 42 for toNumber('42')", () => {
      expect(toNumber("42")).to.equal(42);
    });

    /**
     * It should handle binary strings.
     */
    it("should return 5 for toNumber('0b101')", () => {
      expect(toNumber("0b101")).to.equal(5);
    });

    /**
     * It should handle octal strings.
     */
    it("should return 8 for toNumber('0o10')", () => {
      expect(toNumber("0o10")).to.equal(8);
    });

    /**
     * It should return NaN for bad hex strings.
     */
    it("should return NaN for toNumber('-0x1')", () => {
      expect(Number.isNaN(toNumber("-0x1"))).to.equal(true);
    });

    /**
     * It should return NaN for symbols.
     */
    it("should return NaN for Symbol('s')", () => {
      expect(Number.isNaN(toNumber(Symbol("s")))).to.equal(true);
    });

    /**
     * It should handle objects with valueOf.
     */
    it("should return 7 for object with valueOf returning 7", () => {
      const obj = { valueOf: () => 7 };
      expect(toNumber(obj)).to.equal(7);
    });

    /**
     * It should handle objects coerced to string.
     */
    it("should return NaN for object without valueOf", () => {
      const obj = {};
      expect(Number.isNaN(toNumber(obj))).to.equal(true);
    });

    /**
     * It should handle null and undefined.
     */
    it("should return 0 for null", () => {
      expect(toNumber(null)).to.equal(0);
    });

    it("should return NaN for undefined", () => {
      expect(Number.isNaN(toNumber(undefined))).to.equal(true);
    });

    /**
     * It should handle booleans.
     */
    it("should return 1 for true", () => {
      expect(toNumber(true)).to.equal(1);
    });

    it("should return 0 for false", () => {
      expect(toNumber(false)).to.equal(0);
    });

    /**
     * It should handle empty string.
     */
    it("should return 0 for ''", () => {
      expect(toNumber("")).to.equal(0);
    });
  });
});
