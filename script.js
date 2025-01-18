document.addEventListener("DOMContentLoaded", function () {
    function showTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });
        document.getElementById(tabId).style.display = 'block';
    }

    // Ensure Rose Day tab is shown on page load
    showTab('rose-day');

    // Assign tab switching functionality to nav links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let tabId = this.getAttribute("href").substring(1); // Remove # from href
            showTab(tabId);
        });
    });

    // Toggle menu visibility
    document.getElementById("menu-button").addEventListener("click", function () {
        let menu = document.getElementById("side-menu");
        menu.classList.toggle("hidden");
    });

    // Toggle love letter visibility
    document.getElementById("love-letter-button").addEventListener("click", function () {
        let loveLetter = document.getElementById("love-letter");
        loveLetter.classList.toggle("hidden");
    });

    // Toggle background music
    let music = document.getElementById("background-music");
    document.getElementById("toggle-music").addEventListener("click", function () {
        if (music.paused) {
            music.play();
            this.textContent = "🔇";
        } else {
            music.pause();
            this.textContent = "🎵";
        }
    });

    // Countdown Timer Logic
    document.getElementById("set-countdown").addEventListener("click", function () {
        let userTime = document.getElementById("countdown-input").value;
        if (!userTime) return;

        let targetTime = new Date(userTime).getTime();
        let countdownElement = document.getElementById("timer");

        let countdownInterval = setInterval(function () {
            let now = new Date().getTime();
            let timeLeft = targetTime - now;

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                countdownElement.innerHTML = "Time's Up! 💖";
                return;
            }

            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    });
});
