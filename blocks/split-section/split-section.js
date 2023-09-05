export default function decorate(block) {
// Select the split-section element within the block
    const innerDiv = block.querySelector('div');

// Iterate over its direct child div elements
    innerDiv.childNodes.forEach(child => {
        if (child.nodeType === Node.ELEMENT_NODE) { // Ensure it's an element node
            if (child.querySelector('picture')) {
                // If the div contains a picture element, assign the split-section-image class
                child.classList.add('split-section-image');
            } else {
                // Otherwise, assign the split-section-content class
                child.classList.add('split-section-content');
            }
        }
    });
}
