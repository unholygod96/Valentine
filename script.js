// Show the "Show Days" dropdown
document.getElementById('show-menu').addEventListener('click', function() {
    var tabsContainer = document.getElementById('tabs-container');
    tabsContainer.style.display = (tabsContainer.style.display === 'none' || tabsContainer.style.display === '') ? 'block' : 'none';
});

// Show selected tab content
var tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var tabId = this.getAttribute('data-tab');
        var tabs = document.querySelectorAll('.tab-content');
        tabs.forEach(function(tab) {
            tab.style.display = 'none';
        });
        document.getElementById(tabId).style.display = 'block';
    });
});

// Show the love letter
document.getElementById('hidden-button').addEventListener('click', function() {
    document.getElementById('love-letter').style.display = 'block';
});

// Close the love letter
document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('love-letter').style.display = 'none';
});
