"use strict";

var expect     = require("chai").expect,
    randomiser = require("../lib/randomiser.js");

describe("The randomiser is a randomising the order of lists", function () {

    it("should be a function", function () {
        expect(randomiser).to.be.a("function")
    });

    // It should support being passed ANOTHER fn, which will return a list of randomised
    // IDs (one for each in the array). The default will be a Math.random() *thing*, but
    // for tests, we will fabricate one.

    it("should never return a sentence in the same order as was passed", function () {

        var result   = randomiser(["The", "cat", "sat", "on", "the", "mat"]),
            expected = ["The", "cat", "sat", "on", "the", "mat"];

        expect(result).not.to.eql(expected);
        expect(result.length).to.eql(expected.length);

        expected.forEach(function (word) {
            expect(result).to.contain(word);
        });
    });
});
