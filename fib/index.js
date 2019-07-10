// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
   let fibArr=[]
   for(let i=0; i<=n ; i++){
      if(i===0||i===1) fibArr.push(i)
      else if(i>=2) fibArr.push(fibArr[i-1]+fibArr[i-2])
   }
   return fibArr[n]
}

module.exports = fib;
