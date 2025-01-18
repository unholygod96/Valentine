document.addEventListener("DOMContentLoaded", function () {
    function showTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });
        document.getElementById(tabId).style.display = 'block';
    }

    document.getElementById("love-letter-button").addEventListener("click", function() {
        document.getElementById("love-letter").classList.toggle("hidden");
    });

    // Countdown Timer
    let countdownDate = localStorage.getItem("countdownDate") || "Feb 14, 2025 00:00:00";
    function startCountdown(targetDate) {
        let interval = setInterval(() => {
            let now = new Date().getTime();
            let distance = new Date(targetDate).getTime() - now;
            if (distance < 0) {
                clearInterval(interval);
                document.getElementById("timer").innerHTML = "Time's up!";
                return;
            }
            document.getElementById("timer").innerHTML = `${Math.floor(distance / (1000 * 60 * 60 * 24))}d `;
        }, 1000);
    }
    startCountdown(countdownDate);
});
