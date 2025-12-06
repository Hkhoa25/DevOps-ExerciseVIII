const { expect } = require("chai");
const isBoolean = require("../src/isBoolean.js").default; 
/**
 * Unit tests for isBoolean.js
 *
 * @module test/isBoolean
 */
describe("isBoolean.js", () => {
  /**
   * Tests for the isBoolean() function
   */
  describe("isBoolean()", () => {
    /**
     * It should return true for boolean primitives.
     */
    it("should return true for true", () => {
      expect(isBoolean(true)).to.equal(true);
    });

    it("should return true for false", () => {
      expect(isBoolean(false)).to.equal(true);
    });

    /**
     * It should return true for Boolean objects.
     */
    it("should return true for new Boolean(true)", () => {
      expect(isBoolean(new Boolean(true))).to.equal(true);
    });

    it("should return true for new Boolean(false)", () => {
      expect(isBoolean(new Boolean(false))).to.equal(true);
    });

    /**
     * It should return false for null and undefined.
     */
    it("should return false for null", () => {
      expect(isBoolean(null)).to.equal(false);
    });

    it("should return false for undefined", () => {
      expect(isBoolean(undefined)).to.equal(false);
    });

    /**
     * It should return false for numbers.
     */
    it("should return false for 0", () => {
      expect(isBoolean(0)).to.equal(false);
    });

    it("should return false for 1", () => {
      expect(isBoolean(1)).to.equal(false);
    });

    /**
     * It should return false for strings.
     */
    it("should return false for 'true'", () => {
      expect(isBoolean("true")).to.equal(false);
    });

    it("should return false for 'false'", () => {
      expect(isBoolean("false")).to.equal(false);
    });

    /**
     * It should return false for objects that are not Boolean.
     */
    it("should return false for {}", () => {
      expect(isBoolean({})).to.equal(false);
    });

    /**
     * It should return false for arrays.
     */
    it("should return false for []", () => {
      expect(isBoolean([])).to.equal(false);
    });
  });
});
