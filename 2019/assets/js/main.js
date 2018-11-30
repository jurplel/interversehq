function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function isVisible(e) {
    return !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length );
}

//start
var logo = document.getElementById('logo');
var logoText = document.getElementById('logotext');
var buttons = document.getElementById('buttons');
var projectsInfo = document.getElementById('projectsinfo');

var isProjectsVisible;
var isSocialVisible;

TweenLite.set(logo, {xPercent:-50, yPercent:-50})
TweenLite.set(logoText, {xPercent:-90, yPercent:-50, autoAlpha:"1"}) 

window.onload = function() {
    presentLogo();
}

function presentLogo() {
    var newX = getRandomArbitrary(logo.x/4, logo.x/8);
    var newY = getRandomArbitrary(logo.y/4, logo.y/8);

    if (Math.random() > 0.5)
        newX = -newX;
    if (Math.random() > 0.5)
        newY = -newY;

    TweenLite.from(logo, 1.5, {
        ease: Power1.easeOut,
        x: newX,
        y: newY,
        rotationY: newX > 0 ? 155 : -155,
        rotationZ: newY > 0 ? 15 : -15,
        autoAlpha: 0,
        onComplete: presentText
    });
}

function presentText() {
    TweenLite.to(logo, 0.5, {
        ease: Power2.easeInOut,
        xPercent: -290,
    });
    TweenLite.to(logoText, 0.5, {
        ease: Power2.easeInOut,
        xPercent: -36,
        clipPath: 'inset(0% 0% 0% 0%)',
        webkitClipPath: 'inset(0% 0% 0% 0%)',
        onComplete: presentAfter
    })
}

function presentAfter() {
    TweenLite.to(buttons, 0.5, {
        ease: Bounce.easeIn,
        autoAlpha: 1,
    });
}

function makeRoomForInfo() {
    if (isProjectsVisible || isSocialVisible)
    {
        TweenLite.to([logo, logoText, buttons], 0.6, {
            ease: Power1.easeInOut,
            top: "45%"
        })
    }
    else
    {
        TweenLite.to([logo, logoText, buttons], 0.6, {
            ease: Power1.easeInOut,
            top: "20%"
        })
    }
}

function projectsClicked() {
    makeRoomForInfo();
    toggleProjectsInfo();
}

function socialClicked() {
    
}

function toggleProjectsInfo() {
    if (isProjectsVisible)
    {
        TweenLite.to(projectsInfo, 0.2, {
            autoAlpha: 0,
        });
        isProjectsVisible = false;
    }
    else
    {
        TweenLite.to(projectsInfo, 0.5, {
            ease: Bounce.easeIn,
            delay: 0.15,
            autoAlpha: 1,
        });
        isProjectsVisible = true;
    }
}

function toggleSocialInfo() {

}