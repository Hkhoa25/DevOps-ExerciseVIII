const { expect } = require("chai");
const isArrayLikeObject = require("../src/isArrayLikeObject.js").default; 

/**
 * Unit tests for isArrayLikeObject.js
 *
 * @module test/isArrayLikeObject
 */
describe("isArrayLikeObject.js", () => {
  /**
   * Tests for the isArrayLikeObject() function
   */
  describe("isArrayLikeObject()", () => {
    /**
     * It should return true for arrays.
     */
    it("should return true for [1,2,3]", () => {
      expect(isArrayLikeObject([1, 2, 3])).to.equal(true);
    });

    /**
     * It should return true for array-like objects (with length).
     */
    it("should return true for { length: 2 }", () => {
      expect(isArrayLikeObject({ length: 2 })).to.equal(true);
    });

    /**
     * It should return true for DOM collections (simulated).
     */
    it("should return true for array-like object with numeric keys", () => {
      const fakeCollection = { 0: "a", 1: "b", length: 2 };
      expect(isArrayLikeObject(fakeCollection)).to.equal(true);
    });

    /**
     * It should return false for strings.
     */
    it("should return false for 'abc'", () => {
      expect(isArrayLikeObject("abc")).to.equal(false);
    });

    /**
     * It should return false for functions.
     */
    it("should return false for Function", () => {
      expect(isArrayLikeObject(Function)).to.equal(false);
    });

    /**
     * It should return false for null.
     */
    it("should return false for null", () => {
      expect(isArrayLikeObject(null)).to.equal(false);
    });

    /**
     * It should return false for undefined.
     */
    it("should return false for undefined", () => {
      expect(isArrayLikeObject(undefined)).to.equal(false);
    });

    /**
     * It should return false for plain objects without length.
     */
    it("should return false for {}", () => {
      expect(isArrayLikeObject({})).to.equal(false);
    });

    /**
     * It should return false for negative length.
     */
    it("should return false for { length: -1 }", () => {
      expect(isArrayLikeObject({ length: -1 })).to.equal(false);
    });

    /**
     * It should return false for length greater than Number.MAX_SAFE_INTEGER.
     */
    it("should return false for { length: Number.MAX_SAFE_INTEGER + 1 }", () => {
      expect(isArrayLikeObject({ length: Number.MAX_SAFE_INTEGER + 1 })).to.equal(false);
    });
  });
});
