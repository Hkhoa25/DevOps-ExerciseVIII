const { expect } = require("chai");
const toInteger = require("../src/toInteger.js").default;

/**
 * Unit tests for toInteger.js
 *
 * @module test/toInteger
 */
describe("toInteger.js", () => {
  /**
   * Tests for the toInteger() function
   */
  describe("toInteger()", () => {
    /**
     * It should convert floating point numbers to integers.
     */
    it("should return 3 for toInteger(3.2)", () => {
      expect(toInteger(3.2)).to.equal(3);
    });

    /**
     * It should convert Number.MIN_VALUE to 0.
     */
    it("should return 0 for toInteger(Number.MIN_VALUE)", () => {
      expect(toInteger(Number.MIN_VALUE)).to.equal(0);
    });

    /**
     * It should convert Infinity to MAX_INTEGER.
     */
    it("should return 1.7976931348623157e+308 for toInteger(Infinity)", () => {
      expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    });

    /**
     * It should convert -Infinity to -MAX_INTEGER.
     */
    it("should return -1.7976931348623157e+308 for toInteger(-Infinity)", () => {
      expect(toInteger(-Infinity)).to.equal(-1.7976931348623157e+308);
    });

    /**
     * It should convert string numbers to integers.
     */
    it("should return 3 for toInteger('3.2')", () => {
      expect(toInteger("3.2")).to.equal(3);
    });

    /**
     * It should return 0 for NaN.
     */
    it("should return 0 for toInteger(NaN)", () => {
      expect(toInteger(NaN)).to.equal(0);
    });

    /**
     * It should return 0 for null.
     */
    it("should return 0 for toInteger(null)", () => {
      expect(toInteger(null)).to.equal(0);
    });

    /**
     * It should return 0 for undefined.
     */
    it("should return 0 for toInteger(undefined)", () => {
      expect(toInteger(undefined)).to.equal(0);
    });

    /**
     * It should return 0 for false.
     */
    it("should return 0 for toInteger(false)", () => {
      expect(toInteger(false)).to.equal(0);
    });

    /**
     * It should return 0 for empty string.
     */
    it("should return 0 for toInteger('')", () => {
      expect(toInteger("")).to.equal(0);
    });

    /**
     * It should return 0 for objects.
     */
    it("should return 0 for toInteger({})", () => {
      expect(toInteger({})).to.equal(0);
    });

    /**
     * It should return 0 for arrays.
     */
    it("should return 0 for toInteger([])", () => {
      expect(toInteger([])).to.equal(0);
    });

    /**
     * It should return 0 for symbols.
     */
    it("should return 0 for toInteger(Symbol('s'))", () => {
      expect(toInteger(Symbol("s"))).to.equal(0);
    });

    /**
     * It should preserve integer values.
     */
    it("should return 42 for toInteger(42)", () => {
      expect(toInteger(42)).to.equal(42);
    });

    /**
     * It should preserve 0.
     */
    it("should return 0 for toInteger(0)", () => {
      expect(toInteger(0)).to.equal(0);
    });
  });
});
