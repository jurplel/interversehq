$('#filledlogo').hide();
$('.nav-item').hide()
$('.navbar').css("visibility", "hidden");

function session() {
    if (!document.cookie.indexOf("visited") >= 0) {
        

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
            $('#filledlogo').fadeIn( 750 );
            $('.navbar').css("visibility", "visible").addClass('animated fadeInDown');
            $('.nav-item').css("visibility", "visible").addClass('animated fadeInDown');
        });

        var regularVivus = new Vivus("logo",regularLogo,function () {
            $('#filledlogo').fadeIn( 750 );
            $('.navbar').css("visibility", "visible").addClass('animated fadeInDown');
            $('.nav-item').css("visibility", "visible").addClass('animated fadeInDown');
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
        
    } else {
        document.cookie = "visited";
    }
}