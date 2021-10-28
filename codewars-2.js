// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
/* 
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this 
*/

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return names[0] + " likes this";
  } else if (names.length === 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else if (names.length >= 4) {
    return (
      names[0] +
      ", " +
      names[1] +
      " and " +
      (names.length - 2) +
      " others like this"
    );
  }
}

// Solved! 🥳

// console.log(
//   likes(["Sam", "Alex", "Parker", "Cath", "Jack", "Lobstah", "Keem", "Ru"])
// );

// Community solution using switch statement:
function likesTwo(names) {
  names = names || [];
  //   This prevents the names array from undefined or null.
  switch (names.length) {
    //   Switch statements take several cases and a default return
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}

// console.log(
//   likesTwo(["Sam", "Alex", "Parker", "Cath", "Jack", "Lobstah", "Keem", "Ru"])
// );

// -----------------------------------------------------------------------------------------------------------------------
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[1] !== arr[0]) {
      // They got me. This doesn't work for [0, 1, 0] because the first two values are unequal but the wrong value is returned
      return arr[0];
    } else if (arr[index] !== arr[index + 1]) {
      return arr[index + 1];
    }
  }
}

// console.log(findUniq([0, 1, 0]));
// Didn't get this one unfortunately.

// Community solutions:
function findUniqTwo(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

// console.log(findUniqTwo([0, 1, 0]));

function findUniqThree(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
  //   By using the pop method, we shorten the array and the return statement starts over.
  //   Otherwise, return the first value, as it is the newCode number.
}

// console.log(findUniqThree([0, 1, 0, 0, 0, 0]));

// -----------------------------------------------------------------------------------------------------------------------

// Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where
// each character in the new string is "(" if that character appears only once in the original string,
//  or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  // frequency check and then .forEach the two values
  // treat a string as a string, .toLowerCase(), check length
  return word
    .toLowerCase()
    .split("")
    .map((element, index, array) => {
      //   If the current value's index equates to the last index, return true
      return array.indexOf(element) == array.lastIndexOf(element) ? "(" : ")";
      //   If the value is repeated, return false
    })
    .join("");
}

// console.log(
//   "Expected: ()()()",
//   "-----",
//   "Returned:",
//   duplicateEncode("recede")
// );
// console.log(
//   "Expected: )())())",
//   "-----",
//   "Returned:",
//   duplicateEncode("Success")
// );

function duplicateEncodeTwo(word) {
  let newCode = "";
  word = word.toLowerCase();
  for (var index = 0; index < word.length; index++) {
    if (word.indexOf(word[index]) !== word.lastIndexOf(word[index])) {
      // If current index does NOT match last index, the character is duplicated
      newCode += ")";
    } else {
      // Otherwise, return the normal open paren.
      newCode += "(";
    }
  }
  return newCode;
}

// console.log(
//   "Expected: ()()()",
//   "-----",
//   "Returned:",
//   duplicateEncodeTwo("recede")
// );
// console.log(
//   "Expected: )())())",
//   "-----",
//   "Returned:",
//   duplicateEncodeTwo("Success")
// );

// -----------------------------------------------------------------------------------------------------------------------

// Count the smiley faces
/* Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned. */

function countSmileys(arr) {
  let counter = 0;
  if (arr.length === 0) {
    return counter;
  } else {
    return arr
      .map((smiley) => {
        if (smiley.length === 2) {
          // If no nose is detected, check to see if the smiley has valid eyes and mouth.
          let twofer = smiley.split("");
          if (
            (twofer[0] === ":" || twofer[0] === ";") &&
            (twofer[1] === ")" || twofer[1] === "D")
          ) {
            return counter + 1;
          }
        } else {
          let threeeee = smiley.split("");
          // else, there's a nose, check to see if nose is valid with - or ~
          if (
            (threeeee[0] === ":" || threeeee[0] === ";") &&
            (threeeee[1] === "-" || threeeee[1] === "~") &&
            (threeeee[2] === ")" || threeeee[2] === "D")
          ) {
            return counter + 1;
          }
        }
        return counter;
      })
      .reduce((a, b) => a + b);
    // Use reduce to sum the counter array of values
  }
}

// SOLVED!

// console.log(
//   "Expected: 4",
//   "-----",
//   "Returned:",
//   countSmileys([":D", ":~)", ";~D", ":)"])
// );
// console.log("Expected: 0", "-----", "Returned:", countSmileys([]));
// console.log(
//   "Expected: 2",
//   "-----",
//   "Returned:",
//   countSmileys([":)", ":(", ":D", ":O", ":;"])
// );

function countSmileysTwo(arr) {
  return arr.filter((smiley) => {
    // We use a .filter to only return values that fit a certain criteria
    return (
      /^[:;][-~]?[)D]$/
        // ^ marks the start of the string
        // $ marks the end of the string
        // / should be at the start and at the end of the regular expresion
        // and ? makes the previous optional. So we put the question mark after the nose because it doesn't HAVE to rest for that.
        .test(smiley)
      // The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
    );
  }).length;
  // the length method checks to see how many smileys are left in the array after our filtering!
  // Again, only smileys that have passed the true/false test are returned.
}

// console.log(
//   "Expected: 4",
//   "-----",
//   "Returned:",
//   countSmileysTwo([":D", ":~)", ";~D", ":)"])
// );
// console.log("Expected: 0", "-----", "Returned:", countSmileysTwo([]));

// console.log(
//   "Expected: 2",
//   "-----",
//   "Returned:",
//   countSmileysTwo([":)", ":(", ":D", ":O", ":;"])
// );

// -----------------------------------------------------------------------------------------------------------------------
