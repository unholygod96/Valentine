document.addEventListener("DOMContentLoaded", function () {
    function showTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });

        let activeTab = document.getElementById(tabId);
        if (activeTab) {
            activeTab.style.display = 'block';
        }
    }

    // Default tab
    showTab('rose-day');

    // Navigation Functionality
    document.getElementById("menu-button").addEventListener("click", function () {
        let menu = document.getElementById("side-menu");
        menu.classList.toggle("menu-open");
    });

    // Love Letter Toggle with Confetti Effect
    document.getElementById("love-letter-button").addEventListener("click", function () {
        let loveLetter = document.getElementById("love-letter");
        loveLetter.classList.toggle("hidden");
        triggerConfetti(); // Fire confetti effect!
    });

    // Countdown Timer
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
                countdownElement.innerHTML = "💖 Time's Up! 💖";
                return;
            }

            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    });

    // 🎶 Background Music Selection 🎶
    let musicTracks = ["song1.mp3", "song2.mp3", "song3.mp3"];
    let music = document.getElementById("background-music");
    let musicToggleButton = document.getElementById("toggle-music");

    musicToggleButton.addEventListener("click", function () {
        if (music.paused) {
            let randomSong = musicTracks[Math.floor(Math.random() * musicTracks.length)];
            music.src = randomSong;
            music.play();
            this.textContent = "🔇 Stop Music";
        } else {
            music.pause();
            this.textContent = "🎵 Play Music";
        }
    });

    // ❤️ Floating Hearts Animation ❤️
    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    setInterval(createHeart, 300);

    // ✨ Random Love Notes Generator ✨
    const loveNotes = [
        "You are my sunshine on a rainy day ☀️❤️",
        "Every moment with you is magical ✨",
        "I love you more than words can express 💖",
        "You make my world brighter and happier 🌍💓",
        "With you, every day feels like Valentine's Day 🥰",
        "Your love is the best gift I have ever received 🎁💕"
    ];

    document.getElementById("love-letter-button").addEventListener("click", function () {
        let randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
        document.getElementById("love-letter").innerHTML = `<p>${randomNote}</p>`;
    });

    // 🎉 Confetti Effect Function 🎉
    function triggerConfetti() {
        for (let i = 0; i < 30; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }
    }
});
