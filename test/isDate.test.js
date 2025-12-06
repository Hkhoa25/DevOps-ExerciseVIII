const { expect } = require("chai");
const isDate = require("../src/isDate.js").default; 

/**
 * Unit tests for isDate.js
 *
 * @module test/isDate
 */
describe("isDate.js", () => {
  /**
   * Tests for the isDate() function
   */
  describe("isDate()", () => {
    /**
     * It should return true for Date instances.
     */
    it("should return true for new Date()", () => {
      expect(isDate(new Date())).to.equal(true);
    });

    /**
     * It should return false for date strings.
     */
    it("should return false for 'Mon April 23 2012'", () => {
      expect(isDate("Mon April 23 2012")).to.equal(false);
    });

    /**
     * It should return false for numbers.
     */
    it("should return false for 1234567890", () => {
      expect(isDate(1234567890)).to.equal(false);
    });

    /**
     * It should return false for plain objects.
     */
    it("should return false for {}", () => {
      expect(isDate({})).to.equal(false);
    });

    /**
     * It should return false for arrays.
     */
    it("should return false for []", () => {
      expect(isDate([])).to.equal(false);
    });

    /**
     * It should return false for null and undefined.
     */
    it("should return false for null", () => {
      expect(isDate(null)).to.equal(false);
    });

    it("should return false for undefined", () => {
      expect(isDate(undefined)).to.equal(false);
    });

    /**
     * It should return false for boolean values.
     */
    it("should return false for true", () => {
      expect(isDate(true)).to.equal(false);
    });

    it("should return false for false", () => {
      expect(isDate(false)).to.equal(false);
    });
  });
});
