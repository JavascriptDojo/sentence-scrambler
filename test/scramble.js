"use strict";

/*
 * ABOUT
 * =====
 *
 * This is a simple test file for checking that our sentence scrambler works as intended.
 * Words can be "fed in" to the scrambler in the correct order, and then the scrambler will
 * scramble the sentences, and ask the user to re-assemble the words in to the correct order.
 *
 */

var expect = require("chai").expect;

// Here is where we include our main SS module.
var SentenceScrambler = require("../lib/sentence-scrambler");

describe("Sentence Scrambler", function () {

    describe("The SentenceScrambler's public interface", function () {

        it("should export the following public functions", function () {

            var ss = new SentenceScrambler();

            // "add_sentence" will take a string, where each element of the
            // array will be a word or symbol which makes-up a sentence. The order
            // that the words are added is important. Returns the ID of the sentence
            // that was added.
            expect(ss).to.have.property("add_sentence");

            // Returns an integer; the total number of sentences that have been added.
            expect(ss).to.have.property("count_sentences");

            // Returns a data structure representing a given sentence. This data structure
            // does not need to exactly match the array passed to `add_sentence'. When
            // an unknown ID is passed in, it should return 'null'.
            expect(ss).to.have.property("get_sentence_by_id");
        });
    });

    /*
     * +--------------+
     * | Adding Words |
     * +--------------+
     */
    describe("Adding new words to the Sentence Scrambler object", function () {


        describe("#add_sentence", function () {

            it("should let me add a string, and return the ID of this sentence", function () {

                var ss       = new SentenceScrambler(),
                    sentence = "ここ には　新聞 も　ざっし も　あります。",
                    result   = ss.add_sentence(sentence);

                expect(result).to.be.a("number");
                expect(ss.count_sentences()).to.equal(1);
            });
        });
    });

    /*
     * +----------------------+
     * | Dependency Injection |
     * +----------------------+
     */
    describe("should support dependency injection", function () {

        it("should accept a 'splitter' function passed as an option", function (done) {

            var expected = "THE CAT SAT ON THE MAT",
                result, ss;

            function test_split_function (sentence) {
                expect(sentence).to.eql(expected);
                done();
            };

            ss = new SentenceScrambler({ splitter: test_split_function });
            ss.add_sentence(expected);
        });
    });

});
