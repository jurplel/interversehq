function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

//start
var logo = document.getElementById('logo');
var logoText = document.getElementById('logotext');

TweenMax.set(logo, {xPercent:-50, yPercent:-50, left:"50%", top:"50%"}) 
TweenMax.set(logoText, {xPercent:-90, yPercent:-100, left:"50%", top:"50%", autoAlpha:"1"}) 

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
        ease: Expo,
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
        xPercent: -295,
    });
    TweenLite.to(logoText, 0.5, {
        ease: Power2.easeInOut,
        xPercent: -39,
        clipPath: 'inset(0% 0% 0% 0%)',
        webkitClipPath: 'inset(0% 0% 0% 0%)',
        onComplete: presentVideo
    })
}

function presentVideo() {
    document.getElementById('videobg').play()
}