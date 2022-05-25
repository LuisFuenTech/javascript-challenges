"use strict";

function hashTagGenerator(text) {
  return (
    text &&
    `#${text
      .split(" ")
      .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join("")}`
  );
}

console.log(hashTagGenerator("javascript challenges 2022"));
//Output: #JavascriptChallenges2022
