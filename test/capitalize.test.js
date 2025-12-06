const { expect } = require("chai");
const capitalize = require("../src/capitalize.js").default;
/**
 * Unit tests for capitalize.js
 *
 * @module test/capitalize
 */
describe("capitalize.js", () => {
  /**
   * Tests for the capitalize() function
   */
  describe("capitalize()", () => {
    /**
     * It should convert all-uppercase strings to capitalized form.
     */
    it("should convert 'FRED' to 'Fred'", () => {
        expect(capitalize("FRED")).to.equal("Fred");
    });

    /**
     * It should convert mixed-case strings to capitalized form.
     */
    it("should convert 'fReD' to 'Fred'", () => {
        expect(capitalize("fReD")).to.equal("Fred");
    });

    /**
     * It should handle single lowercase word correctly.
     */
    it("should convert 'hello' to 'Hello'", () => {
        expect(capitalize("hello")).to.equal("Hello");
    });

    /**
     * It should return an empty string for empty input.
     */
    it("should return '' for empty string input", () => {
        expect(capitalize("")).to.equal("");
    });

    /**
     * It should handle non-string inputs by converting them to strings.
     */
    it("should convert number 123 to '123'", () => {
        expect(capitalize(123)).to.equal("123");
    });
  });
});
