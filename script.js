document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer Logic
    function startCountdown() {
        let targetDate = new Date("Feb 14, 2025 00:00:00").getTime();
        setInterval(() => {
            let now = new Date().getTime();
            let distance = targetDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }
    startCountdown();

    // Toggle Tabs Visibility
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            document.querySelectorAll(".tab-content").forEach(tab => {
               tab.classList.remove("active");
               if (tab.id === targetId) {
                  tab.classList.add("active");
               }
            });       
        });
    });

    // Surprise Proposal Animation
    document.getElementById("proposal").addEventListener("click", function () {
        document.getElementById("hidden-message").style.display = "block";
    });

    // Photo Collage Uploader
    document.getElementById("photo-upload").addEventListener("change", function (event) {
        let collageArea = document.getElementById("collage");
        collageArea.innerHTML = ""; // Clear previous images
        Array.from(event.target.files).forEach(file => {
            let img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            img.style.width = "150px";
            img.style.margin = "10px";
            img.style.borderRadius = "10px";
            collageArea.appendChild(img);
        });
    });
});
// Falling Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    // Random Position & Animation Speed
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer Logic
    function startCountdown() {
        let targetDate = new Date("Feb 14, 2025 00:00:00").getTime();
        setInterval(() => {
            let now = new Date().getTime();
            let distance = targetDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }
    startCountdown();

    // Toggle Tabs Visibility
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            document.querySelectorAll(".tab-content").forEach(tab => {
                tab.classList.remove("active");
                if (tab.id === targetId) {
                    tab.classList.add("active");
                }
            });
        });
    });

    // Hidden Love Letter Button Logic
    const loveLetterButton = document.getElementById("hidden-button");
    const loveLetter = document.getElementById("love-letter");
    loveLetterButton.addEventListener("click", function () {
        loveLetter.style.display = "block";
        this.style.display = "none"; // Hide button after clicking
    });

    // Photo Collage Uploader
    document.getElementById("photo-upload").addEventListener("change", function (event) {
        let collageArea = document.getElementById("collage");
        collageArea.innerHTML = ""; // Clear previous images
        Array.from(event.target.files).forEach(file => {
            let img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            img.style.width = "150px";
            img.style.margin = "10px";
            img.style.borderRadius = "10px";
            collageArea.appendChild(img);
        });
    });
});


// Generate Hearts Every 0.5 Seconds
setInterval(createHeart, 500);
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    // Randomize heart size
    const size = Math.random() * 10 + 10 + "px"; // Hearts range between 10px and 20px
    heart.style.fontSize = size;

    // Random position across the entire screen width
    heart.style.left = Math.random() * window.innerWidth + "px";

    // Random animation duration for variety
    heart.style.animationDuration = Math.random() * 5 + 3 + "s"; // Between 3s and 8s
    heart.style.animationTimingFunction = "ease-in-out"; // Smooth movement

    document.body.appendChild(heart);

    // Remove hearts after animation ends
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Generate hearts every 0.3 seconds
setInterval(createHeart, 300);
document.addEventListener("DOMContentLoaded", function () {
    // Hidden Love Letter Button Logic
    const loveLetterButton = document.getElementById("hidden-button");
    const loveLetter = document.getElementById("love-letter");
    const closeButton = document.getElementById("close-button");

    loveLetterButton.addEventListener("click", function () {
        loveLetter.style.display = "block";
        this.style.display = "none"; // Hide "Open Love Letter" button
    });

    closeButton.addEventListener("click", function () {
        loveLetter.style.display = "none";
        loveLetterButton.style.display = "inline-block"; // Show "Open Love Letter" button again
    });
});

