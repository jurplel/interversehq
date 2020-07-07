function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function isVisible(e) {
    return !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length );
}

//start
var logoText = document.getElementById("logotext");
var backgroundBit = document.getElementById("backgroundbit");
var navbar = document.getElementById("navbar");
var qviewSectionLeft = document.getElementById("qviewsectionleft");

let logos = document.getElementsByClassName('logo');
TweenLite.set(logos[1], {color: "rgba(255, 0, 0)"});
TweenLite.set(logos[2], {color: "rgba(0, 255, 0)"});
TweenLite.set(logos[3], {color: "rgba(0, 0, 255)"});

TweenLite.set(logos[0], {xPercent:-50, yPercent:-52, autoAlpha:"0"});
TweenLite.set(logos[1], {xPercent:-55, yPercent:-54, autoAlpha:"0"});
TweenLite.set(logos[2], {xPercent:-50, yPercent:-52, autoAlpha:"0"});
TweenLite.set(logos[3], {xPercent:-45, yPercent:-50, autoAlpha:"0"});

TweenLite.set(logoText, {xPercent:-50, yPercent:-40, autoAlpha:"1"});

TweenLite.set(navbar, {autoAlpha:"0"});

window.onload = function() {
    presentLogo();
}

function presentLogo() {
    for (let i = 1; i < logos.length; i++) {
        TweenLite.to(logos[i], 1, {
            delay: 0.2,
            ease: Power2.easeOut,
            autoAlpha: 1,
        });
    }
    let offsetx = getRandomArbitrary(0, 50);
    let offsety = getRandomArbitrary(-50, 50);
    TweenLite.from(logos[1], 1, {
        delay: 0.2,
        ease: Power2.easeOut,
        scale: 4,
        color: "rgba(255, 0, 0)",
        xPercent: -offsetx-100,
        yPercent: -offsety-100,
    });
    TweenLite.from(logos[2], 1, {
        delay: 0.2,
        ease: Power2.easeOut,
        scale: 4,
        color: "rgba(0, 255, 0)",
    });
    TweenLite.from(logos[3], 1, {
        delay: 0.2,
        ease: Power2.easeOut,
        scale: 4,
        color: "rgba(0, 0, 255)",
        xPercent: offsetx,
        yPercent: offsety,
        onComplete: presentText0
    });
}

function presentText0() {
    TweenLite.to(logoText, 0.35, {
        delay: 0.2,
        ease: Power2.easeOut,
        backgroundPosition: "0%, 0%",
        onComplete: presentText1
    })
    // presentText1();
}

function presentText1() {
    TweenLite.set(logoText, {color: "white"})
    TweenLite.to(logoText, 0.35, {
        ease: Power2.easeOut,
        backgroundPosition: "-98%, 0%",
    })

    TweenLite.to(backgroundBit, 1.7, {
        ease: Power2.easeOut,
        autoAlpha: 1,
    });
    TweenLite.to(logos[0], 2, {
        ease: Power2.easeOut,
        autoAlpha: 1,
    });
    TweenLite.to(backgroundBit, 2, {
        ease: Power2.easeOut,
        autoAlpha: 1,
    });

    TweenLite.to(navbar, 1, {
        ease: Power1.easeOut,
        autoAlpha: 1
    });
}

// Timeline and observer bits just for the qview section currently

const config = {
    threshold: 0.3
};

const tl = new TimelineLite()

let observer = new IntersectionObserver(function(entries, self) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let overlap = '-=0.75';
            
            if (!tl.isActive()) {
                overlap = '+=0';
            }
            TweenLite.to(entry.target, 2, { 
                ease: Power4.easeOut,
                yPercent:0,
                xPercent:0,
                autoAlpha:1
            }, overlap);
            self.unobserve(entry.target);
        }
    })}, config);

TweenLite.set(qviewSectionLeft, {yPercent:10, autoAlpha:0})

observer.observe(qviewSectionLeft);