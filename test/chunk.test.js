const { expect } = require("chai");
const chunk = require("../src/chunk.js").default; 

/**
 * Unit tests for chunk.js
 *
 * @module test/chunk
 */
describe("chunk.js", () => {
  /**
   * Tests for the chunk() function
   */
  describe("chunk()", () => {
    /**
     * It should split an array evenly when possible.
     */
    it("should split ['a','b','c','d'] into [['a','b'],['c','d']] with size 2", () => {
        expect(chunk(["a", "b", "c", "d"], 2)).to.deep.equal([
            ["a", "b"],
            ["c", "d"],
        ]);
    });

    /**
     * It should handle uneven splits correctly.
     */
    it("should split ['a','b','c','d'] into [['a','b','c'],['d']] with size 3", () => {
        expect(chunk(["a", "b", "c", "d"], 3)).to.deep.equal([
            ["a", "b", "c"],
            ["d"],
        ]);
    });

    /**
     * It should default to size 1 when not provided.
     */
    it("should split ['x','y'] into [['x'],['y']] with default size", () => {
        expect(chunk(["x", "y"])).to.deep.equal([["x"], ["y"]]);
    });

    /**
     * It should return [] for empty array input.
     */
    it("should return [] when input array is empty", () => {
        expect(chunk([], 2)).to.deep.equal([]);
    });

    /**
     * It should return [] when input is null.
     */
    it("should return [] when input array is null", () => {
        expect(chunk(null, 2)).to.deep.equal([]);
    });

    /**
     * It should return [] when size is less than 1.
     */
    it("should return [] when size is 0", () => {
        expect(chunk(["a", "b"], 0)).to.deep.equal([]);
    });

    /**
     * It should handle negative size by returning [].
     */
    it("should return [] when size is negative", () => {
        expect(chunk(["a", "b"], -2)).to.deep.equal([]);
    });
  });
});
