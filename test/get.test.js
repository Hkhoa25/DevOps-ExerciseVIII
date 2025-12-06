const { expect } = require("chai");
const get = require("../src/get.js").default; 

/**
 * Unit tests for get.js
 *
 * @module test/get
 */
describe("get.js", () => {
  /**
   * Tests for the get() function
   */
  describe("get()", () => {
    /**
     * It should return the value at a string path.
     */
    it("should return 3 for path 'a[0].b.c'", () => {
      const object = { a: [{ b: { c: 3 } }] };
      expect(get(object, "a[0].b.c")).to.equal(3);
    });

    /**
     * It should return the value at an array path.
     */
    it("should return 3 for path ['a','0','b','c']", () => {
      const object = { a: [{ b: { c: 3 } }] };
      expect(get(object, ["a", "0", "b", "c"])).to.equal(3);
    });

    /**
     * It should return the default value when path does not exist.
     */
    it("should return 'default' when path is missing", () => {
      const object = { a: { b: 2 } };
      expect(get(object, "a.c", "default")).to.equal("default");
    });

    /**
     * It should return undefined when path does not exist and no default is provided.
     */
    it("should return undefined when path is missing and no default provided", () => {
      const object = { a: { b: 2 } };
      expect(get(object, "a.c")).to.equal(undefined);
    });

    /**
     * It should return undefined when object is null and no default is provided.
     */
    it("should return undefined when object is null and no default provided", () => {
      expect(get(null, "a.b")).to.equal(undefined);
    });

    /**
     * It should return the default value when object is null.
     */
    it("should return 'default' when object is null", () => {
      expect(get(null, "a.b", "default")).to.equal("default");
    });

    /**
     * It should handle nested objects correctly.
     */
    it("should return nested value correctly", () => {
      const object = { x: { y: { z: 10 } } };
      expect(get(object, "x.y.z")).to.equal(10);
    });

    /**
     * It should handle array index paths correctly.
     */
    it("should return correct value using array index path", () => {
      const object = { arr: [1, 2, 3] };
      expect(get(object, "arr[1]")).to.equal(2);
    });
  });
});
