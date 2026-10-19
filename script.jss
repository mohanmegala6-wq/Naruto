const loveButton = document.getElementById("loveButton");
const loveMessage = document.getElementById("loveMessage");

loveButton.addEventListener("click", function () {
    loveMessage.textContent =
        "Naruto ❤️ Hinata — A love that lasts forever! 🌸💖";

    for (let i = 0; i < 15; i++) {
        createFloatingItem("heart");
    }
});

function createFloatingItem(type) {
    const item = document.createElement("span");

    item.className = type;
    item.textContent = type === "heart" ? "❤️" : "🌸";

    item.style.left = Math.random() * 100 + "vw";
    item.style.animationDuration = (3 + Math.random() * 4) + "s";
    item.style.fontSize = (18 + Math.random() * 20) + "px";

    document.body.appendChild(item);

    setTimeout(function () {
        item.remove();
    }, 7000);
}

setInterval(function () {
    createFloatingItem(Math.random() > 0.5 ? "heart" : "flower");
}, 500);
