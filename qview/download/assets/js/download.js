var itempositions = [0, 1, 2];

var arrayOfLis = $('.cylinder').find('li');

var fontSize = parseInt($('html').css('font-size'));

var scrollLevel = 0;


var os = 3;
if (navigator.platform.indexOf("Win") != -1)
{
    if (navigator.userAgent.indexOf("WOW64") != -1 || 
        navigator.userAgent.indexOf("Win64") != -1 ){
        os=1;
    } 
    else {
        os=0;
    }
}
else if (navigator.platform.indexOf("MacIntel") != -1)
{
    os=2;
}
else if (navigator.platform.indexOf("Linux") != -1)
{
    os=3;
}

$('#winzone').hide();
$('#maczone').hide();
$('#linuxzone').hide();
$('#ty').hide();

$('document').ready(function() {
    if (os < 2)
    {
        moveDown();
    }
    if (os < 3)
    {
        moveDown();
    }

    recalculateRotations();
})

$.getJSON("https://api.github.com/repos/jeep70/qView/releases", function(data) {
        $('#win32dl').attr('href',data[0].assets[0].browser_download_url);
        $('#win64dl').attr('href',data[0].assets[1].browser_download_url);
        $('#dmgdl').attr('href',data[0].assets[2].browser_download_url);
        $('#targzdl').attr('href',data[0].assets[3].browser_download_url);
});

$('#winselect').click(function() {
    moveDown();
    moveDown();
})

$('#macselect').click(function() {
    moveUp();
    moveUp();
    moveDown();
})

$('#linuxselect').click(function() {
    moveUp();
    moveUp();
})

$('.dlbtn').click(function() {
    $('#ty').fadeIn();
})

$('.firstsection').mousewheel(function(event) {
    if (event.deltaY > 0)
    {
        moveUp();
    }
    else if (event.deltaY < 0)
    {
        moveDown();
    }
});


function moveUp() {
    if (scrollLevel == 0)
    {
        return;
    }
    else 
    {
        scrollLevel--;
        var nextTranslation = 2.5*scrollLevel
        $('.cylinder').css('transform', 'translateY(' + nextTranslation + 'rem)');
    }

    arrayOfLis.each(function(i) {
        itempositions[i]--;
    })

    recalculateRotations();
}

function moveDown() {

    if (scrollLevel == 0)
    {
        $('.cylinder').css('transform', 'translateY(2.5rem)');
        scrollLevel++;
    }
    else 
    {
        if (scrollLevel == 2)
        {
            return;
        }
        scrollLevel++;
        var nextTranslation = 2.5*scrollLevel
        $('.cylinder').css('transform', 'translateY(' + nextTranslation + 'rem)');
    }

    arrayOfLis.each(function(i) {
        itempositions[i]++;
    })

    recalculateRotations();
}

function recalculateRotations() {
    arrayOfLis.each(function(i) {
        arrayOfLis.css('transform', function(i) {
            if (itempositions[i] == 0)
            {
                return "rotateX(50deg) skewX(4deg) translateX(-6px)";
            }
            else if (itempositions[i] == 1)
            {
                return "rotateX(30deg) skewX(1deg) translateX(-2px)";
            }
            else if (itempositions[i] == 2)
            {
                return "";
            }
            else if (itempositions[i] == 3)
            {
                return "rotateX(-30deg) skewX(-1deg) translateX(-2px)";
            }
            else if (itempositions[i] == 4)
            {
                return "rotateX(-50deg) skewX(-4deg) translateX(-6px)";
            }
        })
        arrayOfLis.css('opacity', function(i) {
            if (itempositions[i] == 0)
            {
                return "0.65";
            }
            else if (itempositions[i] == 1)
            {
                return "0.8";
            }
            else if (itempositions[i] == 2)
            {
                return "";
            }
            else if (itempositions[i] == 3)
            {
                return "0.8";
            }
            else if (itempositions[i] == 4)
            {
                return "0.65";
            }
        })
        arrayOfLis.addClass('transition');
    })
    recalculateLinks()
}

function recalculateLinks() {
    if (scrollLevel == 0)
    {
        $('#winzone').hide();
        $('#maczone').hide();
        $('#linuxzone').show();
    }
    else if (scrollLevel == 1)
    {
        $('#winzone').hide();
        $('#maczone').show();
        $('#linuxzone').hide()
    }
    else
    {
        $('#winzone').show();
        $('#maczone').hide();
        $('#linuxzone').hide();
    }
}