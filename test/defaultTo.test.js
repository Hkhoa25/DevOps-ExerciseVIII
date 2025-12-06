const { expect } = require("chai");
const defaultTo = require("../src/defaultTo.js").default; 
/**
 * Unit tests for defaultTo.js
 *
 * @module test/defaultTo
 */
describe("defaultTo.js", () => {
  /**
   * Tests for the defaultTo() function
   */
  describe("defaultTo()", () => {
    /**
     * It should return the value itself when defined and not NaN.
     */
    it("should return 1 when value is 1 and default is 10", () => {
        expect(defaultTo(1, 10)).to.equal(1);
    });

    /**
     * It should return the default when value is undefined.
     */
    it("should return 10 when value is undefined and default is 10", () => {
        expect(defaultTo(undefined, 10)).to.equal(10);
    });

    /**
     * It should return the default when value is null.
     */
    it("should return 10 when value is null and default is 10", () => {
        expect(defaultTo(null, 10)).to.equal(10);
    });

    /**
     * It should return the value itself when value is 0.
     */
    it("should return 0 when value is 0 and default is 10", () => {
        expect(defaultTo(0, 10)).to.equal(0);
    });

    /**
     * It should return the value itself when value is false.
     */
    it("should return false when value is false and default is true", () => {
        expect(defaultTo(false, true)).to.equal(false);
    });

    /**
     * It should return the value itself when value is NaN (edge case).
     */
    it("should return NaN when value is NaN and default is 10", () => {
        expect(defaultTo(NaN, 10)).to.be.NaN;
    });
  });
});
