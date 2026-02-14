// Typewriter
const text = "From the moment you came into my life, everything became more beautiful ❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;

// Start Love Flow
function startLove() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("gallery").classList.remove("hidden");
    document.getElementById("bgMusic").play();
}

// Show Proposal
function showProposal() {
    document.getElementById("gallery").classList.add("hidden");
    document.getElementById("proposal").classList.remove("hidden");
}

// Confetti on YES
function celebrate() {
    startConfetti();
    alert("Yayyyy! I love you ❤️");
}

// Confetti
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];

    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 6 + 2,
            speed: Math.random() * 3 + 2
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "pink";

        pieces.forEach(p => {
            ctx.fillRect(p.x, p.y, p.size, p.size);
            p.y += p.speed;
            if (p.y > canvas.height) p.y = 0;
        });

        requestAnimationFrame(update);
    }

    update();
}
