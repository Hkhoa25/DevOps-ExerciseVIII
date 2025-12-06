const { expect } = require("chai");
const words = require("../src/words.js").default;

/**
 * Unit tests for words.js
 *
 * @module test/words
 */
describe("words.js", () => {
  /**
   * Tests for the words() function
   */
  describe("words()", () => {
    /**
     * It should split a simple ASCII string into words.
     */
    it("should return ['fred','barney','pebbles'] for 'fred, barney, & pebbles'", () => {
      expect(words("fred, barney, & pebbles")).to.deep.equal([
        "fred",
        "barney",
        "pebbles",
      ]);
    });

    /**
     * It should split using a custom pattern.
     */
    it("should return ['fred','barney','&','pebbles'] with custom pattern", () => {
      expect(words("fred, barney, & pebbles", /[^, ]+/g)).to.deep.equal([
        "fred",
        "barney",
        "&",
        "pebbles",
      ]);
    });

    /**
     * It should handle empty string.
     */
    it("should return [] for ''", () => {
      expect(words("")).to.deep.equal([]);
    });

    /**
     * It should handle null input.
     */
    it("should return [] for null", () => {
      expect(words(null)).to.deep.equal([]);
    });

    /**
     * It should handle undefined input.
     */
    it("should return [] for undefined", () => {
      expect(words(undefined)).to.deep.equal([]);
    });

    /**
     * It should split alphanumeric words.
     */
    it("should return ['abc123','def456'] for 'abc123 def456'", () => {
      expect(words("abc123 def456")).to.deep.equal(["abc123", "def456"]);
    });

    /**
     * It should detect Unicode words.
     */
    it("should return ['mañana','niño'] for 'mañana niño'", () => {
      expect(words("mañana niño")).to.deep.equal(["mañana", "niño"]);
    });

    /**
     * It should handle camelCase words.
     */
    it("should return ['foo','Bar'] for 'fooBar'", () => {
      expect(words("fooBar")).to.deep.equal(["foo", "Bar"]);
    });

    /**
     * It should handle PascalCase words.
     */
    it("should return ['Foo','Bar'] for 'FooBar'", () => {
      expect(words("FooBar")).to.deep.equal(["Foo", "Bar"]);
    });

    /**
     * It should handle acronyms followed by lowercase.
     */
    it("should return ['HTML','Parser'] for 'HTMLParser'", () => {
      expect(words("HTMLParser")).to.deep.equal(["HTML", "Parser"]);
    });
  });
});
