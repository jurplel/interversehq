const mq = window.matchMedia( "(orientation: landscape)" );
$(document).ready(function(){
    $(window).resize(function(){
        if (mq.matches) {
            var f = '/assets/img/intv_logo_outline.svg';
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
    });
});
