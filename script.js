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

    showTab('rose-day'); // Default tab

    // Toggle menu
    document.getElementById("menu-button").addEventListener("click", function () {
        document.getElementById("side-menu").classList.toggle("menu-open");
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
                countdownElement.innerHTML = "🎉 It's Valentine's Day! 💖";
                return;
            }

            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    });

    // Fun Effects for Each Valentine's Day
    function showerRoses() {
        alert("🌹 Roses are falling for you! 🌹");
    }

    function launchFireworks() {
        alert("🎆 A sparkling proposal just for you! 💍");
    }

    function rainChocolates() {
        alert("🍫 Sweet chocolates raining down! 🍫");
    }

    function dropTeddies() {
        alert("🧸 Teddy hugs are coming your way! 🤗");
    }

    function heartsRain() {
        alert("❤️ Love is in the air! ❤️");
    }
});
