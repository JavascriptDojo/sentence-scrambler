"use strict";

var splitter   = require("./splitter"),
    randomiser = require("./randomiser");

function SentenceScrambler (options) {

    var split     = (options && options.splitter)   ? options.splitter   : splitter,
        randomise = (options && options.randomiser) ? options.randomiser : randomiser,
        self      = this;

    self.sentences =[];
    self.id = 0;

    function add_sentence(string) {

        var split_string;

        if (typeof string !== "string" || /^\s*$/.test(string)){
            return false;
        }

        split_string = split(string);
        self.id =+1;
        self.sentences.push(split_string);

        return self.id;
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
