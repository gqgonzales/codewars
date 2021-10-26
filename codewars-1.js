//     for (i = 0, i > 0, i++) {
//         if (i % 3){
//             return "Fizz"
//         }
//         else if (i % 5) {
//             return "Buzz"
//         }
//     }
// };
const fizzBuzz = () => {
  let solutionArray = [];
  // Make a for-loop that counts to 100.
  for (let i = 0; i <= 101; i++) {
    // Inside the for-loop, create if/else statements.
    // We can use the modulo operator % to see if a number
    // is evenly divisble by another number.
    if (i % 5 === 0 && i % 3 === 0) {
      // console.log("Fizzbuzz");
      solutionArray.push("Fizzbuzz");
    } else if (i % 3 === 0) {
      // console.log("Fizz");
      solutionArray.push("Fizz");
    } else if (i % 5 === 0) {
      // console.log("Buzz");
      solutionArray.push("Buzz");
    } else {
      // console.log(i);
      solutionArray.push(i);
    }
  }
  return solutionArray;
};

// console.log(fizzBuzz());

// --------------------------- INTERVIEW Question --------------------------------------

// Given the following method layout, finish the method so that it will return a string containing a comma-separated list of all numbers between the two given integer numbers that are multiples of 3.
// Both the start and end number are inclusive.
// For Instance GetMultiplesOfThree(1, 9) will return ‘3, 6, 9’

/**
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {string}
 */

function getMultiplesOfThree(startNumber, endNumber) {
  let solutionArray = [];
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 3 == 0) {
      solutionArray.push(i);
    }
  }
  return solutionArray;
}

// console.log(getMultiplesOfThree(1, 9));

// Write a function that will take a string and reverse the words found within it.
// For example if you pass in “Today is an amazing day” the function will return “day amazing an is Today”

/**
 * @param {string} str
 * @returns {string}
 */

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// console.log(reverseWords("Today is an amazing day"));

function reverseWords(str) {
  // Researching array methods for reversing index order of a list
  return str.split(" ").reverse().join(" ");
}

// console.log(reverseWords("Today is an amazing day"));

//  QUESTION 3 - Provide a good name for a method

// Provide a good name the following method, and include a brief description of what the method does.

/**
 * @param {string} str
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */

function method(str, a, b) {
  let posA = str.indexOf(a);
  let posB = str.lastIndexOf(b);
  if (posA === -1) {
    return "";
  }
  if (posB === -1) {
    return "";
  }
  let adjustedPosA = posA + a.length;
  if (adjustedPosA >= posB) {
    return "";
  }
  return str.substring(adjustedPosA, posB);
}

// console.log(method("Today the sky is orange", "o", "a"));
// console.log(
//   method("red leather yellow leather, red letter yellow letter", "yellow", "red")
// );

// CODE WARS 9/29
// Reverse a word if it has more than five characters

function spinWords(string) {
  // Split the string into an array of three strings, seperated by spaces
  let words = string.split(" ");
  // Map over this array of three
  let reverser = words.map((word) => {
    // For each word in the array, split that into characters
    splitWord = word.split("");
    // If length >= 5, reverse that set of characters
    splitWord.length >= 5 ? splitWord.reverse() : splitWord;
    // Join the split characters back together
    let reversedWord = splitWord.join("");
    // console.log(reversedWord);
    return reversedWord;
  });

  // Join all strings, reversed or otherwise, back together
  let newString = reverser.join(" ");
  // return this final, joined string
  return newString;
}

// console.log(words);
// console.log(spinWords("Hey fellow warriors"));

// Condensed:
function spinWords(string) {
  let words = string.split(" ");
  let reverser = words.map((word) => {
    splitWord = word.split("");
    splitWord.length >= 5 ? splitWord.reverse() : splitWord;
    let reversedWord = splitWord.join("");
    return reversedWord;
  });

  let newString = reverser.join(" ");
  return newString;
}

// Ooooof. That was tough. Or you could do:

function spinWords(str) {
  return str
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}

//  -----------------------------------------------------------

function descendingOrder(n) {
  if (n >= 0) {
    let deconstructed = n
      .toString()
      .split("")
      .map(function (t) {
        return parseInt(t);
      });

    let sorted = deconstructed.sort(function (a, b) {
      return b - a;
    });
    let final = parseInt(sorted.join(""));
    return final;
  }
}
// console.log(descendingOrder(123752));
// Okay that works. Simplify it.

const descendingOrder2 = (n) => {
  let taco = parseInt(n);
  n >= 0
    ? n
        .toString()
        .split("")
        .map((digit) => {
          return parseInt(digit);
        })
        .sort((a, b) => {
          return b - a;
        })
        .join("")
    : undefined;
  return taco;
};

// console.log(descendingOrder(523958));
// It works!

// Best practice:
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

// Complementary DNA

function DNAStrand1(dna) {
  // Break the string into an an array of single digit strings
  //   Evaluate the digit, set each equal to the correct outging value
  //   re package as a new combined string
  let deconstructed = dna.split("");
  deconstructed.forEach((letter) => {
    console.log(letter);
    if ((letter = "A")) {
      let letter = "T";
    } else if ((letter = "T")) {
      let letter = "A";
    } else if ((letter = "C")) {
      return "G";
    } else if ((letter = "G")) {
      return "C";
    }
  });
  let final = deconstructed.join("");
  return final;
}

// console.log(DNAStrand("ATTGC"));

function DNAStrand(dna) {
  return dna.replace(/./g, function (c) {
    return DNAStrand.pairs[c];
  });
}

DNAStrand.pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

// console.log(DNAStrand("ATTGC"));

// --------------------------- CODE WARS 9/30 ---------------------------

function longestOriginal(s1, s2) {
  // First we could combine the two strings.
  // Then split it
  // Then map over the values and pull out each value only once
  // Then combine the values
  // Then sort it by value
  // Return that newly created string
  return s1.concat(s2).split("");
  // Can I now put these in a new array?
  new Set()

    .sort((a, b) => {
      return a.localeCompare(b);
    })
    .join("");
}
// console.log(longestOriginal("aretheyhere", "yestheyarehere"));

function longestTwo(s1, s2) {
  // First we could combine the two strings.
  // Then split it
  // Then map over the values and pull out each value only once
  // Then combine the values
  // Then sort it by value
  // Return that newly created string

  let newString = new Set(
    s1
      .concat(s2)
      .split("")
      .sort((a, b) => {
        return a.localeCompare(b);
      })
      .join("")
  );

  return Array.from(newString).join("");
}
// console.log(longest("aretheyhere", "yestheyarehere"));

// Community solutions:
const longestThree = (s1, s2) => [...new Set(s1 + s2)].sort().join("");
// Or...
const longestFour = (s1, s2) => {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
};

//  Counting duplicates

function duplicateCount(text) {
  let stringArray = text.split("");

  let counts = stringArray.reduce((map, val) => {
    map[val] = (map[val] || 0) + 1;
    return map;
  }, {});
  return counts;
}
// Doesn't work :(
// console.log(duplicateCount("aabbcde"));

// ------------------- October 3rd Code Wars

function filter_list(l) {
  return l.filter((value) => {
    return typeof value === "number";
  });
}

// console.log(filter_list([1, "a", "b", 0, 15]));
// NAILED IT, ON TO THE NEXT ONE

function divisors(integer) {
  function isPrime(integer) {
    if (integer < 2) return false;

    for (let k = 2; k < integer; k++) {
      if (integer % k == 0) {
        return false;
      }
    }
    return true;
  }

  return isPrime(integer)
    ? [...Array(integer + 1).keys()].slice(1).filter((i) => integer % i === 0)
    : integer + " is prime";
}

// console.log(divisors(12));

function divisorsTwo(integer) {
  var divs = [];

  for (var i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divs.push(i);
    }
  }

  return divs.length ? divs : integer + " is prime";
}

// console.log(divisorsTwo(12));
// This one works

//  On to the next one.

const alphabetPosition = (text) => {
  return [...text]
    .map((letter) => parseInt(letter, 36) - 9)
    .filter((letter) => letter > 0)
    .join(" ");
};
// Solved!
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Community solution:

function alphabetPositionTwo(text) {
  return (
    text
      .toUpperCase()
      // .toUpperCase to convert string to all upper case, because in dec value, lower-case and upper-case are different integer values.
      .match(/[a-z]/gi)
      // .match(/[a-z]/gi) returns an array object based on regex filter, g flag multiple instance, i flag for any case.
      .map((letter) => letter.charCodeAt() - 64)
      // .map to create a new array populated with the results of calling a provided function on every person in the calling array. \
      // Runs through the array object, and results in the index position.
      .join(" ")
    // .join(' ') converts the array object ['a', 'b'] back into a string 'a b'
  );
}

// POST INTERVIEW CODE

let BreadthFirstSearch = (tree, rootNode, searchValue) => {
  // make a queue array
  let queue = [];
  // populate it with the node that will be the root of your search
  queue.push(rootNode);

  // search the queue until it is empty
  while (queue.length > 0) {
    // assign the top of the queue to variable currentNode
    let currentNode = queue[0];
    console.log("Current node is:" + currentNode.value);

    // if currentNode is the node we're searching for, break & alert
    if (currentNode.value === searchValue) {
      console.log("Found it!");
      return;
    }

    // if currentNode has a left child node, add it to the queue.

    // if currentNode has a right child node, add it to the queue.
    if (currentNode.right !== null) {
      queue.push(tree[currentNode.right]);
    }
    // remove the currentNode from the queue.
    queue.shift();
  }
  console.log("Sorry, no such node found :(");
};

// So, the birthday problem...

const getBirthday = (person, name) => {
  let queue = [];
  queue.push(person);

  while (queue.length > 0) {
    let currentNode = queue[0];
    if (currentNode.name === name) {
      return currentNode.birthday;
    }

    if (currentNode.left !== null) {
      queue.push(person[currentNode.left]);
    }

    if (currentNode.right !== null) {
      queue.push(person[currentNode.right]);
    }
    queue.shift();
  }
};

const getBirthdayTwo = (person, name) => {
  if (person.name == name) {
    return person.birthday;
  } else if (person.descendants != null) {
    var i;
    var result = null;
    for (i = 0; result == null && i < person.descendants.length; i++) {
      result = getBirthdayTwo(person.descendants[i], name);
    }
    return result;
  }
  return null;
};

// Sort a string.

function order(words) {
  let deconstructor = (str) => {
    return str.split("").sort().join("");
  };

  /*

  Deconstructor / reconstructor is not a good idea because how am I possibly going to store 
  or rememeber the original charcter orders of the original strings?

  A much  easier solution would be to try and look through each string in the array of the orignal string 
  and just check for the presence of a numerical value. Maybe .includes() ?
  Store that numerical vlaue in a varibale. Sort the variables. Connect the sorted strings. Done.
  
  */

  if (words.length > 0) {
    return words
      .split(" ")
      .map((word) => {
        // if (
        //   word.includes("1") ||
        //   word.includes("2") ||
        //   word.includes("3") ||
        //   word.includes("4") ||
        //   word.includes("5") ||
        //   word.includes("6") ||
        //   word.includes("7") ||
        //   word.includes("8") ||
        //   word.includes("9")
        // ) {
        //   return "Number found!";
        // } else {
        //   return "XXXXXXXX";
        // }
        return word;
      })
      .sort()
      .join(" ");
  } else {
    return "";
  }
}

// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// let searcher2 = (str) => {
//   return str.split("").sort().join("");
// };

// console.log(searcher2("pe6ople"));

//  community asnwer:

const orderTwo = (words) => {
  return (
    words
      .split(" ")
      .sort((a, b) => a.match(/\d/) - b.match(/\d/))
      // Link here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
      // .match returns an array of matching values when comparing a string and a regular expression.
      // RegEx's are the green forward slashes above /   /
      // Inside we specifiy what cahrcter class we are checking the string against. In this instance, /d is for digits
      // So, coerce the results of the regex on both canidates in your sort method and return the difference, same as you would in a normal a - b sort.
      .join(" ")
  );
};

// console.log(orderTwo("4of Fo1r pe6ople g3ood th5e the2"));

/* You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
 */

function sortArray(numArray) {
  // let tempArray = [];
  // array.map((number) => (number % 2 == 0 ? number : tempArray.push(number)));
  // return tempArray.sort((a, b) => a - b);
  // return numArray.map((number) => (number % 2 == 0 ? number : /\d/));
  let newArray = [];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 == 0) {
      newArray.push(numArray[i]);
    }
  }
  return newArray;
}

// console.log(sortArray([5, 3, 2, 8, 1, 4]));

function sortArrayTwo(array) {
  // define a new array that is going to filter out the odd numbers, then sort them base on ascending value
  const odds = array.filter((number) => number % 2).sort((a, b) => a - b);
  // replace every odd number in the original array with the element in the array
  return array.map((number) => (number % 2 ? odds.shift() : number));
}

// console.log(sortArrayTwo([5, 3, 2, 8, 1, 4]));

function sortOddsArrayThree(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort((a, b) => a - b);

  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j] % 2 !== 0) {
      // .shift() removes and returns the first value in an array. it alters the array.
      // Because we have our odd values in [odds] nicely sorted, we can now for loop our way through the original array.
      // If the value we iterate over is odd, replace that value with the first value from the odds array: using .shift()
      // Each time we do this, the odds array shortens, and the next value takes its place at index[0]
      // Once we've looped over every value and emptied odds, return the new, "original" array
      array[j] = odds.shift();
    }
  }

  return array;
}
// This works the most logcially for me.
// console.log(sortOddsArrayThree([5, 3, 2, 8, 1, 4]));

/* 
Write a method that takes an array of consecutive (increasing) letters as input 
and that returns the missing letter in the array.

You will always get an valid array. 
And it will be always exactly one letter be missing. 
The length of the array will always be at least 2.
The array will always contain letters in only one case.
*/

function findMissingLetter(array) {
  // First, need to assign every letter in the alphabet and assign it a numerical value
  // Then, need to loop through the array parameter and check to see if the next value is exactly i + 1
  // if it ISN'T, return the value at i + 1, converted back to it's letter equivalent

  let newArray = array
    .join("")
    // .toUpperCase()
    // .toUpperCase to convert string to all upper case, because in dec value, lower-case and upper-case are different integer values.
    .match(/[a-z]/gi);
  // .match(/[a-z]/gi) returns an array object based on regex filter, g flag multiple instance, i flag for any case.
  console.log(array);

  for (let i = 0; i < newArray.length; i++) {
    if (!newArray.inclues(i + 1)) {
      return i + 1;
    } else {
      return array;
    }
  }
}

// console.log(findMissingLetter(["a", "b", "c", "d", "f"]));

// Community soloutions:
const findMissingLetterTwo = (array) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );
  const arrayStart = alphabet.indexOf(array[0]);
  // Find the index of the first value in the passed array
  return (
    alphabet
      // return a copy a modified alphabet array...
      .slice(arrayStart, arrayStart + array.length)
      // Sliciing on the first value present from the parameter, ending by assessing how many values are in the parameter array
      .find((missing) => !array.includes(missing))
  );
  // finally, figure out which value the original array does not inclue. .Find wil lreturn the first value that fits the criteria.
};

// console.log(findMissingLetterTwo(["a", "b", "c", "d", "f"]));

function isPrime(num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num >= 2;
}

// console.log(isPrime(73));

function isPrimeTwo(num) {
  // returns boolean
  if (num <= 1) return false; // negatives aren't prime
  if (num % 2 == 0 && num > 2) return false; // even numbers aren't prime
  const square = Math.sqrt(num); // store the square to loop faster
  for (let i = 3; i <= square; i += 2) {
    // start from 3, stop at the square, increment in twos
    if (num % i === 0) return false; // modulo shows a divisor was found
  }
  return true;
}
// This is the solution.
// console.log(isPrimeTwo(15));

// Find the checkout time.
// customers is an array of intergers, each one representing one customer and their checkout time in minutes.
// n = number of tills open.
function queueTime(customers, n) {
  if ((n = 1)) return customers.reduce((a, b) => a + b);
  if (n > 1) {
    // for (let index = 1; index < customers.length; index++) {
    return customers.reduce((a, b) => (a + b) / n);
    // }
  }
}
// Didn't work.
// console.log(queueTime([2, 2, 3, 3, 4, 4], 2));

function queueTimeTwo(customers, n) {
  let tills = Array(n).fill(0);

  customers.forEach((customer) => {
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customer;
  });

  return Math.max(...tills);
}

// This community solution works
// console.log(queueTimeTwo([2, 2, 3, 3, 4, 4], 2));

function queueTimeThree(customers, n) {
  // Make an array containing n amount of elements,
  // n representing the number of tills,
  // and fill with zeroes
  var tills = new Array(n).fill(0);

  // Iterate through the customers
  for (let cusTime of customers) {
    // Find the till that has the least time
    let nextTillAvailable = tills.indexOf(Math.min(...tills));

    // Add the time, representing the customer to
    // the till that has the least time
    tills[nextTillAvailable] += cusTime;
  }

  // Return the till that has the longest wait time
  // This is the required time to get all customers
  // through the que.
  return Math.max(...tills);
}

// console.log(queueTimeThree([2, 2, 3, 3, 4, 4], 2));

function anagrams(word, wordsArray) {
  let matches = [];
  wordsArray.map((wordCheck) => {
    // let letters = word.split("");
    // let testCase = wordCheck.split("");
    if (wordCheck == word) {
      matches.push(wordCheck);
    }
  });

  return matches;
}
// Couldn't solve this one.
// console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
var moveZeros = function (arr) {
  // First thought: remove the 0 values and push them to a new array
  // Then, join the two arrays.
  let sortedArray = arr.sort();
  for (let index = 0; index < sortedArray.length; index++) {
    // if (sortedArray[index] === 0) {
    sortedArray.push(sortedArray.splice(sortedArray.indexOf(0), 1)[0]);
    // }
    return sortedArray;
  }
};

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

function pushZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) arr[count++] = arr[i];
  }
  while (count < arr.length) {
    arr[count++] = 0;
  }

  return arr;
}
// This works from stack overflow. But I don't understand it.
// console.log(pushZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

const moveZerosTwo = (arr) => {
  let filtedList = arr.filter((num) => {
    // filter using num as a parameter. If num is not 0, put it into this variable filteredList.
    return num !== 0;
  });
  let zeroList = arr.filter((num) => {
    // filter using num as a parameter. If num equates to 0, put it into this variable zeroList.
    return num === 0;
  });
  // Combine the two arrays using .concat().
  return filtedList.concat(zeroList);
};
// This works, but commentators didn't like that you have to loop through the array twice for two filters.
// console.log(moveZerosTwo([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// Here's a one loop solution:

const moveZerosThree = (arr) => {
  // isNonZero checks to see if a value equates to 0 and returns either true or false.
  // Any value. Booleans, strings, integers, whatever.
  const isNonZero = (value) => value !== 0;

  let filteredArray = [];
  let zeroArray = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    isNonZero(item)
      ? // If the item is not zero, push it to the regular array.
        filteredArray.push(item)
      : // If the item is zero, push it to the zeroArray
        zeroArray.push(item);
  }
  // Combine the two arrays using concat.
  return filteredArray.concat(zeroArray);
};

// console.log(moveZerosThree([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.

function rot13(message) {
  // return String.fromCharCode(
  message.split("").forEach((letter) => {
    letter.charCodeAt(0) + 13;
  });
  // );
}

// console.log(rot13("test"));

// Write a function that returns a string in camelcase with no Spaces.
// "camel case word".camelCase() => CamelCaseWord

// Write a function that returns a string in camelcase with no Spaces.
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase = () => {
  let variableee = this.toString().toUpperCase();
  return variableee.concat("");
};

// console.log("camel case word".camelCase());

// -----------------------------------------------------------------------
String.prototype.camelCaseThree = function () {
  // The arrow function doesn’t define its own execution context.
  // No matter how or where being executed, this value inside of an arrow function always equals this value from the outer function.
  //  In other words, the arrow function resolves this lexically.
  return this.split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};

// ^^ this works

// console.log("camel case word".camelCaseThree());

const camelCaseTwo = (string) => {
  return (
    string
      // Deconstruct the string by word. Maybe .split(" ")
      .split(" ")
      // identify the first letter on each word index[0] and capitalize it
      .map((word) => word[0].toUpperCase() + word.slice(1))
      //  Don't forget to also return the rest of the word using .slice(1)
      // This treats each word as an array in two parts: a first letter and the remaining letters.
      .join("")
  );
  // Then, .join("") to join each string together into one string
};
// This works!!!
// console.log(
//   camelCaseTwo("camel case word") + " ...and... " + camelCaseTwo("hello world")
// );

// -------------------------------------------------------------------------------

// Break camel casing. complete the function
// "camelCasing"  =>  "camel Casing"
function solution(string = "") {
  // edge cases!!!
  return (
    string
      .trim()
      // In Regex, capturing parenthesis allow us to match a value, and remember it. This allows us to use that saved value later
      .split(/(?=[A-Z])/)
      .join(" ")
  );
}

// console.log(solution("camelCasing"));

function solutionTwo(string) {
  string = string.split("").map(function (letter) {
    if (letter === letter.toUpperCase()) {
      letter = " " + letter;
    }
    return letter;
  });
  return string.join("");
}

console.log(solutionTwo("camelCasing"));

const solutionThree = (string) => {
  return string
    .split("")
    .map((letter) => {
      if (letter === letter.toUpperCase()) {
        letter = " " + letter;
      }
      return letter;
    })
    .join("");
};

console.log(solutionThree("camelCasing"));
