document.getElementById("valentineButton").addEventListener("click", function() {
    const roseContainer = document.getElementById("roseContainer");
    for (let i = 0; i < 10; i++) {
        let rose = document.createElement("img");
        rose.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Red_Rose_Bouquet.svg/512px-Red_Rose_Bouquet.svg.png"; // New rose image
        rose.className = "rose";

        // Random position
        rose.style.left = Math.random() * window.innerWidth + "px";
        rose.style.top = Math.random() * window.innerHeight + "px";

        roseContainer.appendChild(rose);
    }
});
