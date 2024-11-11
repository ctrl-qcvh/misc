<ul id="imageList"></ul>

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