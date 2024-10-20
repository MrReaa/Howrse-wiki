$(".flipbook").turn({
    when: {
        turned: function(event, page, view) {
        $('a[data-page]').off('click').on('click', function(event) {
            event.preventDefault();
            var pageNumber = $(this).data('page');
            $(".flipbook").turn('page', pageNumber);
        });
        }
    }
});

