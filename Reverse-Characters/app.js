"use strict ;"

function ReverseCharacters(str)
 {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(ReverseCharacters("sretcarahc")); // characters
console.log(ReverseCharacters("aras")); // sara
console.log(ReverseCharacters("olleh")); // hello
console.log(ReverseCharacters("rebmun")); // number
console.log(ReverseCharacters("eno")); //one