$(document).ready(function () {
    $('body').css('min-height', $(window).height());
    var ph = $('.project').hide();
    var ip = $('.info-project').hide();
    var mn = $('#main').hide();
    var ct = $('.contacts').hide();
    $('#contact').hide();
    $('#loader').hide();
    var g = false;
    var contact = false;

    $('#contacts').click(function () {
        if (g == false){
        $('.contacts').show('slow');
        g = true;
        }
        else{
        $('.contacts').hide('slow');
        g = false;            
        }
    });

    $('#projects').click(function () {
        $('#contacts, .contacts').hide('slow');
        $('.main').hide('slow');
        $('.project').show('slow');
        $('#main').show('slow');
        $('#contact_me').hide('slow');
    })

    $("#main").click(function() {
        $('.project').hide('slow');
        $('#main').hide('slow');
        $('.main').show('slow');
        $('#contacts').show('slow');
    })
    $('#contact_me').click(function(){
        if (contact == false) {
            $('.main').hide('slow');
            $('#contact').show('slow');
            contact = true;
            
        }
        else {
            $('.main').show('slow');
            $('#contact').hide('slow');
            contact = false;
        }
    })

    $('.col-md-3').hover(function() {
        if( this.id ) {
            $('#project'+this.id).show();   
        };
    }, function() {
        $('.info-project').hide();
    });
    
    $('div.thumbnail > a, div.info-project > p > a').attr('target', "_blank");

    // WOW.JS
    new WOW().init();

    // Nivo Lightbox
    $("a.nivo-light").nivoLightbox({effect:"fade",theme:"default",keyboardNav:!0})}),$(".carousel").carousel({interval:3e3}),jQuery(document).ready(function(){var e=220,o=500;jQuery(window).scroll(function(){jQuery(this).scrollTop()>e?jQuery(".back-to-top").fadeIn(o):jQuery(".back-to-top").fadeOut(o)}),jQuery(".back-to-top").click(function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},o),!1});

    // Contact-Form Validations
    $("#contact-form").bootstrapValidator({message:"This value is not valid",feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove",validating:"glyphicon glyphicon-refresh"},fields:{Name:{validators:{notEmpty:{message:"The Name is required and cannot be empty"}}},email:{validators:{notEmpty:{message:"The email address is required"},emailAddress:{message:"The email address is not valid"}}},Message:{validators:{notEmpty:{message:"The Message is required and cannot be empty"}}}}})

    $('#contact_btn').click(function(){
        $('#loader').show();
    })

})
;
