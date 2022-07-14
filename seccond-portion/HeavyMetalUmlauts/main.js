//write yunction to replace the so-last-year letters 
//a-e-i-o-u-and-sometimes-y with thetotally rocking letters
// the param is a sentence 
// returning the vowels in rocking letters
// ("Announcing the Macbook Air Guitar"), "Ännöüncïng thë Mäcböök Äïr Güïtär");
// create a space where the updated sentence goes 
// split the words into individual letters
//Go through each letter in the sentence 
// every time you go over a vowel you need to convert it to rocking letter 
// reach the end of the letters 
// put the letters back into the updated sentence
// return the updated sentence 

// WHAT I WAS THINKING 
// function heavyMetalUmlauts(boringText) {
//   let updatedSentence = []
//   let splitSentence = boringText.split('')
//   if( boringText.includes('A')
//     return updatedSentence;
// }

// ACTUAL SOLUTION
function heavyMetalUmlauts(boringText) {
  let updatedSentance = ''
  const rocking = {
    A: 'Ä', O: 'Ö', a: 'ä', o: 'ö', E: 'Ë', U: 'Ü', e: 'ë', u: 'ü', I: 'Ï', Y: 'Ÿ', i: 'ï', y: 'ÿ'
  }
  // let splitSentence = boringText.split('')
  for (i = 0; i < boringText.length; i++){
    if(rocking[boringText[i]]) updatedSentance += rocking[boringText[i]];
    else updatedSentance += boringText[i]
  }
  
    return updatedSentance;
}

   