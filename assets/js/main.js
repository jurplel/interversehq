var webm1 = "https://zippy.gfycat.com/MemorableDearestHarlequinbug.webm";
var mp41 = "https://giant.gfycat.com/MemorableDearestHarlequinbug.mp4";

var webm2 = "https://giant.gfycat.com/ShamefulCompassionateBluebreastedkookaburra.webm"
var mp42 = "https://giant.gfycat.com/ShamefulCompassionateBluebreastedkookaburra.mp4"

var numberofvideos = 2

var randomvid = Math.floor((Math.random() * numberofvideos) + 1);
var checked = false

if (checked == false)
{
    $('#videBG').vide({
        webm: eval("webm" + randomvid),
        mp4: eval("mp4" + randomvid),
        poster: 'assets/img/intv4_defocusbackground.jpg',
    }, {
    	posterType: 'jpg'
    });
}

$("#videoSwitch").each(function() {
    var mycookie = $.cookie($(this).attr('name'));
    if (mycookie && mycookie == "true") {
        $(this).prop('checked', mycookie);
    }
});

function VSwitch()
{
    $("#videoSwitch").change(function() {
        $.cookie($(this).attr("name"), $(this).prop('checked'), {
            path: '/',
            expires: 365
        });
    });
}