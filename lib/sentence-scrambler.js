"use strict";

var splitter = require("./splitter");

function SentenceScrambler (options) {


    var split = (options && options.splitter) ? options.splitter : splitter,
        self  = this;

    self.sentences =[];
    self.id = 0;

    function add_sentence(string) {
      split(string);
      if (typeof string !== "string"|| /^\s*$/.test(string)){
        return false;
      } else {
        // var sentenceArr = split(string);
        // sentenceArr.unshift(self.id);
        // self.sentences.push(sentenceArr);
        self.id =+1;
        self.sentences.push(string);
        return self.id;
        // return sentenceArr[0];
      }
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

//              | our object name |
module.exports = SentenceScrambler;
