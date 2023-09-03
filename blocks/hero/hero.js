export default function decorate(block) {
    // Select all child div elements of .hero.block
    const heroBlocks = document.querySelectorAll('.hero.block > div');

// Loop over each heroBlock
    heroBlocks.forEach(function(block) {
        // If the block doesn't contain a picture element
        if (block.querySelector('picture') === null) {
            block.classList.add('textcontent');
        }
    });
}
