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
        if (menu.classList.contains("menu-open")) {
            menu.classList.remove("menu-open");
        } else {
            menu.classList.add("menu-open");
        }
    });

    // Love Letter Toggle
    document.getElementById("love-letter-button").addEventListener("click", function () {
        document.getElementById("love-letter").classList.toggle("hidden");
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
