function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function isVisible(e) {
    return !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length );
}

//start
// var logo = document.getElementById("logo");
var logoText = document.getElementById("logotext");
// var logoBg = document.getElementById("logobg");
var backgroundBit = document.getElementById("backgroundbit");
var canvas = document.getElementById("canvas");
var navbar = document.getElementById("navbar");
var qviewSectionLeft = document.getElementById("qviewsectionleft");
var contact1 = document.getElementById("contact1");
var contact2 = document.getElementById("contact2");
var contact3 = document.getElementById("contact3");
contact1.isContact = true;
contact2.isContact = true;
contact3.isContact = true;

let logos = document.getElementsByClassName('logo');
TweenLite.set(logos[0], {color: "rgba(255, 0, 0)"});
TweenLite.set(logos[1], {color: "rgba(0, 255, 0)"});
TweenLite.set(logos[2], {color: "rgba(0, 0, 255)"});

TweenLite.set(logos[0], {xPercent:-55, yPercent:-52, autoAlpha:"0"});
TweenLite.set(logos[1], {xPercent:-50, yPercent:-50, autoAlpha:"0"});
TweenLite.set(logos[2], {xPercent:-45, yPercent:-48, autoAlpha:"0"});

TweenLite.set(logoText, {xPercent:-50, yPercent:-50, autoAlpha:"1"});

TweenLite.set(navbar, {autoAlpha:"0"});

// TweenLite.set(canvas, {autoAlpha:"0"});

window.onload = function() {
    presentLogo();
}

function presentLogo() {
    for (let i = 0; i < logos.length; i++) {
        TweenLite.to(logos[i], 1, {
            delay: 0.2,
            ease: Power2.easeOut,
            autoAlpha: 1,
        });
    }
    let offsetx = getRandomArbitrary(0, 50);
    let offsety = getRandomArbitrary(-50, 50);
    TweenLite.from(logos[0], 1, {
        delay: 0.2,
        ease: Power2.easeOut,
        scale: 4,
        color: "rgba(255, 0, 0)",
        xPercent: -offsetx-100,
        yPercent: -offsety-100,
    });
    TweenLite.from(logos[1], 1, {
        delay: 0.2,
        ease: Power2.easeOut,
        scale: 4,
        color: "rgba(0, 255, 0)",
    });
    TweenLite.from(logos[2], 1, {
        delay: 0.2,
        ease: Power2.easeOut,
        scale: 4,
        color: "rgba(0, 0, 255)",
        xPercent: offsetx,
        yPercent: offsety,
        onComplete: presentText
    });
}

function presentText() {
    TweenLite.to(logoText, 0.35, {
        delay: 0.2,
        ease: Power2.easeOut,
        backgroundPosition: "0%, 0%",
        onComplete: presentText1
    })
}

function presentText1() {
    // for (let i = 0; i < logos.length; i++) {
    //     TweenLite.set(logos[i], {autoAlpha: "0"})
    // }

    TweenLite.set(logoText, {color: "white"})
    TweenLite.to(logoText, 0.35, {
        ease: Power2.easeOut,
        backgroundPosition: "-98%, 0%",
    })

    var roughEase = RoughEase.ease.config({ template:
        Power1. easeIn,
        strength:
        1,
        points:
        20,
        taper:
        "none",
        randomize: true,
        clamp: true
        })

    TweenLite.to(canvas, 1, {
        ease: roughEase,
        autoAlpha: 1
    });

    TweenLite.to(navbar, 1, {
        ease: roughEase,
        autoAlpha: 1
    });
}

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
            if (entry.target.isContact) {
                tl.to(entry.target, 1, { 
                    ease: Back.easeOut,
                    scale:1,
                    rotationX:0
                }, overlap);
            }
            else {
                TweenLite.to(entry.target, 2, { 
                    ease: Power4.easeOut,
                    yPercent:0,
                    xPercent:0,
                    autoAlpha:1
                }, overlap);
            }
            self.unobserve(entry.target);
        }
    })}, config);

TweenLite.set(qviewSectionLeft, {yPercent:30, autoAlpha:0})
TweenLite.set(contact1, {rotationX:-90, scale:0})
TweenLite.set(contact2, {rotationX:-90, scale:0})
TweenLite.set(contact3, {rotationX:-90, scale:0})

observer.observe(qviewSectionLeft);
observer.observe(contact1);
observer.observe(contact2);
observer.observe(contact3);