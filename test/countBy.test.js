const { expect } = require("chai");
const countBy = require("../src/countBy.js").default; 

/**
 * Unit tests for countBy.js
 *
 * @module test/countBy
 */
describe("countBy.js", () => {
  /**
   * Tests for the countBy() function
   */
  describe("countBy()", () => {
    /**
     * It should count by a boolean property.
     */
    it("should count active users correctly", () => {
        const users = [
            { user: "barney", active: true },
            { user: "betty", active: true },
            { user: "fred", active: false },
        ];
        expect(countBy(users, (value) => value.active)).to.deep.equal({
            true: 2,
            false: 1,
        });
    });

    /**
     * It should count by a string property.
     */
    it("should count by first character of words", () => {
        const words = ["apple", "banana", "apricot"];
        expect(countBy(words, (word) => word[0])).to.deep.equal({
            a: 2,
            b: 1,
        });
    });

    /**
     * It should handle empty collections.
     */
    it("should return {} for empty array", () => {
        expect(countBy([], (x) => x)).to.deep.equal({});
    });

    /**
     * It should handle object collections.
     */
    it("should count values in an object", () => {
        const obj = { a: 1, b: 2, c: 1 };
        expect(countBy(obj, (val) => val)).to.deep.equal({
            1: 2,
            2: 1,
        });
    });

    /**
     * It should handle iteratee returning undefined.
     */
    it("should count undefined keys", () => {
        const arr = [1, 2, null];
        expect(countBy(arr, () => undefined)).to.deep.equal({
            undefined: 3,
        });
    });
  });
});
