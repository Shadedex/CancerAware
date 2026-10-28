const button = document.getElementById("helloButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "You just made your website interactive!";
});

/* CancerAware — cursor glitter trail */

const glitterColors = [
    "#c4b5fd",
    "#a78bfa",
    "#67e8f9",
    "#f0abfc"
];

let lastGlitterTime = 0;

document.addEventListener("mousemove", function (event) {
    const now = Date.now();

    // Limit particle creation for smoother performance
    if (now - lastGlitterTime < 35) return;
    lastGlitterTime = now;

    const glitter = document.createElement("span");

    glitter.className = "cursor-glitter";
    glitter.textContent = "✦";

    glitter.style.left = event.clientX + "px";
    glitter.style.top = event.clientY + "px";
    glitter.style.color =
        glitterColors[Math.floor(Math.random() * glitterColors.length)];

    document.body.appendChild(glitter);

    // Remove each particle after its animation
    setTimeout(function () {
        glitter.remove();
    }, 800);
});
