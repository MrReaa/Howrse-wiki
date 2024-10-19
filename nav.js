// Load the top navigation on all pages
fetch('topnav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('topnav-placeholder').innerHTML = data;

    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop();

    // Select all nav links
    const navLinks = document.querySelectorAll('.topnav a');

    // Loop through each link and set the active class based on the current page
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  })
  .catch(error => console.error('Error loading topnav:', error));