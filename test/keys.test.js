const { expect } = require("chai");
const keys = require("../src/keys.js").default;
/**
 * Unit tests for keys.js
 *
 * @module test/keys
 */
describe("keys.js", () => {
  /**
   * Tests for the keys() function
   */
  describe("keys()", () => {

    /**
     * It should return indices for strings.
     */
    it("should return ['0','1'] for 'hi'", () => {
      expect(keys("hi")).to.deep.equal(["0", "1"]);
    });

    /**
     * It should return indices for arrays.
     */
    it("should return ['0','1','2'] for [1,2,3]", () => {
      expect(keys([1, 2, 3])).to.deep.equal(["0", "1", "2"]);
    });

    /**
     * It should return [] for empty array.
     */
    it("should return [] for []", () => {
      expect(keys([])).to.deep.equal([]);
    });

    /**
     * It should return [] for empty string.
     */
    it("should return [] for ''", () => {
      expect(keys("")).to.deep.equal([]);
    });

    /**
     * It should return object keys for plain objects.
     */
    it("should return ['x','y'] for {x:1,y:2}", () => {
      expect(keys({ x: 1, y: 2 })).to.include.members(["x", "y"]);
    });

    /**
     * It should return [] for empty object.
     */
    it("should return [] for {}", () => {
      expect(keys({})).to.deep.equal([]);
    });

    /**
     * It should coerce non-object values to objects.
     */
    it("should return [] for true", () => {
      expect(keys(true)).to.deep.equal([]);
    });

    it("should return [] for 42", () => {
      expect(keys(42)).to.deep.equal([]);
    });

    /**
     * It should handle null and undefined by coercion.
     */
    it("should return [] for null", () => {
      expect(keys(null)).to.deep.equal([]);
    });

    it("should return [] for undefined", () => {
      expect(keys(undefined)).to.deep.equal([]);
    });
  });
});
