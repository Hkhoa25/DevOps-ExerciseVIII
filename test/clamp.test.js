const { expect } = require("chai");
const clamp = require("../src/clamp.js").default;

/**
 * Unit tests for clamp.js
 *
 * @module test/clamp
 */
describe("clamp.js", () => {
  /**
   * Tests for the clamp() function
   */
  describe("clamp()", () => {
    /**
     * It should clamp below the lower bound.
     */
    it("should clamp -10 to -5 when bounds are [-5, 5]", () => {
        expect(clamp(-10, -5, 5)).to.equal(-5);
    });

    /**
     * It should clamp above the upper bound.
     */
    it("should clamp 10 to 5 when bounds are [-5, 5]", () => {
        expect(clamp(10, -5, 5)).to.equal(5);
    });

    /**
     * It should return the number itself when within bounds.
     */
    it("should return 2 unchanged when bounds are [-5, 5]", () => {
        expect(clamp(2, -5, 5)).to.equal(2);
    });

    /**
     * It should handle equal lower and upper bounds.
     */
    it("should clamp any number to 3 when bounds are [3, 3]", () => {
        expect(clamp(10, 3, 3)).to.equal(3);
        expect(clamp(-5, 3, 3)).to.equal(3);
    });

    /**
     * It should handle NaN inputs gracefully.
     */
    it("should return 0 when number is NaN", () => {
        expect(clamp(NaN, -5, 5)).to.equal(0);
    });

    /**
     * It should handle non-numeric inputs by coercion.
     */
    it("should clamp '7' to 5 when bounds are [-5, 5]", () => {
        expect(clamp("7", -5, 5)).to.equal(5);
    });
  });
});
