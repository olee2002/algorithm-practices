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

   function strMap(str){
      string = str.replace(/[^\w]/g,'')
      const map = {}
      for(let char of string){
         if(map[char]) {
            map[char]++
         } else {
            map[char] = 1
         }
      }
      return map
   }

   let isAnagrams = false

   const strA = strMap(stringA)
   const strB = strMap(stringB)

   if(Object.keys(strA).length===Object.keys(strB).length){
      for(let key in strA){
         if(strA[key]===strB[key]) {
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