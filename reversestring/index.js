// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//solution 03
function reverse(str) {
   return str.split('').reduce((a,b)=>b+a,'')
}

module.exports = reverse;

//solution 01
// function reverse(str) {
//    return str.split('').reverse().join('')
// }

//solution 02
// function reverse(str) {
//    let reversed = ''
//    let arr = str.split('')
//    for (let i=arr.length-1; i>=0 ;i--){
//       reversed += arr[i]
//    }
//    return reversed
// }