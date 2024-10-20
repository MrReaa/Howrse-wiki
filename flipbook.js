$(".flipbook").turn();

// Handle link clicks
$('a[data-page]').on('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    var pageNumber = $(this).data('page'); // Get the page number from data attribute
    $(".flipbook").turn('page', pageNumber); // Turn the flipbook to the specified page
});
