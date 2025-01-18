document.addEventListener("DOMContentLoaded", function () {
    let countdownDate = localStorage.getItem("countdownDate") || "Feb 14, 2025 00:00:00";
    let countdownTimer;

    function startCountdown(targetDate) {
        clearInterval(countdownTimer);
        localStorage.setItem("countdownDate", targetDate);
        countdownTimer = setInterval(() => {
            let now = new Date().getTime();
            let distance = new Date(targetDate).getTime() - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            if (distance < 0) {
                clearInterval(countdownTimer);
                document.getElementById("timer").innerHTML = "Time's up!";
            }
        }, 1000);
    }
    startCountdown(countdownDate);

    document.getElementById("set-countdown").addEventListener("click", function () {
        let newDate = document.getElementById("countdown-input").value;
        if (newDate) {
            startCountdown(newDate);
        }
    });

    function showTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });
        document.getElementById(tabId).style.display = 'block';
    }

    document.getElementById("love-letter-button").addEventListener("click", function() {
        document.getElementById("love-letter").classList.toggle("hidden");
    });
});
