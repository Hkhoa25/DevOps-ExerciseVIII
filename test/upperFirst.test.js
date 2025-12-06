const { expect } = require("chai");
const upperFirst = require("../src/upperFirst.js").default;

/**
 * Unit tests for upperFirst.js
 *
 * @module test/upperFirst
 */
describe("upperFirst.js", () => {
  /**
   * Tests for the upperFirst() function
   */
  describe("upperFirst()", () => {
    /**
     * It should capitalize the first character of a lowercase string.
     */
    it("should return 'Fred' for 'fred'", () => {
      expect(upperFirst("fred")).to.equal("Fred");
    });

    /**
     * It should leave already capitalized strings unchanged.
     */
    it("should return 'FRED' for 'FRED'", () => {
      expect(upperFirst("FRED")).to.equal("FRED");
    });

    /**
     * It should handle empty string.
     */
    it("should return '' for ''", () => {
      expect(upperFirst("")).to.equal("");
    });

    /**
     * It should handle single character strings.
     */
    it("should return 'A' for 'a'", () => {
      expect(upperFirst("a")).to.equal("A");
    });

    it("should return 'A' for 'A'", () => {
      expect(upperFirst("A")).to.equal("A");
    });

    /**
     * It should handle strings with leading whitespace.
     */
    it("should return ' Hello' for ' hello'", () => {
      expect(upperFirst(" hello")).to.equal(" hello"); // whitespace preserved, only first char converted
    });

    /**
     * It should handle strings with non-alphabetic first character.
     */
    it("should return '123abc' for '123abc'", () => {
      expect(upperFirst("123abc")).to.equal("123abc");
    });

    /**
     * It should handle null and undefined gracefully.
     */
    it("should return '' for null", () => {
      expect(upperFirst(null)).to.equal("");
    });

    it("should return '' for undefined", () => {
      expect(upperFirst(undefined)).to.equal("");
    });
  });
});
