//starfield stuff below, not written by me but from here: http://jsfiddle.net/4Lanc/ and modified by me

// get dimensions of window and resize the canvas to fit
var width = window.innerWidth,
    height = window.innerHeight,
    mousex = width / 2,
    mousey = height / 2;

var canvas = document.getElementById("canvas");
canvas.width = width;
canvas.height = height;

// get 2d graphics context and set global alpha
var ctx = canvas.getContext("2d");
ctx.globalAlpha = 1;

// setup aliases
var random = Math.random,
    sin = Math.sin,
    floor = Math.floor;

// constants and storage for objects that represent star positions
var warpZ = 50,
    units = 200,
    stars = [],
    cycle = 0,
    Z = 0.1,
    isDown = false;

// addEventListener helper
canvas.on = function(name, fn){
    name.replace(/\w+/g, function(n){
        this.addEventListener(n, fn, false);
    });
};


// mouse events

canvas.on("mousemove", function(e){
    if(e.shiftKey && e.buttons){
        mousex = e.clientX;
        mousey = e.clientY;
    }
});

// wheel
function wheel(e) {
    if(e.shiftKey){
        var delta = e.detail ? (-e.detail / 3) : (e.wheelDelta / 120);
        var doff = (delta / 25);
        if (delta > 0 && Z + doff <= 0.5 || delta < 0 && Z + doff >= 0.01) {
            Z += (delta / 25);
        }
    }
}
canvas.on("mousewheel DOMMouseScroll", wheel);


// function to reset a star object
function resetStar(star, start = false) {
    star.x = (random() * width - (width * 0.5)) * warpZ;
    star.y = (random() * height - (height * 0.5)) * warpZ;
    if (start)
        star.z = random() * warpZ;
    else
        star.z = warpZ;
    star.px = 0;
    star.py = 0;
}

window.addEventListener('resize', function() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    mousex = width / 2;
    mousey = height / 2;
});

// initial star setup
for (var i = 0, n; i < units; i++) {
    n = {};
    resetStar(n, true);
    stars.push(n);
}

// star rendering anim function
(function loop() {
    // clear background
    ctx.clearRect(0, 0, width, height);

    // mouse position to head towards
    var cx = (mousex - width / 2) + (width / 2),
        cy = (mousey - height / 2) + (height / 2);

    // update all stars
    var sat = floor(Z * units); // Z range 0.01 -> 0.5
    if (sat > 100) sat = 100;

    for (var i = 0; i < units; i++) {
        var star = stars[i], // the star
            xx = star.x / star.z, // star position
            yy = star.y / star.z,
            e = (1.0 / star.z + 1) * 2; // size i.e. z
        if (star.px) {
            ctx.strokeStyle = "rgba(255, 255, 255, " + (star.z*-1+warpZ) + ")";
            ctx.lineWidth = e;
            ctx.beginPath();
            ctx.moveTo(xx + cx, yy + cy);
            ctx.lineTo(star.px + cx, star.py + cy);
            ctx.stroke();
        }

        // update star position values with new settings
        star.px = xx;
        star.py = yy;
        star.z -= Z;

        // reset when star is out of the view field
        if (star.z < Z || star.px > width || star.py > height) {
            resetStar(star);
        }
    }
    


    // colour cycle sinewave rotation
    cycle += 0.1;

    requestAnimationFrame(loop);
}());