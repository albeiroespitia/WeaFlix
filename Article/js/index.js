

document.getElementById("contactButton").addEventListener("click", scrollToItem);

function scrollToItem(e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}
