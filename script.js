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

    // Toggle Love Letter Visibility
    document.getElementById("love-letter-button").addEventListener("click", function() {
        document.getElementById("love-letter").classList.toggle("hidden");
    });

    // Toggle Menu Visibility
    document.getElementById("menu-button").addEventListener("click", function () {
        document.getElementById("side-menu").classList.toggle("hidden");
    });

    // Toggle Background Music
    document.getElementById("toggle-music").addEventListener("click", function () {
        let music = document.getElementById("background-music");
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    });
});
