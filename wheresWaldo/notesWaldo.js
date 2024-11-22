

<script>
    appendClickableImageToList("imageList", "https://example.com/image.jpg", "https://example.com", "Example Image");
</script>



function appendClickableImageToList(listId, imageUrl, linkUrl, altText = "Image") {
    // Find the list by ID
    const list = document.getElementById(listId);

    // Create the list item
    const listItem = document.createElement("li");

    // Create the clickable link
    const link = document.createElement("a");
    link.href = linkUrl;
    link.target = "_blank"; // Opens the link in a new tab

    // Create the image element
    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = altText;
    image.style.cursor = "pointer"; // Changes the cursor to pointer on hover

    // Append the image to the link, and the link to the list item
    link.appendChild(image);
    listItem.appendChild(link);

    // Append the list item to the list
    list.appendChild(listItem);
}




  
  
  
  
  
  
  
  function generateUniqueRandNumbers(N, maxNumber) {
    const randNumbers = new Set();
    
    while (randNumbers.size < N) {
        const randNumber = Math.floor(Math.random() * maxNumber);
        randNumbers.add(randNumber); // Only adds if unique
    }
    
    return [...randNumbers]; // Convert Set to an array
}
  
  
  
  


        function functionName() {
            console.log("functionName called!");

            // Change the onClick to another function (or no function)
            const button = document.getElementById("myButton");
            let button=this
            
            button.onclick = function () {
            };
        }
   






// Example array and loop range
const arraySet = new Set([a, b, c]); // Define a Set from array values
let concatString = ""; // Initialize the string to concatenate
const frontTag = "<tag>"; // Example front tag
const endTag = "</tag>"; // Example end tag
const hiddenArr = ["hidden", "visible", "other"]; // Example array



console.log(concatString); // Output the final concatenated string