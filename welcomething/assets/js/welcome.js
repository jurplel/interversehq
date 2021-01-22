const welcomes = [
    "Welcome",
    "ようこそ",
    "أهلا بك",
    "欢迎",
    "Vitáme vás",
    "Velkommen",
    "Welkom",
    "Tervetuloa",
    "Bienvenue",
    "Willkommen",
    "ברוך הבא",
    "Üdvözöljük",
    "Benvenuto",
    "환영합니다",
    "Velkommen",
    "Witamy",
    "Bem-vinda",
    "Добро пожаловать!",
    "Bienvenidos",
    "Välkommen",
    "Hoşgeldiniz",
    "ยินดีต้อนรับ",
    "Benvingut",
    "Dobrodošli",
    "Καλώς ορίσατε",
    "Selamat datang",
    "Ласкаво просимо",
    "Chào mừng",
    "स्वागत हे",
    "Bun venit",
]
let welcomeIndex = 0;

let canvas = document.getElementById("welcomecanvas");
resetSize();

let ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";

let objectsTargetLength = 12;
let objects = [];
for (let i = 0; i < objectsTargetLength; i++) {
    objects[i] = newTextObject(true, i);
}

window.addEventListener('resize', resetSize);

function resetSize()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-document.getElementById("canvasheader").offsetHeight-document.getElementById("canvasfooter").offsetHeight;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function reprovisionObject(object, active, index = 0)
{
    let depth = Math.random()
    object.depth = depth;
    if (!active)
        object.x = randomIntFromInterval(canvas.width, canvas.width+400);
    else
        object.x = randomIntFromInterval(-1000, canvas.width+400);

    object.y = 120+30*Math.floor(randomIntFromInterval(1, 24));

    object.velocity = 1.5+depth*1.5;
    object.size = 7-4*depth;
    object.brightness = (1.1-0.4*depth)*255;

    welcomeIndex++;
    if (welcomeIndex > welcomes.length-1)
        welcomeIndex = 0;
    object.textIndex = welcomeIndex;
}

function newTextObject(active, index = 0)
{ 
    let object = {};
    reprovisionObject(object, active, index);
    return object;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    objects.sort(function(firstEl, secondEl) {
        return secondEl.depth < firstEl.depth;
    });

    objects.forEach(function(object, index) {
        ctx.fillStyle = "rgb(" + object.brightness + ", " + object.brightness + ", " + object.brightness + ")";
        ctx.font = object.size + "rem 'Exo 2'";
        ctx.fillText(welcomes[object.textIndex], object.x, object.y);
        if (object.x < -1000)
            reprovisionObject(objects[index]);

        object.x -= object.velocity;
    })
    requestAnimationFrame(draw);
}
draw();