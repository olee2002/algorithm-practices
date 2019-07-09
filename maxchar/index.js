// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   let obj={}
   for (let l of str){
      obj[l] ? obj[l]++ : obj[l]=1
   }

   let max = 0
   let maxChar = ''

   for (o in obj){
      if(obj[o]>max){
         max = obj[o]
         maxChar = o
      }
   }

   return maxChar

}

module.exports = maxChar;
