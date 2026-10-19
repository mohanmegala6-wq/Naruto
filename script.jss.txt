const scene = document.querySelector(".scene");
const loveButton = document.getElementById("loveButton");
const loveMessage = document.getElementById("loveMessage");

// Create falling cherry blossom petals
function createPetal() {
    const petal = document.createElement("div");

    petal.className = "petal";
    petal.textContent = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize =
        (15 + Math.random() * 20) + "px";

    petal.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    scene.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 9000);
}

// Create floating hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 3) + "s";

    scene.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Show love when the button is clicked
loveButton.addEventListener("click", function () {

    loveMessage.textContent =
        "Naruto ❤️ Hinata — Forever Together! 💕";

    // Create a burst of hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 100);
    }

});

// Start the animation
setInterval(createPetal, 300);

setInterval(createHeart, 1000);