const { expect } = require("chai");
const words = require("../src/words.js").default; 

/**
 * Unit tests for words.js
 *
 * @module test/words
 */
describe("words.js", () => {
  describe("words()", () => {
    /**
     * Basic ASCII splitting
     */
    it("should return ['fred','barney','pebbles'] for 'fred, barney, & pebbles'", () => {
      expect(words("fred, barney, & pebbles")).to.deep.equal([
        "fred",
        "barney",
        "pebbles",
      ]);
    });

    /**
     * Custom regex pattern
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
     * Empty string
     */
    it("should return [] for ''", () => {
      expect(words("")).to.deep.equal([]);
    });

    /**
     * Unicode words
     */
    it("should return ['mañana','niño'] for 'mañana niño'", () => {
      expect(words("mañana niño")).to.deep.equal(["mañana", "niño"]);
    });

    /**
     * CamelCase and PascalCase
     */
    it("should return ['foo','Bar'] for 'fooBar'", () => {
      expect(words("fooBar")).to.deep.equal(["foo", "Bar"]);
    });

    it("should return ['Foo','Bar'] for 'FooBar'", () => {
      expect(words("FooBar")).to.deep.equal(["Foo", "Bar"]);
    });

    /**
     * Acronyms followed by lowercase
     */
    it("should return ['HTML','Parser'] for 'HTMLParser'", () => {
      expect(words("HTMLParser")).to.deep.equal(["HTML", "Parser"]);
    });

    /**
     * Ordinals
     */
    it("should return ['1st','place'] for '1st place'", () => {
      expect(words("1st place")).to.deep.equal(["1st", "place"]);
    });

    it("should return ['2ND','ROUND'] for '2ND ROUND'", () => {
      expect(words("2ND ROUND")).to.deep.equal(["2ND", "ROUND"]);
    });
  });
});
