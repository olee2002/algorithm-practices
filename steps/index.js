// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//recursion method
function steps(n, row=0, column=''){
   if (n === row) {
       return;
     }
     if (n === column.length) {
        //print the result
       console.log(column);
       return steps(n, row + 1);
     }
   
     if(column.length <=row){
       column +='#';
       // console.log(column)
     } else {
       column +=' ';
     }
     // const add = column.length <= row ? '#' : '@';
     steps(n, row, column);
   }

module.exports = steps;


//iteration
// function steps(n) {
//    for(let i=0; i<n; i++){
//       let print = ''
//       for(let j=0; j<n; j++){
//         if(i >=j ) {
//           print += '#' 
//         } else {
//           print += " "
//         }
//       }
//        console.log(print)
//    }
// }