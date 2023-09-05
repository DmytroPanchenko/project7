export default function decorate(block) {
    // Change the structure of the section by removing the intermediate <div>
    const intermediateDiv = block.querySelector('div');
    // Iterate over the children of the intermediate div (the tiles)
    Array.from(intermediateDiv.children).forEach(tile => {
        // Move each tile directly under the .tiles container
        block.appendChild(tile);
    });

    // Remove the now-empty intermediate div
    block.removeChild(intermediateDiv);


    // Select all <p> elements within the .tiles element
    const pElements = document.querySelectorAll('.tiles p');

    pElements.forEach(p => {
        // Check if the <p> contains a <picture> or <img> tag
        if (p.querySelector('picture, img')) {
            // Add a specific class to the <p>
            p.classList.add('image-container');
        }
    });

}
