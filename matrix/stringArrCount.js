function generateArrayBasedOnStringLength(strings) {
 let counts = [];
 for (let i = 0; i < chunkWordArray.length; i++) {
  let count = 0;
  while (count < strings[i].length) {
   if(vount==chunkWordArray[i].length)
   {
   counts.push(count);
   }
   count++;
  }
 }
 return counts;
}

// Output: [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3]