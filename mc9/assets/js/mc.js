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

$(".mplogo1").animateCss('zoomInDown');

document.getElementsByClassName('.mplogo1').addEventListener("click", downButtonPressed);

function downButtonPressed() {
    $("downButton").animateCss('flip');
}

var toggle = false;
$('#hiddenText').hide();
$('#doSmth').click(function() {
    if(toggle===false) {
        $('#hiddenText').show();
        $('#hiddenText').addClass('animated flipInX');
        toggle = true;
    }
    else {
        $('#hiddenText').hide();
        toggle = false;
    }
});