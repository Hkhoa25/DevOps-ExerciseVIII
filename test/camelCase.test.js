const { expect } = require("chai");
const camelCase = require("../src/camelCase").default; 
/**
 * Unit tests for camelCase.js
 *
 * @module test/camelCase
 */
describe("camelCase.js", () => {
  /**
   * Tests for the camelCase() function
   */
  describe("camelCase()", () => {
    /**
     * It should convert space-separated words to camel case.
     */
    it("should convert 'Foo Bar' to 'fooBar'", () => {
        expect(camelCase("Foo Bar")).to.equal("fooBar");
    });

    /**
     * It should convert dash-separated words to camel case.
     */
    it("should convert '--foo-bar--' to 'fooBar'", () => {
        expect(camelCase("--foo-bar--")).to.equal("fooBar");
    });

    /**
     * It should convert underscore-separated words to camel case.
     */
    it("should convert '__FOO_BAR__' to 'fooBar'", () => {
        expect(camelCase("__FOO_BAR__")).to.equal("fooBar");
    });

    /**
     * It should handle empty strings gracefully.
     */
    it("should return '' for empty string input", () => {
        expect(camelCase("")).to.equal("");
    });

    /**
     * It should handle non-string inputs by converting them to strings.
     */
    it("should convert number 123 to '123'", () => {
        expect(camelCase(123)).to.equal("123");
    });

    /**
     * It should handle single word input correctly.
     */
    it("should convert 'hello' to 'hello'", () => {
        expect(camelCase("hello")).to.equal("hello");
    });
  });
});
