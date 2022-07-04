 $(document).ready(function() {
    $("a").on('click', function(event) {

         if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

        $('html, body').animate({
         scrollTop: $(hash).offset().top
                 }, 900, function() {

         window.location.hash = hash;
                 });
            }
        });
    });
	

	
$(function() {
$( document ).tooltip({

	items: "[data-tooltip]",
	content: function() {

		var element = $( this );
		var text = element.text();
		var url = element.attr('data-tooltip');
		return "<img class='map' alt='" + text +
			"' src='" + url + "'>";

	}
});
});
	