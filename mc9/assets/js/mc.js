$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});

$("#table").load("table.html", function() {
	$('#modlist').DataTable( {
		"scrollY": "65vh",
		"scrollCollapse": true,
		"paging": false,
		"info": false,
	});
});

function downButtonPressed() {
    console.log("button was pressed")
    $("downButton").animateCss('flip');
}

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