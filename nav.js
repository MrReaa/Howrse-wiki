fetch('topnav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('topnav-placeholder').innerHTML = data;

    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.topnav a');

    console.log(currentPage);

    navLinks.forEach(link => {

      const linkPage = link.getAttribute('href');
      console.log(linkPage);


      if (linkPage === currentPage) {
        link.classList.add('active');
        console.log('Yeppee');
      } else {
        link.classList.remove('active');
      }
    });
  })
  .catch(error => console.error('Error loading topnav:', error));