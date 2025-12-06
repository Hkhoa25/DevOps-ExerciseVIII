const { expect } = require("chai");
const ceil = require("../src/ceil.js").default; 
/**
 * Unit tests for ceil.js
 *
 * @module test/ceil
 */
describe("ceil.js", () => {
  /**
   * Tests for the ceil() function
   */
  describe("ceil()", () => {
    /**
     * It should round up a floating number to the nearest integer.
     */
    it("should round 4.006 up to 5", () => {
        expect(ceil(4.006)).to.equal(5);
    });

    /**
     * It should round up with positive precision.
     */
    it("should round 6.004 to 6.01 with precision 2", () => {
        expect(ceil(6.004, 2)).to.equal(6.01);
    });

    /**
     * It should round up with negative precision.
     */
    it("should round 6040 to 6100 with precision -2", () => {
        expect(ceil(6040, -2)).to.equal(6100);
    });

    /**
     * It should handle integer input without precision.
     */
    it("should return 10 unchanged when input is 10", () => {
        expect(ceil(10)).to.equal(10);
    });

    /**
     * It should handle negative numbers correctly.
     */
    it("should round -4.006 up to -4", () => {
        expect(ceil(-4.006)).to.equal(-4);
    });

    /**
     * It should handle zero correctly.
     */
    it("should return 0 when input is 0", () => {
        expect(ceil(0)).to.equal(0);
    });
  });
});
