fetch('topnav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('topnav-placeholder').innerHTML = data;

    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.topnav a');

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