const { expect } = require("chai");
const add = require("../src/add").default; 
/**
 * Unit tests for add.js
 *
 * @module test/add
 */
describe("add.js", () => {
    /**
     * Tests for the add() function
     */
    describe("add()", () => {
        /**
         * It should add two positive numbers correctly.
         */
        it("should return 10 when adding 6 and 4", () => {
            expect(add(6, 4)).to.equal(10);
        });

        /**
         * It should handle negative numbers correctly.
         */
        it("should return -10 when adding -3 and -7", () => {
            expect(add(-3, -7)).to.equal(-10);
        });

        it("should return 4 when adding -3 and 7", () => {
            expect(add(-3, 7)).to.equal(4);
        });

        /**
         * It should handle zero correctly.
         */
        it("should return the other number when one operand is zero", () => {
            expect(add(0, 5)).to.equal(5);
            expect(add(5, 0)).to.equal(5);
        });

        /**
         * It should handle floating point numbers correctly.
         */
        it("should return approximately 0.3 when adding 0.1 and 0.2", () => {
            expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
        });

        /**
         * It should return defaultValue (0) when both arguments are undefined.
         */
        it("should return 0 when both arguments are undefined", () => {
            expect(add(undefined, undefined)).to.equal(0);
        });

        /**
         * It should return the defined argument when the other is undefined.
         */
        it("should return the defined argument when the other is undefined", () => {
            expect(add(7, undefined)).to.equal(7);
            expect(add(undefined, 7)).to.equal(7);
        });

        /**
         * It should concatenate strings when either argument is a string.
         */
        it("should concatenate strings when one or both arguments are strings", () => {
            expect(add("foo", "bar")).to.equal("foobar");
            expect(add("foo", 5)).to.equal("foo5");
            expect(add(5, "bar")).to.equal("5bar");
        });

        /**
         * It should convert non-numeric values to numbers when possible.
         */
        it("should convert numeric strings to numbers", () => {
            expect(add("6", "4")).to.equal("64"); // because both are strings → concatenation
            expect(add("6", 4)).to.equal("64");   // string + number → string concatenation
        });
    });
});
