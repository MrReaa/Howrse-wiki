document.addEventListener('DOMContentLoaded', () => { // Ensure DOM is fully loaded
  fetch('topnav.html')
    .then(response => {
        if (!response.ok) { // Check if the response is successful
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('topnav-placeholder').innerHTML = data;

        // Get the current page URL
        const currentPage = window.location.pathname.split("/").pop();
        console.log('Current Page:', currentPage); // Debugging line to log the current page

        // Select all nav links
        const navLinks = document.querySelectorAll('.topnav a');

        // Loop through each link and set the active class based on the current page
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            console.log('Link Page:', linkPage); // Debugging line to log each link
            
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    })
    .catch(error => console.error('Error loading topnav:', error));
});