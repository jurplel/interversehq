$('#filledlogo').fadeIn( 750 );
$('.navbar').addClass('animated fadeIn');

$(".linuxlabel").hide();
$(".dlgrp").hide();
$("#ty").hide();

var os = 3;
if (navigator.platform.indexOf("Win") != -1)
{
    if (navigator.userAgent.indexOf("WOW64") != -1 || 
        navigator.userAgent.indexOf("Win64") != -1 ){
        $(".dlbtn").html("Download for Windows");
        os=0;
    } 
    else {
        $(".dlbtn").html("Download for Windows");
        os=1;
    }
}
else if (navigator.platform.indexOf("MacIntel") != -1)
{
    $(".dlbtn").html("Download for macOS");
    os=2;
}
else if (navigator.platform.indexOf("Linux") != -1)
{
    $(".dlbtn").html("Download for Linux");
    $(".linuxlabel").show();
    os=3;
}

$(".dlbtn").click(function() {
    $.getJSON("https://api.github.com/repos/jeep70/qView/releases", function(data) {
        if (os == 0)
        {
            location.href=data[0].assets[0].browser_download_url;
        }
        else if (os == 1)
        {
            location.href=data[0].assets[1].browser_download_url;
        }
        else if (os == 2)
        {
            location.href=data[0].assets[2].browser_download_url;
        }
        else
        {
            location.href=data[0].tarball_url;
        }
        $("#ty").show().addClass('animated zoomIn');
    });
});

$(".dlgrp1").click(function() {
    $.getJSON("https://api.github.com/repos/jeep70/qView/releases", function(data) {
        location.href=data[0].assets[0].browser_download_url;
    });
});

$(".dlgrp2").click(function() {
    $.getJSON("https://api.github.com/repos/jeep70/qView/releases", function(data) {
        location.href=data[0].assets[1].browser_download_url;
    });
});

$(".dlgrp3").click(function() {
    $.getJSON("https://api.github.com/repos/jeep70/qView/releases", function(data) {
        location.href=data[0].assets[2].browser_download_url;
    });
});

$(".dlgrp4").click(function() {
    $(".linuxlabel").show();
    $.getJSON("https://api.github.com/repos/jeep70/qView/releases", function(data) {
        location.href=data[0].tarball_url;
    });
});

$("#dllabel").click(function() {
    $(".dlbtn").toggle();
    $(".dlgrp").toggle();
});