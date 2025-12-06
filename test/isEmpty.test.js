const { expect } = require("chai");
const isEmpty = require("../src/isEmpty.js").default;

/**
 * Unit tests for isEmpty.js
 *
 * @module test/isEmpty
 */
describe("isEmpty.js", () => {
  /**
   * Tests for the isEmpty() function
   */
  describe("isEmpty()", () => {
    /**
     * It should return true for null and undefined.
     */
    it("should return true for null", () => {
      expect(isEmpty(null)).to.equal(true);
    });

    it("should return true for undefined", () => {
      expect(isEmpty(undefined)).to.equal(true);
    });

    /**
     * It should return true for boolean values.
     */
    it("should return true for true", () => {
      expect(isEmpty(true)).to.equal(true);
    });

    it("should return true for false", () => {
      expect(isEmpty(false)).to.equal(true);
    });

    /**
     * It should return true for numbers.
     */
    it("should return true for 1", () => {
      expect(isEmpty(1)).to.equal(true);
    });

    it("should return true for 0", () => {
      expect(isEmpty(0)).to.equal(true);
    });

    /**
     * It should return false for non-empty arrays.
     */
    it("should return false for [1,2,3]", () => {
      expect(isEmpty([1, 2, 3])).to.equal(false);
    });

    /**
     * It should return true for empty arrays.
     */
    it("should return true for []", () => {
      expect(isEmpty([])).to.equal(true);
    });

    /**
     * It should return false for non-empty strings.
     */
    it("should return false for 'abc'", () => {
      expect(isEmpty("abc")).to.equal(false);
    });

    /**
     * It should return true for empty strings.
     */
    it("should return true for ''", () => {
      expect(isEmpty("")).to.equal(true);
    });

    /**
     * It should return false for non-empty objects.
     */
    it("should return false for { a: 1 }", () => {
      expect(isEmpty({ a: 1 })).to.equal(false);
    });

    /**
     * It should return true for empty objects.
     */
    it("should return true for {}", () => {
      expect(isEmpty({})).to.equal(true);
    });

    /**
     * It should return false for non-empty Map.
     */
    it("should return false for new Map([['a',1]])", () => {
      const map = new Map([["a", 1]]);
      expect(isEmpty(map)).to.equal(false);
    });

    /**
     * It should return true for empty Map.
     */
    it("should return true for new Map()", () => {
      const map = new Map();
      expect(isEmpty(map)).to.equal(true);
    });

    /**
     * It should return false for non-empty Set.
     */
    it("should return false for new Set([1])", () => {
      const set = new Set([1]);
      expect(isEmpty(set)).to.equal(false);
    });

    /**
     * It should return true for empty Set.
     */
    it("should return true for new Set()", () => {
      const set = new Set();
      expect(isEmpty(set)).to.equal(true);
    });
  });
});
