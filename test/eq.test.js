const { expect } = require("chai");
const eq = require("../src/eq.js").default; 
/**
 * Unit tests for eq.js
 *
 * @module test/eq
 */
describe("eq.js", () => {
  /**
   * Tests for the eq() function
   */
  describe("eq()", () => {
    /**
     * It should return true when comparing the same object reference.
     */
    it("should return true when comparing the same object reference", () => {
      const object = { a: 1 };
      expect(eq(object, object)).to.equal(true);
    });

    /**
     * It should return true when comparing identical primitive strings.
     */
    it("should return true when comparing identical primitive strings", () => {
      expect(eq("a", "a")).to.equal(true);
    });

    /**
     * It should return true when comparing NaN with NaN.
     */
    it("should return true when comparing NaN with NaN", () => {
      expect(eq(NaN, NaN)).to.equal(true);
    });

    /**
     * It should return true when comparing identical numbers.
     */
    it("should return true when comparing identical numbers", () => {
      expect(eq(42, 42)).to.equal(true);
    });

    /**
     * It should return false when comparing different numbers.
     */
    it("should return false when comparing different numbers", () => {
      expect(eq(42, 43)).to.equal(false);
    });

    /**
     * It should return true when comparing identical booleans.
     */
    it("should return true when comparing identical booleans", () => {
      expect(eq(true, true)).to.equal(true);
    });

    /**
     * It should return false when comparing different booleans.
     */
    it("should return false when comparing different booleans", () => {
      expect(eq(true, false)).to.equal(false);
    });

    /**
     * It should return true when comparing null with null.
     */
    it("should return true when comparing null with null", () => {
      expect(eq(null, null)).to.equal(true);
    });
  });
});
