const { expect } = require("chai");
const divide = require("../src/divide.js").default; 

/**
 * Unit tests for divide.js
 *
 * @module test/divide
 */
describe("divide.js", () => {
  /**
   * Tests for the divide() function
   */
  describe("divide()", () => {
    /**
     * It should divide two positive numbers.
     */
    it("should return 1.5 for divide(6,4)", () => {
        expect(divide(6, 4)).to.equal(1.5);
    });

    /**
     * It should divide by 1 correctly.
     */
    it("should return 10 for divide(10,1)", () => {
        expect(divide(10, 1)).to.equal(10);
    });

    /**
     * It should handle division by zero.
     */
    it("should return Infinity for divide(5,0)", () => {
        expect(divide(5, 0)).to.equal(Infinity);
    });

    /**
     * It should handle negative numbers.
     */
    it("should return -2 for divide(-10,5)", () => {
        expect(divide(-10, 5)).to.equal(-2);
    });

    /**
     * It should handle zero dividend.
     */
    it("should return 0 for divide(0,5)", () => {
        expect(divide(0, 5)).to.equal(0);
    });
  });
});
