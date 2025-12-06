const { expect } = require("chai");
const defaultToAny = require("../src/defaultToAny.js").default;
/**
 * Unit tests for defaultToAny.js
 *
 * @module test/defaultToAny
 */
describe("defaultToAny.js", () => {
  /**
   * Tests for the defaultToAny() function
   */
  describe("defaultToAny()", () => {
    /**
     * It should return the value itself when defined and not NaN.
     */
    it("should return 1 when value is 1 and defaults are [10,20]", () => {
        expect(defaultToAny(1, 10, 20)).to.equal(1);
    });

    /**
     * It should return the first valid default when value is undefined.
     */
    it("should return 10 when value is undefined and defaults are [10,20]", () => {
        expect(defaultToAny(undefined, 10, 20)).to.equal(10);
    });

    /**
     * It should skip null and return the next valid default.
     */
    it("should return 20 when value is undefined and defaults are [null,20]", () => {
        expect(defaultToAny(undefined, null, 20)).to.equal(20);
    });

    /**
     * It should return NaN when all defaults are invalid.
     */
    it("should return NaN when value is undefined and defaults are [null,NaN]", () => {
        expect(defaultToAny(undefined, null, NaN)).to.be.NaN;
    });

    /**
     * It should handle multiple chained defaults correctly.
     */
    it("should return 30 when value is undefined and defaults are [null, undefined, 30]", () => {
        expect(defaultToAny(undefined, null, undefined, 30)).to.equal(30);
    });

    /**
     * It should return false when value is false and defaults are [true, 'fallback'].
     */
    it("should return false when value is false", () => {
        expect(defaultToAny(false, true, "fallback")).to.equal(false);
    });

    /**
     * It should return 0 when value is 0 and defaults are [5, 10].
     */
    it("should return 0 when value is 0", () => {
        expect(defaultToAny(0, 5, 10)).to.equal(0);
    });
  });
});
