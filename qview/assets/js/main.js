// Fade in screenshot at top of page
var screenshotOne = document.getElementById('screenshot1');
TweenLite.set(screenshotOne, {
    autoAlpha: 0,
})
document.addEventListener('DOMContentLoaded', function() {
    TweenLite.to(screenshotOne, 1, {
        autoAlpha: 1
    })
    TweenLite.from(screenshotOne, 1, {
        yPercent: 10
    })
})