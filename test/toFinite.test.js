const { expect } = require("chai");
const toFinite = require("../src/toFinite.js").default; 
/**
 * Unit tests for toFinite.js
 *
 * @module test/toFinite
 */
describe("toFinite.js", () => {
  /**
   * Tests for the toFinite() function
   */
  describe("toFinite()", () => {
    /**
     * It should return finite numbers unchanged.
     */
    it("should return 3.2 for toFinite(3.2)", () => {
      expect(toFinite(3.2)).to.equal(3.2);
    });

    /**
     * It should handle Number.MIN_VALUE.
     */
    it("should return 5e-324 for toFinite(Number.MIN_VALUE)", () => {
      expect(toFinite(Number.MIN_VALUE)).to.equal(5e-324);
    });

    /**
     * It should convert Infinity to MAX_INTEGER.
     */
    it("should return 1.7976931348623157e+308 for toFinite(Infinity)", () => {
      expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308);
    });

    /**
     * It should convert -Infinity to -MAX_INTEGER.
     */
    it("should return -1.7976931348623157e+308 for toFinite(-Infinity)", () => {
      expect(toFinite(-Infinity)).to.equal(-1.7976931348623157e+308);
    });

    /**
     * It should convert string numbers.
     */
    it("should return 3.2 for toFinite('3.2')", () => {
      expect(toFinite("3.2")).to.equal(3.2);
    });

    /**
     * It should return 0 for NaN.
     */
    it("should return 0 for toFinite(NaN)", () => {
      expect(toFinite(NaN)).to.equal(0);
    });

    /**
     * It should return 0 for null.
     */
    it("should return 0 for toFinite(null)", () => {
      expect(toFinite(null)).to.equal(0);
    });

    /**
     * It should return 0 for undefined.
     */
    it("should return 0 for toFinite(undefined)", () => {
      expect(toFinite(undefined)).to.equal(0);
    });

    /**
     * It should return 0 for false.
     */
    it("should return 0 for toFinite(false)", () => {
      expect(toFinite(false)).to.equal(0);
    });

    /**
     * It should return 0 for empty string.
     */
    it("should return 0 for toFinite('')", () => {
      expect(toFinite("")).to.equal(0);
    });

    /**
     * It should return 0 for objects.
     */
    it("should return 0 for toFinite({})", () => {
      expect(toFinite({})).to.equal(0);
    });

    /**
     * It should return 0 for arrays.
     */
    it("should return 0 for toFinite([])", () => {
      expect(toFinite([])).to.equal(0);
    });

    /**
     * It should return 0 for symbols.
     */
    it("should return 0 for toFinite(Symbol('s'))", () => {
      expect(toFinite(Symbol("s"))).to.equal(0);
    });

    /**
     * It should preserve 0.
     */
    it("should return 0 for toFinite(0)", () => {
      expect(toFinite(0)).to.equal(0);
    });
  });
});
