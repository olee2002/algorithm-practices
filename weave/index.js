// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
   //create new queue
   const result = new Queue();
   //new queue has alternating content from sourceOne & sourceTwo
   //get content from sourceOne
   //iterate? or recursive? to keep pushing the alternative items to result
   const lastItemOne = sourceOne.peek()
   const lastItemTwo = sourceTwo.peek()
   while(lastItemOne || lastItemTwo){
   const itemSOne = sourceOne.remove()
   //get content from sourceTwo
   const itemSTwo = sourceTwo.remove()
    //add the content of sourceOne & sourceTwo to the new queue
    if(lastItemOne) result.add(itemSOne)
    if(lastItemTwo) result.add(itemSTwo)
   }
   
   //handle new queue with undefined
   return result
}

module.exports = weave;
