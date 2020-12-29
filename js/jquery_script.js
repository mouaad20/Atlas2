

$(document).ready(function(){

    $(' .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:3000,
        loop:true,
        margin:20,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
        });

    $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Mouaad designer</small>';
                }
            }
        });

     /*  count */
    $(window).scroll(function(){
    var scr=$(this).scrollTop();
    var scr_sta= $('.project-title').offset().top-200;
    if( scr> scr_sta  )
    {
      
        $('.time').countTo();
        $(window).off('scroll');  
    }
    
    
    });
    
    $('.nav-link').click(function(){

        var se_filter=$(this).attr('title');
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        $('body,html').animate({
            scrollTop : 0
            },0); 
        
            $('.section').addClass('hidden');
            $('.main ').contents().filter('.' + se_filter).removeClass('hidden');
       
      
      });


    /* Nav toggle */
    $('.btn-toggle').click(function(){
      $('.nav').toggleClass('nav-show');
      $('.span1').toggleClass('span-hide');
      $('.span2').toggleClass('transform1');
      $('.span3').toggleClass('transform2');
    });

    /*style switcher  */
    $('.style-switch .icon').click(function(){
      $('.style-switch').toggleClass('style-switch-show');
    });
   
    $(".contact-btn").click(function(){
        $(".send").addClass("send-show");
    })
    $(".send").click(function(){
        $(this).removeClass("send-show");
    })

})/* end */

