// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const result = str[0].toUpperCase();
  for(let i=0; i<str.length; i++){
     if(i-1){
        result+=str[i].toUpperCase();
     } else {
        result+=str[i]
     }
  }
}

module.exports = capitalize;


// function capitalize(str) {
//    const arr = str.split(' ')
//    return arr.map(e=>e.slice(0,1).toUpperCase()+e.slice(1,e.length)).join(' ')
// }