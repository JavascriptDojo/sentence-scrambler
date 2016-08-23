"use strict";

var expect   = require("chai").expect,
    splitter = require("../lib/splitter.js");

describe("Sentence Splitter is a simple function for splitting sentences", function () {

    it("should be a function", function () {
        expect(splitter).to.be.a("function")
    });

    it("should split a sentence on spaces", function () {

        var result   = splitter("The cat sat on the mat."),
            expected = ["The", "cat", "sat", "on", "the", "mat."];

        expect(result).to.eql(expected);
    });

    it("should be able to handle multiple spaces between words", function () {

        var result   = splitter("The  cat  sat on the mat."),
            expected = ["The", "cat", "sat", "on", "the", "mat."];

        expect(result).to.eql(expected);
    });

    it("should be able to split Japanese sentences, using unicode space chars", function () {

        var result   = splitter("しょくどうは　五時から　七時まで　です。"),
            expected = ["しょくどうは", "五時から", "七時まで", "です。"];

        expect(result).to.eql(expected);
    });

    it("should return false if the sentence is 'empty'", function () {

        var result   = splitter("           "),
            expected = false;

        expect(result).to.eql(expected);
    });

    it("should return false if the 'thing' given to splitter is not a string", function () {

        var list_of_things_to_try = [ false, {}, [], /.+/, null, undefined ];

        list_of_things_to_try.forEach(function (thing) {
            expect(splitter(thing)).to.equal(false);
        });
    });
});
