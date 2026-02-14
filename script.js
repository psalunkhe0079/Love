// Typewriter Effect
const text = "Today is all about celebrating you and the joy you bring to my life ❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;

// Start Celebration
function startCelebration() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("gallery").classList.remove("hidden");

    // Play Music (Autoplay works after user click)
    document.getElementById("bgMusic").play();

    startConfetti();
}

// Show Final Message
function showMessage() {
    document.getElementById("gallery").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
}

// Simple Confetti Animation
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];

    for (let i = 0; i < 100; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 2,
            speed: Math.random() * 3 + 2
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "white";

        pieces.forEach(p => {
            ctx.fillRect(p.x, p.y, p.size, p.size);
            p.y += p.speed;
            if (p.y > canvas.height) p.y = 0;
        });

        requestAnimationFrame(update);
    }

    update();
}