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

// Solved!
console.log(
  likes(["Sam", "Alex", "Parker", "Cath", "Jack", "Lobstah", "Keem", "Ru"])
);

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