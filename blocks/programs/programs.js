export default function decorate(block) {
    const { learnMore } = placeholders[document.documentElement.lang];

    // Change the structure of the section by removing the intermediate <div>-s
    const intermediateDiv = block.querySelectorAll(':scope > div');

    intermediateDiv.forEach(rowDiv => {
        Array.from(rowDiv.children).forEach(tile => {
             block.appendChild(tile);
        });
        block.removeChild(rowDiv);
    });

    const cards = block.querySelectorAll(':scope > div');
    cards.forEach(card => {
        const lastParagraph = card.lastElementChild;
        const link = lastParagraph.querySelector(':scope > a');

        lastParagraph.removeChild(link);
        link.innerText = learnMore ? learnMore : "Learn more";
        link.classList.add("button");
        link.classList.add("secondary");

        card.appendChild(link);
        card.removeChild(lastParagraph);
    });

}
