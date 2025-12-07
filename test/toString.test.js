const { expect } = require("chai");
const toString = require("../src/toString.js").default;

/**
 * Unit tests for toString.js
 *
 * @module test/toString
 */
describe("toString.js", () => {
  /**
   * Tests for the toString() function
   */
  describe("toString()", () => {
    /**
     * It should preserve -0 sign.
     */
    it("should return '-0' for -0", () => {
      expect(toString(-0)).to.equal("-0");
    });

    /**
     * It should return string unchanged.
     */
    it("should return 'abc' for 'abc'", () => {
      expect(toString("abc")).to.equal("abc");
    });

    /**
     * It should convert arrays recursively.
     */
    it("should return '1,2,3' for [1,2,3]", () => {
      expect(toString([1, 2, 3])).to.equal("1,2,3");
    });

    it("should handle nested arrays", () => {
      expect(toString([1, [2, 3]])).to.equal("1,2,3");
    });

    it("should handle arrays with null/undefined", () => {
      expect(toString([null, undefined, 1])).to.equal(",,1");
    });

    /**
     * It should convert symbols to string.
     */
    it("should return 'Symbol(s)' for Symbol('s')", () => {
      const sym = Symbol("s");
      expect(toString(sym)).to.equal(sym.toString());
    });

    /**
     * It should convert numbers to string.
     */
    it("should return '42' for 42", () => {
      expect(toString(42)).to.equal("42");
    });

    /**
     * It should convert booleans to string.
     */
    it("should return 'true' for true", () => {
      expect(toString(true)).to.equal("true");
    });

    it("should return 'false' for false", () => {
      expect(toString(false)).to.equal("false");
    });

    /**
     * It should convert objects to string.
     */
    it("should return '[object Object]' for {}", () => {
      expect(toString({})).to.equal("[object Object]");
    });

    /**
     * It should convert functions to string.
     */
    it("should contain 'function' for toString(Function)", () => {
      const result = toString(function test() {});
      expect(result.includes("function")).to.equal(true);
    });
  });
});
