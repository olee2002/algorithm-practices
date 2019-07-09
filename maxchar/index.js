// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   let obj={}
   for (let l of str){
      if(!Object.keys(obj).includes(l)){
         obj[l]=1
      } else {
         obj[l]++
      }
   }
   const max = Math.max(...Object.values(obj))
   const idx = Object.values(obj).indexOf(max)
   return Object.keys(obj)[idx]

}

module.exports = maxChar;
