const { expect } = require("chai");
const castArray = require("../src/castArray.js").default; 
/**
 * Unit tests for castArray.js
 *
 * @module test/castArray
 */
describe("castArray.js", () => {
  /**
   * Tests for the castArray() function
   */
  describe("castArray()", () => {
    /**
     * It should wrap a number in an array.
     */
    it("should convert 1 to [1]", () => {
        expect(castArray(1)).to.deep.equal([1]);
    });

    /**
     * It should wrap an object in an array.
     */
    it("should convert { a: 1 } to [{ a: 1 }]", () => {
        expect(castArray({ a: 1 })).to.deep.equal([{ a: 1 }]);
    });

    /**
     * It should wrap a string in an array.
     */
    it("should convert 'abc' to ['abc']", () => {
        expect(castArray("abc")).to.deep.equal(["abc"]);
    });

    /**
     * It should wrap null in an array.
     */
    it("should convert null to [null]", () => {
        expect(castArray(null)).to.deep.equal([null]);
    });

    /**
     * It should wrap undefined in an array.
     */
    it("should convert undefined to [undefined]", () => {
        expect(castArray(undefined)).to.deep.equal([undefined]);
    });

    /**
     * It should return [] when called with no arguments.
     */
    it("should return [] when no arguments are given", () => {
        expect(castArray()).to.deep.equal([]);
    });

    /**
     * It should return the same array instance if input is already an array.
     */
    it("should return the same array when input is an array", () => {
        const arr = [1, 2, 3];
        expect(castArray(arr)).to.equal(arr);
    });
  });
});
