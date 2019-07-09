// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   let reversed = ''
   for (let char of str){
      reversed = char + reversed 
   }
   const arr = reversed.split('')
   let isPanlindrome = false
   for(let i=0; i<arr.length; i++){
     console.log('test',arr[i],arr[arr.length-1-i] )
      if(arr[i]===arr[arr.length-1-i]){
         isPanlindrome = true
      } else {
        isPanlindrome = false
        break;
      }
   }
return isPanlindrome;
}

module.exports = palindrome;
