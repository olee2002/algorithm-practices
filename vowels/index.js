// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//    let vowels = "aeiou"
//    let count = 0
//       for(let i of str.toLowerCase()){
//          if(vowels.includes(i)) count ++
//       }
   
// return count
// }
module.exports = vowels;

function vowels(str) {

   let vowels = "aeiou"
   let count = 0
      for(let i of str.toLowerCase()){
         for(let j of vowels){
           if(i===j){
             count++
           }
         }
      }
   
return count
}