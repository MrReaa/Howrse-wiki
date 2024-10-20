$(".flipbook").turn({
    when: {
        turned: function(event, page, view) {
        // Force re-enable links or reset their event listeners after turning a page
        $('a[data-page]').off('click').on('click', function(event) {
            event.preventDefault();
            var pageNumber = $(this).data('page');
            $(".flipbook").turn('page', pageNumber);
        });
        }
    }
});

