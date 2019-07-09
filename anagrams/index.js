// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
   stringA = stringA.replace(/[^\w]/g,'')
   stringB = stringB.replace(/[^\w]/g,'')
   const mapA = {}
   const mapB = {}
   let isAnagrams = false

   for(let char of stringA){
      if(mapA[char]) {
         mapA[char]++
      } else {
         mapA[char] = 1
      }
   }

   for(let char of stringB){
      if(mapB[char]) {
         mapB[char]++
      } else {
         mapB[char] = 1
      }
   }

   if(stringA.length===stringB.length){
      for(let key in mapA){
         if(mapA[key]===mapB[key]) {
               isAnagrams = true
         } else {
            isAnagrams = false;
            break;
         }
      }
   } else {
      isAnagrams = false;
   }
   return isAnagrams
}

module.exports = anagrams;


// function anagrams(stringA, stringB) {
//    const strA=stringA.replace(/[^\w]/g,'').split('').sort().reverse().join('').toLowerCase()
//    const strB=stringB.replace(/[^\w]/g,'').split('').sort().reverse().join('').toLowerCase()
//  return strA===strB ? true : false
// }