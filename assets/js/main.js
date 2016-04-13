var webm1 = "https://zippy.gfycat.com/MemorableDearestHarlequinbug.webm";
var mp41 = "https://giant.gfycat.com/MemorableDearestHarlequinbug.mp4";

var webm2 = "https://giant.gfycat.com/ShamefulCompassionateBluebreastedkookaburra.webm"
var mp42 = "https://giant.gfycat.com/ShamefulCompassionateBluebreastedkookaburra.mp4"

var numberofvideos = 2

var randomvid = Math.floor((Math.random() * numberofvideos) + 1);

var mycookie = false

$("#videoSwitch").each(function() {
    mycookie = $.cookie($(this).attr('name'));
    if (mycookie && mycookie == "true") {
        $(this).prop('checked', mycookie);
    }
});
$("#videoSwitch").change(function() {
    $.cookie($(this).attr("name"), $(this).prop('checked'), {
        path: '/',
        expires: 365
    });
});


    $('#videBG').vide({
        webm: eval("webm" + randomvid),
        mp4: eval("mp4" + randomvid),
        poster: 'assets/img/intv4_defocusbackground.jpg',
    }, {
    	posterType: 'jpg'
    });

function VSwitch()
{
    if (mycookie == false)
    {
        alert("nYAH")
    }
}