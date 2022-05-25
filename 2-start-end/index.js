"use strict";

function startEndText(text, flag = "start") {
  return flag !== "start" ? text.slice(-3) : text.slice(0, 3);
}

console.log(startEndText("Fuentech")); // Fue
console.log(startEndText("Fuentech", "start")); // Fue
console.log(startEndText("Fuentech", "end")); // ech
console.log(startEndText("Fu", "end")); // Fue
