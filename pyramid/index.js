// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
   m = n*2-1
   let midpt = Math.floor(m/2)
   for(let i=0; i<n; i++){
      let print = ''
      for(let j=0; j<m; j++){
        if(midpt-i<=j && midpt+i>=j){
          print += '#'
        } else {
          print += ' '
        }
      } 
     console.log(print)
   }   
}

module.exports = pyramid;
