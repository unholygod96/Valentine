document.addEventListener("DOMContentLoaded", function () {
    function showTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });
        document.getElementById(tabId).style.display = 'block';
    }

    // Toggle menu visibility
    document.getElementById("menu-button").addEventListener("click", function() {
        let menu = document.getElementById("side-menu");
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });

    // Toggle love letter visibility
    document.getElementById("love-letter-button").addEventListener("click", function() {
        let loveLetter = document.getElementById("love-letter");
        if (loveLetter.style.display === "none" || loveLetter.style.display === "") {
            loveLetter.style.display = "block";
        } else {
            loveLetter.style.display = "none";
        }
    });
});
