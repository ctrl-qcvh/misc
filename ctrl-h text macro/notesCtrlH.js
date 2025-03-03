// make global obj
let myObject = {
	chunkBeginning,
	chunkEnd ,
	bookMarkLocation//problem? recursive....
};
let intObject



function saveBookmark()
{
localStorage.setItem('myObject', JSON.stringify(myObject));
bookMarkLocation = localStorage.getItem('myObject');

// Parse the string back into an object
let parsedObject = JSON.parse(bookMarkLocation);

// Convert the values back to integers (if necessary)
intObject = {
	chunkBeginning: parseInt(parsedObject.chunkBeginning, 10),
	chunkEnd: parseInt(parsedObject.chunkEnd, 10),
};
}
// Log the result
console.log('Original Object:', myObject);
console.log('Stored String:', storedString);
console.log('Parsed Object:', parsedObject);
console.log('Integers Object:', intObject);











        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("chunk").addEventListener("click", function() {
                console.log("Button clicked!");
                doFunctions();
                myObject.chunkBeginning += parseInt(document.getElementById("userChunkSize").value);
                log(myObject.chunkBeginning);
                myObject.chunkEnd += parseInt(document.getElementById("userChunkSize").value);
                // localStorage.setItem('myObject', JSON.stringify(myObject));
                saveMyObject();
            });
        });