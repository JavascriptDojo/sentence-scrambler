"use strict";

function randomise (list) {

    // Make sure you guard this function against being called with
    // an undefined value...

  var isEveryWordString = list.every(function(word){
    return typeof word === "string" && word !== "";
  });

  if (!Array.isArray(list)||isEveryWordString === false){
    throw 'It is not an array or improper array!';
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Should return 'list' in a random order, and this order
  // shall NEVER match the original list order...
  var originalList = list;
  var original = originalList.join(' ');
  shuffle(list);
  var shuffled = list.join(' ');

  while(true) {
    if (shuffled !== original) {
      break;
    }
    shuffle(list);
  }
    //
    // Lookup "javascript array shuffle" if you're struggling. :)
  return list;
}

module.exports = randomise;
