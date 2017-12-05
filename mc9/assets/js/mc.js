$("#table").load("table.html", function() {
	$('#modlist').DataTable( {
		"scrollY": "65vh",
		"scrollCollapse": true,
		"paging": false,
		"info": false,
	});
});

$(".mplogo1").animateCss('zoomInDown');

document.getElementsByClassName('.mplogo1').addEventListener("click", downButtonPressed);

function downButtonPressed() {
    $("downButton").animateCss('flip');
}