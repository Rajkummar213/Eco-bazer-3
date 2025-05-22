$(document).ready(function(){

    //* jqury RUN

    $('.bannerslider').slick({
        prevArrow: "#bannerleftArrow",
        nextArrow: "#bannerrightArrow",
        dots: true,
        dotsClass: "slider-dots",
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.categorySlider').slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
         prevArrow: "#catleftArrow",
        nextArrow: "#catrightArrow",
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    })

    $('.productThumbSlider').slick({
      slidesToShow: 4,
        vertical: true,
        arrows: false,
        verticalSwiping: true,
        asNavFor: '.productGallerySlider',
        focusOnSelect: true,
    })
    $('.productGallerySlider').slick({
            slidesToShow: 1,
           arrows: false,
           asNavFor: '.productThumbSlider',


    })


    // search
    $('.searchicon').click(function(){
      $(".searchbox").addClass('active')
    })
     $('.cancel').click(function(){
      $(".searchbox").removeClass('active')
    })
    
    
    




    $('.ratingInput').on('change', function () {
            if ($(this).is(':checked')) {
                // Uncheck all other checkboxes
                $('.ratingInput').not(this).prop('checked', false);

                // Remove highlight from other labels
                $('label').removeClass('selected-label');

                // Add highlight to this label
                $('label[for="' + $(this).attr('id') + '"]').addClass('selected-label');
            } else {
                // Remove highlight if unchecked
                $('label[for="' + $(this).attr('id') + '"]').removeClass('selected-label');
            }
        });


            // Quantity increment
    $('.incrementBtn').click(function () {
      var input = $(this).siblings('.quality');
      var currentValue = parseInt(input.val());
      input.val(currentValue + 1);
    });

    // Quantity decrement
    $('.decrementBtn').click(function () {
      var input = $(this).siblings('.quality');
      var currentValue = parseInt(input.val());
      if (currentValue > 1) {
        input.val(currentValue - 1);
      }
    });
       
  });
