$('#filledlogo').hide();
$('.nav-item').css("visibility", "hidden");
$('.navbar').css("visibility", "hidden");
$('.navbar-brand').css("visibility", "hidden")

function Entrance() {
    $('#filledlogo').fadeIn( 750 );
    $('.navbar').css("visibility", "visible").addClass('animated fadeInDown');
    $('.nav-item').css("visibility", "visible").addClass('animated fadeInDown');
    $('.navbar-brand').css("visibility", "visible").addClass('animated fadeInDown');
}

$(document).ready(function() {
    if (Cookies.get('visited') == 'yes') {

        Entrance()
        
    } else {

        Cookies.set('visited', 'yes', { path: '/' });
        
        var regularLogo = {
            file: '/assets/img/intv_logo_outline.svg',
            onReady: function (myVivus) {
                const mq = window.matchMedia("(min-width: 600px)");
                if (!mq.matches) {
                    $('#I_concept').hide();
                }
            },
            type: "async",
            duration: 150,
            pathTimingFunction: Vivus.EASE_OUT,
            animTimingFunction: Vivus.EASE,
        };

        var compactLogo = {
            file: '/assets/img/intv_compact_outline.svg',
            onReady: function (myVivus) {
                const mq = window.matchMedia("(min-width: 600px)");
                if (mq.matches) {
                    $('#Compact_Logo').hide();
                }
            },
            type: "async",
            duration: 150,
            pathTimingFunction: Vivus.EASE_OUT,
            animTimingFunction: Vivus.EASE,
        };

        var compactVivus = new Vivus("logo",compactLogo,function () {
            Entrance()
        });

        var regularVivus = new Vivus("logo",regularLogo,function () {
            Entrance()
        });

        if (matchMedia) {
            const mq = window.matchMedia("(min-width: 600px)");
            mq.addListener(Define_i);
        }

        function Define_i(mq) {
            if (mq.matches) {
                $('#I_concept').show();
                $('#Compact_Logo').hide();
            } else {
                $('#I_concept').hide();
                $('#Compact_Logo').show();
            }
        }
    }
})