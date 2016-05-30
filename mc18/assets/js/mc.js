$(document).ready(function() {
	$('#modlist').DataTable( {
		"scrollY": "65vh",
		"scrollCollapse": true,
		"paging": false,
		"info": false,
	} );
} );

$('.carousel').carousel({
	interval: 5000,
	pause: "false"
});
$("#update").load("update.html");