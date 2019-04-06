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
var qviewSectionLeft = document.getElementById("qviewsectionleft");
var contact1 = document.getElementById("contact1");
var contact2 = document.getElementById("contact2");
var contact3 = document.getElementById("contact3");
contact1.isContact = true;
contact2.isContact = true;
contact3.isContact = true;

TweenLite.set(logo, {xPercent:-50, yPercent:-50, autoAlpha:"1"})
TweenLite.set(logoText, {xPercent:-90, yPercent:-50, autoAlpha:"1"})
TweenLite.set(logoText, {xPercent:-90, yPercent:-50, autoAlpha:"1"})


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
        console.log(entry);
        if (entry.target.isContact) {
            console.log(entry);
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
    });
}, config);

TweenLite.set(qviewSectionLeft, {yPercent:30, autoAlpha:0})
TweenLite.set(contact1, {rotationX:-90, scale:0})
TweenLite.set(contact2, {rotationX:-90, scale:0})
TweenLite.set(contact3, {rotationX:-90, scale:0})

observer.observe(qviewSectionLeft);
observer.observe(contact1);
observer.observe(contact2);
observer.observe(contact3);