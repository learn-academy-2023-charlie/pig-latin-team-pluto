// const userInput = "apple through queen squeal fry fluent"
// // const arrayOfUserInput = userInput.split(" ")
// // console.log(arrayOfUserInput)
// // output with space between " "
// // [ 'apple', 'through', 'queen', 'squeal', 'fry', 'fluent' ]

// // const userInput = "apple through queen squeal fry fluent"
// // const arrayOfUserInput = userInput.split("")
// // console.log(arrayOfUserInput)
// // // output with no space between ""
// // [
// //     'a', 'p', 'p', 'l', 'e', ' ', 't',
// //     'h', 'r', 'o', 'u', 'g', 'h', ' ',
// //     'q', 'u', 'e', 'e', 'n', ' ', 's',
// //     'q', 'u', 'e', 'a', 'l', ' ', 'f',
// //     'r', 'y', ' ', 'f', 'l', 'u', 'e',
// //     'n', 't'
// //   ]

// const myPigLatinCodeHere = () => {

//     // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
//     const arrayOfUserInput = userInput.split(" ")
//     // output [ 'apple', 'through', 'queen', 'squeal', 'fry', 'fluent' ]
//     console.log("arrayOfUserInput:", arrayOfUserInput)

//     // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
//     const translatedWordsArray = arrayOfUserInput.map(eachWord => {
//       console.log("eachWord:", eachWord)

//       // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
//       const vowelsArray = eachWord.split("").filter(vowel => {
//         return (
//           vowel === "a" || 
//           vowel === "e" || 
//           vowel === "i" || 
//           vowel === "o" || 
//           vowel === "u"
//         )
//       })
//       console.log("vowelsArray:", vowelsArray)

//       // ACTION ITEM: your Pig Latin logic goes here!

    

//       // ACTION ITEM: this return will be the output of your Pig Latin'd code
//       return eachWord
//     })
//      // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
//      const translatedWords = translatedWordsArray.join(" ")
//      console.log("translatedWords:", translatedWords)
//         console.log(eachWord)
//      // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
//      setInputTranslated(translatedWords)
//    }

eachWord = "queen"

if (eachWord.includes('qu')) {
  const quIndex = eachWord.indexOf('qu') + 2;
  // the above varialbe gets us to the index of the letter after 'u'. 
  return eachWord.slice(quIndex) + eachWord.slice(0, quIndex) + 'ay'; 
  // move all consonants and "u" to the end, add "ay"
}

console.log()