document.getElementById("valentineButton").addEventListener("click", function() {
    // Change scene
    document.getElementById("scene1").classList.add("hidden");
    document.getElementById("scene2").classList.remove("hidden");
    document.body.style.backgroundColor = "#ffb6c1"; // Change background color

    // Wait 300ms, then start floating roses
    setTimeout(() => {
        const roseContainer = document.getElementById("roseContainer");
        for (let i = 0; i < 10; i++) {
            let rose = document.createElement("img");
            rose.src = "https://www.misskatecuttables.com/uploads/shopping_cart/9755/large_rose-flower-group2.png"; // Local rose image
            rose.className = "rose";

            // Random position
            rose.style.left = Math.random() * window.innerWidth + "px";
            rose.style.top = Math.random() * window.innerHeight + "px";

            roseContainer.appendChild(rose);
        }
    }, 300); // Delay so it happens after the scene change
});
