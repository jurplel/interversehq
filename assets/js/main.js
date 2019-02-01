function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function isVisible(e) {
    return !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length );
}

//start
var logo = document.getElementById("logo");
var logoText = document.getElementById("logotext");
var backgroundBit = document.getElementById("backgroundbit");
var qview = document.getElementById("qview");


TweenLite.set(logo, {xPercent:-50, yPercent:-50, autoAlpha:"1"})
TweenLite.set(logoText, {xPercent:-90, yPercent:-50, autoAlpha:"1"})
TweenLite.set(qview, {rotationX:90})

window.onload = function() {
    presentLogo();
}

function presentLogo() {

    TweenLite.from(logo, 1, {
        delay: 0.2,
        ease: Power2.easeOut,
        scale: 4,
        rotationX: 90,
        rotationZ: getRandomArbitrary(-120, 120),
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
    })
    TweenLite.to(logoText, 0.48, {
        ease: Power2.easeInOut,
        clipPath: "inset(0% 0% 0% 0%)",
        webkitClipPath: "inset(0% 0% 0% 0%)",
    })

    TweenLite.to(backgroundBit, 1, {
        ease: Power1.easeInOut,
        autoAlpha: 1,
    });
}

const config = {
    threshold: 1
};

const tl = new TimelineLite()

let observer = new IntersectionObserver(function(entries, self) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        let overlap = '-=0.3';
        
        if (!tl.isActive()) {
            overlap = '+=0';
        }
        
        tl.to(entry.target, 0.6, { 
            ease: Back.easeOut,
            rotationX:0
         }, overlap);
        self.unobserve(entry.target);
        }
    });
}, config);

observer.observe(qview);