const assert = require("assert");
const { describe } = require("mocha");
const metachar = require(".");


describe("Testing function", () => {
    it("should return \\n", () => {
        assert.deepStrictEqual(metachar.stringify("\n"), "\\n")
    });
    it("should return \\t", () => {
        assert.deepStrictEqual(metachar.stringify("\t"), "\\t")
    });
    it("should return \\\\", () => {
        assert.deepStrictEqual(metachar.stringify("\\"), "\\\\")
    });
    it("should return newline", () => {
        assert.deepStrictEqual(metachar.parse("\\n"), "\n")
    })
    it("should return tab", () => {
        assert.deepStrictEqual(metachar.parse("\\t"), "\t")
    })
});