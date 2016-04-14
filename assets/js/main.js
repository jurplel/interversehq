$(document).foundation()

var post1 = "https://thumbs.gfycat.com/MemorableDearestHarlequinbug-poster.jpg"
var webm1 = "https://zippy.gfycat.com/MemorableDearestHarlequinbug.webm";
var mp41 = "https://giant.gfycat.com/MemorableDearestHarlequinbug.mp4";

var post2 = "https://thumbs.gfycat.com/ShamefulCompassionateBluebreastedkookaburra-poster.jpg"
var webm2 = "https://giant.gfycat.com/ShamefulCompassionateBluebreastedkookaburra.webm"
var mp42 = "https://giant.gfycat.com/ShamefulCompassionateBluebreastedkookaburra.mp4"

var post3 = "https://thumbs.gfycat.com/CoordinatedForcefulHoneycreeper-poster.jpg"
var webm3 = "https://fat.gfycat.com/CoordinatedForcefulHoneycreeper.webm"
var mp43 = "https://fat.gfycat.com/CoordinatedForcefulHoneycreeper.mp4"

var numberofvideos = 3

var randomvid = Math.floor((Math.random() * numberofvideos) + 1);


$('#videBG').vide({
    webm: eval("webm" + randomvid),
    mp4: eval("mp4" + randomvid),
    poster: eval("post" + randomvid),
}, {
	posterType: 'jpg'
});

var IconIsPlay

$(function() {
  var video = $('#videBG').data('vide').getVideoObject();

  $('#VControl').on('click', function() {
    video.paused ? video.play() : video.pause();
    if (IconIsPlay)
    {
        document.getElementById("PauseIcon").setAttribute("class", "fa fa-pause");
        IconIsPlay = false
    }
    else
    {
        document.getElementById("PauseIcon").setAttribute("class", "fa fa-play");
        IconIsPlay = true
    }

  });

});