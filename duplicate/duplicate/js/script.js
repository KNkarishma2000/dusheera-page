// Function to show the selected tab
function showTab(tabId, clickedButton) {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');

    // Remove the "active" class from all tab buttons
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(tabId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Add the "active" class to the clicked tab button
    clickedButton.classList.add('active');
}

// Display the "Strotam" section by default when the page loads
document.addEventListener('DOMContentLoaded', function () {
    showTab('strotam-section', document.getElementById('strotam-tab'));
});
