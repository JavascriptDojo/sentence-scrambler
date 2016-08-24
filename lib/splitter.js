"use strict";

function split(sentence) {
  if (typeof sentence !== "string"|| /^\s*$/.test(sentence)){
    return false;
  } else {
    var sentenceArr = sentence.split(/\s+/);
    return sentenceArr;
  }
}

module.exports = split;
