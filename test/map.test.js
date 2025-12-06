const { expect } = require("chai");
const map = require("../src/map.js").default; 

/**
 * Unit tests for map.js
 *
 * @module test/map
 */
describe("map.js", () => {
  /**
   * Tests for the map() function
   */
  describe("map()", () => {
    /**
     * It should apply the iteratee to each element of the array.
     */
    it("should square numbers in [4,8]", () => {
      function square(n) {
        return n * n;
      }
      expect(map([4, 8], square)).to.deep.equal([16, 64]);
    });

    /**
     * It should handle empty arrays.
     */
    it("should return [] for []", () => {
      expect(map([], (x) => x)).to.deep.equal([]);
    });

    /**
     * It should handle null input.
     */
    it("should return [] for null", () => {
      expect(map(null, (x) => x)).to.deep.equal([]);
    });

    /**
     * It should handle undefined input.
     */
    it("should return [] for undefined", () => {
      expect(map(undefined, (x) => x)).to.deep.equal([]);
    });

    /**
     * It should pass index and array to iteratee.
     */
    it("should provide index and array to iteratee", () => {
      const result = map([10, 20], (value, index, array) => {
        return value + index + array.length;
      });
      expect(result).to.deep.equal([12, 23]);
    });

    /**
     * It should work with strings in array.
     */
    it("should return ['A','B'] for ['a','b']", () => {
      expect(map(["a", "b"], (s) => s.toUpperCase())).to.deep.equal(["A", "B"]);
    });

    /**
     * It should work with objects in array.
     */
    it("should extract property values from objects", () => {
      const arr = [{ x: 1 }, { x: 2 }, { x: 3 }];
      expect(map(arr, (obj) => obj.x)).to.deep.equal([1, 2, 3]);
    });
  });
});
