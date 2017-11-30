const mq = window.matchMedia("(orientation: landscape)");
if (mq.matches) {
    var f = '/assets/img/intv_logo_outline.svg'
} else {
    var f = '/assets/img/intv_compact_outline.svg'
}
var i = {
    file: f,
    type: "async",
    duration: 150,
    pathTimingFunction: Vivus.EASE_OUT,
    animTimingFunction: Vivus.EASE,
};

$('#filledlogo, #button1, #button2, #button3').hide()

var myVivus = new Vivus("logo",i,function () {
    $('#filledlogo').fadeIn( 750 );
    $('#button1, #button2, #button3').show(0).addClass('animated fadeInUp');
    myVivus.delay(800).stop().reset()
});