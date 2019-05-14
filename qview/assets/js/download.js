// Set all download links to latest version's download
var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/jurplel/qView/releases', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);

        document.getElementById('rpm32dl').setAttribute('href', data[0].assets[0].browser_download_url);
        document.getElementById('rpm64dl').setAttribute('href', data[0].assets[1].browser_download_url);
        document.getElementById('win32dl').setAttribute('href', data[0].assets[2].browser_download_url);
        document.getElementById('win32dlp').setAttribute('href', data[0].assets[3].browser_download_url);
        document.getElementById('win64dl').setAttribute('href', data[0].assets[4].browser_download_url);
        document.getElementById('win64dlp').setAttribute('href', data[0].assets[5].browser_download_url);
        document.getElementById('dmgdl').setAttribute('href', data[0].assets[6].browser_download_url);
        document.getElementById('targzdl').setAttribute('href', data[0].assets[7].browser_download_url);
        document.getElementById('deb64dl').setAttribute('href', data[0].assets[8].browser_download_url);
        document.getElementById('deb32dl').setAttribute('href', data[0].assets[9].browser_download_url);
    }
}

request.send();

// Determine host operating system
var os = 3;
if (navigator.platform.indexOf("Win") != -1) {
    if (navigator.userAgent.indexOf("WOW64") != -1 || 
        navigator.userAgent.indexOf("Win64") != -1 ) {
        os = 1;
    } 
    else {
        os = 0;
    }
}
else if (navigator.platform.indexOf("MacIntel") != -1) {
    os = 2;
}
else if (navigator.platform.indexOf("Linux") != -1) {
    os = 3;
}

// Define hideable zones
var winZone = document.getElementsByClassName('winzone');
var macZone = document.getElementsByClassName('maczone');
var linuxZone = document.getElementsByClassName('linuxzone');
var hiddenWindowsDownloads = document.getElementById('hiddenwindowsdl');

// Hide all hideable zones by default
hideAllZones();
var hiddenWindowsDownloadsTween = TweenLite.set(hiddenWindowsDownloads, {autoAlpha:"0"})

document.getElementById('hiddenwindowsbutton').onclick = function() {
    hiddenWindowsDownloadsTween.reversed(!hiddenWindowsDownloadsTween.reversed());
}

// "Cylinder selector" logic
var winSelect = document.getElementById('winselect');
var macSelect = document.getElementById('macselect');
var linuxSelect = document.getElementById('linuxselect');
var selects = [winSelect, macSelect, linuxSelect];

winSelect.cylPosition = winSelect.origCylPosition = -2;
macSelect.cylPosition = macSelect.origCylPosition =  -1;
linuxSelect.cylPosition = linuxSelect.origCylPosition =  0;

winSelect.zones = winZone;
macSelect.zones = macZone;
linuxSelect.zones = linuxZone;

var currentZones;

function hideAllZones() {
    for (let zone of winZone) {
        TweenLite.set(zone, {display:'none'})
    }
    for (let zone of macZone) {
        TweenLite.set(zone, {display:'none'})
    }
    for (let zone of linuxZone) {
        TweenLite.set(zone, {display:'none'})
    }
}

function showZones() {
    let zones;
    for (let select of selects) {
        if (select.cylPosition == 0) {
            zones = select.zones;
        }
    }
    if (currentZones != zones && zones)
    {
        currentZones = zones;
        hideAllZones()
        for (let zone of zones) {
            TweenLite.set(zone, {display: '', autoAlpha: 1});
            TweenLite.from(zone, 0.6, {autoAlpha: 0, ease: Power2.easeOut});
        }
    }
}

function setTransforms(duration) {
    for (let select of selects) {
        
        let newCylRot;
        let newTranslate;
        if (Math.abs(select.cylPosition) <= 2) {
            newCylRot = -20*select.cylPosition;
            if (Math.abs(select.cylPosition) == 1) {
                newTranslate = -1;
            } else {
                newTranslate = -1.5;
            }
        } else {
            newCylRot = 0;
            newTranslate = -3;
        }
        
        TweenLite.to(select, duration, {
            ease: Power1.easeOut,
            rotationX: newCylRot,
            skewX: -1*select.cylPosition,
            x: newTranslate,
            opacity: 1.0 - 0.15*Math.abs(select.cylPosition),
        });
    };
}

function movePosition(amount, duration) {
    const tl = new TimelineLite();

    for (let select of selects) {
        
        select.cylPosition += amount;

        tl.add(TweenLite.to(select, duration, {
            ease: Power1.easeOut,
            yPercent: 100*(select.cylPosition-select.origCylPosition),
        }), 0);
    };

    tl.eventCallback("onStart", function() {
        setTransforms(duration);
    })

    return tl;
}

// Set callbacks for clicking on items
for (let select of selects) {
    select.onclick = function() {
        movePosition(0-select.cylPosition, 0.2);
        showZones();
    }
}

// Easter egg to enable no scrolling limits
var noScrollLimit = false;
document.getElementById('qviewfor').onclick = function(event) {
    if (event.detail == 3) {
        alert('Hey, you just found an easter egg! Scroll limit disabled.');
        noScrollLimit = true;
    }
}

// Set callback for scrolling in zone
document.getElementById('scrollzone').onwheel = function(event) {
    if (event.deltaY > 0 && (linuxSelect.cylPosition < 2 || noScrollLimit))
    {
        movePosition(1, 0.2);
    }
    else if (event.deltaY < 0 && (winSelect.cylPosition > -2 || noScrollLimit))
    {
        movePosition(-1, 0.2);
    }
    showZones();
    return false;
};

// Intro animation
for (let select of selects) {
    select.style.visibility = 'hidden';
}

if (os <= 1) {
    movePosition(2, 0);
} else if (os == 2) {
    movePosition(1, 0);
} else {
    setTransforms(0);
}
window.onload = function() {
    TweenLite.from(document.getElementById('qviewfor'), 0.5, {
        ease: Power1.easeOut,
        autoAlpha: 0,
        delay: 0.1,
        onComplete: function() {
            for (let select of selects) {
                showZones();
                TweenLite.from(select, 1, {
                    ease: Power4.easeOut,
                    rotationX: -90,
                    autoAlpha: 0,
                })
            }
        }
    })
}
