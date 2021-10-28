// The Hashtag Generator
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  if (str !== "" && str.trim() !== "") {
    let capped =
      "#" +
      str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
    if (capped.length <= 140) {
      return capped;
    } else return false;
  } else return false;
}

// Solved! 🥳

// console.log(
//   "Expected:",
//   false,
//   "-----",
//   "Returned:",
//   generateHashtag(" ".repeat(200))
// );

// console.log(
//   "Expected: #CodewarsIsNice",
//   "-----",
//   "Returned:",
//   generateHashtag("Codewars is nice")
// );

// -----------------------------------------------------------------------------------------------------------------------
