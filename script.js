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

    // Toggle menu visibility
    document.getElementById("menu-button").addEventListener("click", function() {
        let menu = document.getElementById("side-menu");
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
});
