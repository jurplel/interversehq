function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function isVisible(e) {
    return !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length );
}

//start
var logo = document.getElementById("logo");
var logoText = document.getElementById("logotext");
var buttons = document.getElementById("buttons");
var projectsInfo = document.getElementById("projectsinfo");
var socialInfo = document.getElementById("socialinfo");
var projectsButton = document.getElementById("projectsbutton");
var socialButton = document.getElementById("socialbutton");

var currentIndex = -1;

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
        clipPath: "inset(0% 0% 0% 0%)",
        webkitClipPath: "inset(0% 0% 0% 0%)",
        onComplete: presentAfter
    })
}

function presentAfter() {
    TweenLite.to(buttons, 0.5, {
        ease: Bounce.easeIn,
        autoAlpha: 1,
    });
}

function setLogoPosition(setRaised) {
    if (setRaised)
    {
        TweenLite.to([logo, logoText, buttons], 0.6, {
            ease: Power2.easeInOut,
            top: "20%"
        })
    }
    else
    {
        TweenLite.to([logo, logoText, buttons], 0.6, {
            ease: Power2.easeInOut,
            top: "45%"
        })
    }
}

function setProjectsInfo(setVisible) {
    if (setVisible) {
        TweenLite.to(projectsInfo, 0.6, {
            ease: Power2.easeInOut,
            left: "0%"
        });
        currentIndex = 0;
    }
    else {
        TweenLite.to(projectsInfo, 0.6, {
            ease: Power2.easeInOut,
            left: "-100%"
        });
    }
}

function setSocialInfo(setVisible) {
    if (setVisible) {
        TweenLite.to(socialInfo, 0.6, {
            ease: Power2.easeInOut,
            left: "0%"
        });
        currentIndex = 1;
    }
    else {
        TweenLite.to(socialInfo, 0.6, {
            ease: Power2.easeInOut,
            left: "100%"
        });
    }
}

function switchTab(index) {
    if (currentIndex >= 0)
    {
        socialButton.classList.remove("is-active");
        projectsButton.classList.remove("is-active");
        setSocialInfo(false);
        setProjectsInfo(false);
        setLogoPosition(false);
    }
    if (currentIndex != index)
    {
        if (index == 0) {
            projectsButton.classList.add("is-active");
            setSocialInfo(false);
            setProjectsInfo(true);
            setLogoPosition(true);
        }
        else if (index == 1) {
            socialButton.classList.add("is-active");
            setSocialInfo(true);
            setProjectsInfo(false);
            setLogoPosition(true);
        }
    }
    else
        currentIndex = -1;
}