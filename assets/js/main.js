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

var post4 = "https://thumbs.gfycat.com/FluidValidBluetickcoonhound-poster.jpg"
var webm4 = "https://fat.gfycat.com/FluidValidBluetickcoonhound.webm"
var mp44 = "https://fat.gfycat.com/FluidValidBluetickcoonhound.mp4"

var post5 = "https://thumbs.gfycat.com/SaneScornfulCaudata-poster.jpg"
var webm5 = "https://zippy.gfycat.com/SaneScornfulCaudata.webm"
var mp45 = "https://fat.gfycat.com/SaneScornfulCaudata.mp4"

var post6 = "https://thumbs.gfycat.com/DistinctGoldenIbex-poster.jpg"
var webm6 = "https://fat.gfycat.com/DistinctGoldenIbex.webm"
var mp46 = "https://fat.gfycat.com/DistinctGoldenIbex.mp4"

var post7 = "https://thumbs.gfycat.com/MealyEllipticalEgret-poster.jpg"
var webm7 = "https://fat.gfycat.com/MealyEllipticalEgret.webm"
var mp47 = "https://fat.gfycat.com/MealyEllipticalEgret.mp4"

var post8 = "https://thumbs.gfycat.com/CornyInsidiousKid-poster.jpg"
var webm8 = "https://fat.gfycat.com/CornyInsidiousKid.webm"
var mp48 = "https://fat.gfycat.com/CornyInsidiousKid.mp4"

var post9 = "http://i.imgur.com/iLQ5k4ih.jpg"
var webm9 = "http://i.imgur.com/iLQ5k4i.webm"
var mp49 = "http://i.imgur.com/iLQ5k4i.mp4"

var post10 = "https://thumbs.gfycat.com/TepidFatalCornsnake-poster.jpg"
var webm10 = "https://zippy.gfycat.com/TepidFatalCornsnake.webm"
var mp410 = "https://zippy.gfycat.com/TepidFatalCornsnake.mp4"

var post11 = "https://thumbs.gfycat.com/ShyUnnaturalCoelacanth-poster.jpg"
var webm11 = "https://zippy.gfycat.com/ShyUnnaturalCoelacanth.webm"
var mp411 = "https://zippy.gfycat.com/ShyUnnaturalCoelacanth.mp4"

var numberofvideos = 11

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