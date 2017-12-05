$("#table").load("table.html", function() {
	$('#modlist').DataTable( {
		"scrollY": "65vh",
		"scrollCollapse": true,
		"paging": false,
		"info": false,
	});
});

$(document).ready(function() {
	$('#modlist').DataTable( {
		"scrollY": "65vh",
		"scrollCollapse": true,
		"paging": false,
		"info": false,
    });
    $(".mplogo1").animateCss('zoomInDown');
});

$("downButton").addEventListener("click", downButtonPressed);

function downButtonPressed() {
    $("downButton").animateCss('flip');
}