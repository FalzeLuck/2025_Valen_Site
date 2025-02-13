document.getElementById("valentineButton").addEventListener("click", function() {
    const roseContainer = document.getElementById("roseContainer");
    for (let i = 0; i < 10; i++) {
        let rose = document.createElement("img");
        rose.src = "https://static.vecteezy.com/system/resources/previews/003/346/596/non_2x/cute-rose-natural-isolated-icon-free-vector.jpg";
        rose.className = "rose";

        // กำหนดตำแหน่งแบบสุ่ม
        rose.style.left = Math.random() * window.innerWidth + "px";
        rose.style.top = Math.random() * window.innerHeight + "px";

        roseContainer.appendChild(rose);
    }
});
