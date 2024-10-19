fetch('topnav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('topnav-placeholder').innerHTML = data;

    console.log('1');

    const currentPage = window.location.pathname.split("/").pop();

    console.log('2');


    const navLinks = document.querySelectorAll('.topnav a');

    console.log('3');


    navLinks.forEach(link => {

      console.log('4');


      const linkPage = link.getAttribute('href');

      console.log('4.1');


      if (linkPage === currentPage) {

        console.log('5');


        link.classList.add('active');
      } else {

        console.log('6');


        link.classList.remove('active');
      }
    });
  })
  .catch(error => console.error('Error loading topnav:', error));