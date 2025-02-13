document.getElementById("valentineButton").addEventListener("click", function() {
    const roseContainer = document.getElementById("roseContainer");
    for (let i = 0; i < 10; i++) {
        let rose = document.createElement("img");
        rose.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rose_icon.svg/512px-Rose_icon.svg.png";
        rose.className = "rose";

        // กำหนดตำแหน่งแบบสุ่ม
        rose.style.left = Math.random() * window.innerWidth + "px";
        rose.style.top = Math.random() * window.innerHeight + "px";

        roseContainer.appendChild(rose);
    }
});
