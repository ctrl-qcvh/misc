let threshold=[]
let mutation=.004
let nuroArr=[]
let trainingData=[]
let netLoop
let nuron=0
let arr
const x = 3;
const y = 4;
const z = 5;
const t = 6;
 function create4DArray(x, y, z, t) {
  arr = new Array(x);
  for (let i = 0; i < x; i++) {
   arr[i] = new Array(y);
   for (let j = 0; j < y; j++) {
    arr[i][j] = new Array(z);
    for (let k = 0; k < z; k++) {
     arr[i][j][k] = new Array(t);
     setElementValue()
    }
   }
  }
  return arr;
 }
 
 // Example usage:
 
 
 const my4DArray = create4DArray(x, y, z, t);
 console.log(my4DArray);

function setElementValue() {
 arr[x][y][z][t] = 9999;
}



// Example usage:


/*


function nuralNetTraining() {
 for(netLoop=0; netLoop < threshold; netLoop++)
 {
if(nuroArr[nuron]=>threshold[0])
{
 nuroArr[nuron]+=mutation;
}
}
}

// recurrent nn
// threshold function log=slow but rezz?
*/