const { expect } = require("chai");
const at = require("../src/at").default; 
/**
 * Unit tests for at.js
 *
 * @module test/at
 */
describe("at.js", () => {
  /**
   * Tests for the at() function
   */
  describe("at()", () => {
    /**
     * It should pick values from nested paths.
     */
    it("should return [3, 4] for paths ['a[0].b.c', 'a[1]']", () => {
        const object = { a: [{ b: { c: 3 } }, 4] };
        expect(at(object, ["a[0].b.c", "a[1]"])).to.deep.equal([3, 4]);
    });

    /**
     * It should return undefined for non-existent paths.
     */
    it("should return [undefined] for a missing path", () => {
        const object = { x: 1 };
        expect(at(object, ["y"])).to.deep.equal([undefined]);
    });

    /**
     * It should handle multiple string arguments as paths.
     */
    it("should accept multiple string arguments", () => {
        const object = { foo: { bar: 10 }, baz: 20 };
        expect(at(object, "foo.bar", "baz")).to.deep.equal([10, 20]);
    });

    /**
     * It should return an empty array if no paths are provided.
     */
    it("should return [] when no paths are given", () => {
        const object = { a: 1 };
        expect(at(object)).to.deep.equal([]);
    });
  });
});
