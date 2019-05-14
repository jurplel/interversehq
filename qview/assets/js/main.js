// Fade in screenshot at top of page
var screenshotOne = document.getElementById('screenshot1');
window.onload = function() {
    TweenLite.from(screenshotOne, 1, {
        autoAlpha: 0,
        yPercent: 10
    })
}