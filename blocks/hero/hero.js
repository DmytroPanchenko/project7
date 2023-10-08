export default function decorate(block) {
    // Select all child div elements of .hero.block
    const heroBlocks = block.querySelectorAll(':scope > div');

// Loop over each heroBlock
    heroBlocks.forEach(function(block) {
        // If the block doesn't contain a picture element
        if (block.querySelector('picture') === null) {
            block.classList.add('textcontent');
        }
    });

    const buttons = block.querySelectorAll(':scope .button.primary');
    buttons.forEach(function(btn) {
        btn.classList.add('btnconversion');
        btn.addEventListener("click", function(e) {
            alert("Not implemented");
        });
    });


}
