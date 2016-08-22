"use strict";

function SentenceScrambler () {}

// To see what properties and behaviours this object is expected to exhibit, please see the "test/"
// directory.
//
// There are many strategies for creating JavaScript objects, but the most appropriate pattern for our
// use is something similar to the following:
//
//   function ThisIsMyObject () {
//
//     function this_is_a_method () { console.log("Hello from 'this_is_a_method'"); };
//
//     return {
//       /* This is the public interface */
//       public_this_method: this_is_a_method
//     }
//   }
//              | our object name |
module.exports = SentenceScrambler;
