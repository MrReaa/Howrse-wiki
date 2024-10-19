fetch('topnav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('topnav-placeholder').innerHTML = data;

    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.topnav a');

    const effectiveCurrentPage = currentPage === '' ? 'index.html' : currentPage;

    navLinks.forEach(link => {

      const linkPage = link.getAttribute('href');


      if (linkPage === effectiveCurrentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  })
  .catch(error => console.error('Error loading topnav:', error));