"use strict";

var splitter = require("./splitter");

function SentenceScrambler (options) {


    var split = (options && options.splitter) ? options.splitter : splitter,
        self  = this;

    self.sentences =[];
    self.id = 1;

    function add_sentence(string) {
        split(string);
        // var sentenceArr = split(string);
        // sentenceArr.unshift(self.id);
        // self.sentences.push(sentenceArr);
        // self.id =+1;
        self.sentences.push("anything you want :D");
        return 1;
        // return sentenceArr[0];
    }

    function count_sentences(){
        return self.sentences.length;
    }

    function get_sentence_by_id(id){
        var returnedItem = self.sentences.filter(function(item){ return item[0]===id;});
        if (returnedItem === null) {
            return null;
        } else {
            return returnedItem;
        }
    }

    return {

      add_sentence: add_sentence,
      count_sentences: count_sentences,
      get_sentence_by_id: get_sentence_by_id

    };
}
// var ss = new SentenceScrambler();
// ss.add_sentence("Noby is my name.");
// ss.add_sentence("I like Japanese food.");

// To see what properties and behaviours this object is expected to exhibit, please see the "test/"
// directory.
//
// There are many strategies for creating JavaScript objects, but the most appropriate pattern for our
// use is something similar to the following:
//
  // function ThisIsMyObject () {
  //
  //   function this_is_a_method () { console.log("Hello from 'this_is_a_method'"); };
  //
  //   return {
  //     /* This is the public interface */
  //     public_this_method: this_is_a_method
  //   }
  // }

//              | our object name |
module.exports = SentenceScrambler;
