$('.navbar').addClass('animated fadeInDown');

$("#table").load("table.html", function() {
	$('#modlist').DataTable( {
        "scrollY": "65vh",
		"paging": false,
        "info": false,
        "columns": [
            null,
            null,
            null,
            null,
            { "width": "40px" },
            null
        ]
    });
});

var toggle = false;
$('#hiddenText').hide();
$('#doSmth').click(function() {
    if(toggle===false) {
        $('#hiddenText').show();
        toggle = true;
    }
    else {
        $('#hiddenText').hide();
        toggle = false;
    }
});