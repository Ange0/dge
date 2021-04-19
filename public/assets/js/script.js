$(document).ready(function() {

    /*----------------------------------------------------------*/
    /*              Modern ticker                               */
    /*----------------------------------------------------------*/

    $(".ticker1").modernTicker({effect:"scroll",scrollType:"continuous",scrollStart:"inside",scrollInterval:20,transitionTime:500,autoplay:true});
    $(".ticker2").modernTicker({effect:"fade",displayTime:4e3,transitionTime:300,autoplay:true});
    $(".ticker3").modernTicker({effect:"type",typeInterval:10,displayTime:4e3,transitionTime:300,autoplay:true});
    $(".ticker4").modernTicker({effect:"slide",slideDistance:100,displayTime:4e3,transitionTime:350,autoplay:true});

    /* ---------------------------------------------------- */
                 /*  owlslider Init   */
    /* ---------------------------------------------------- */

    (function() {
        if ($('#owl-photo1').length) {
            var config = CONFIG.objOwlSlider_photo;
            $("#owl-photo1").owlCarousel(config);
        }
        if ($('#owl-photo2').length) {
            var config = CONFIG.objOwlSlider_photo;
            $("#owl-photo2").owlCarousel(config);
        }
        if ($('#owl-succes-stories').length) {
            var config = CONFIG.objOwlSlider_photo;
            $("#owl-succes-stories").owlCarousel(config);
        }

        if ($('#owl-une').length) {
            var config = CONFIG.objOwlSlider_une;
            $("#owl-une").owlCarousel(config);
        }

        if ($('#owl-partner').length) {
            var config = CONFIG.objOwlSlider_partner;
            $("#owl-partner").owlCarousel(config);
        }

        if ($('#owl-emploi').length) {
            var config = CONFIG.objOwlSlider_une;
            $("#owl-emploi").owlCarousel(config);
        }

    }());

    /* ---------------------------------------------------- */
                 /* CustomScrollbar Init   */
    /* ---------------------------------------------------- */

    $(".footer-menu-list").mCustomScrollbar({
        autoHideScrollbar: true,
        theme:"light-thin"
    });

    /* ---------------------------------------------------- */
    /*                  Bootstrap carousel                   */
    /* ---------------------------------------------------- */

    // carousel active
    $('.zone-slide .carousel-inner > .item:first').addClass('active');
    $('.home_activite > li:first').addClass('active');

  


});