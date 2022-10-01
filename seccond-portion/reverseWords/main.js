function reverseWords(str) {
  let reversedLetters = [...str].reverse().join('');
  console.log(reversedLetters)
let reversedSentence = reversedLetters.split(" ").reverse().join(" ");
 return reversedSentence
console.log(reversedSentence)


}