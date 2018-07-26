$('#filledlogo').hide();

$('.navbar').css("visibility", "hidden");

function Entrance() {
    $('#filledlogo').fadeIn(750, function() {
        $('#I_concept').hide();
        $('#Compact_Logo').hide();
    });
    $('.navbar').css("visibility", "visible").addClass('animated fadeInDown');
}

$( document ).ready(function() {
    if (Cookies.get('visited')) 
    {
        Entrance();
    }
    else 
    {
        Cookies.set('visited', 'yes', { path: '/' });
        
        var regularLogo = {
            file: 'assets/img/intv_logo_outline.svg',
            type: "async",
            duration: 150,
            pathTimingFunction: Vivus.EASE_OUT,
            animTimingFunction: Vivus.EASE,
        };

        var regularVivus = new Vivus("logo",regularLogo,function () {
            Entrance();
        });
    }
})