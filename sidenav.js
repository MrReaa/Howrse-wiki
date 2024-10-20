fetch('sidenav.html')
    .then(response => response.text())
    .then(data => {
        // Insert the fetched HTML into the placeholder
        document.getElementById('sidenav-placeholder').innerHTML = data;

        // Initialize the flipbook
        $(".flipbook").turn();

        // Handle link clicks after sidenav is loaded
        $('a[data-page]').on('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            var pageNumber = $(this).data('page'); // Get the page number from data attribute
            $(".flipbook").turn('page', pageNumber); // Turn the flipbook to the specified page
        });
    })
    .catch(error => console.error('Error loading sidenav:', error));