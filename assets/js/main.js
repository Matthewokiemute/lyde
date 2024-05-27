(function ($) {
  "use strict";
  $('.offcanvas-content ul.mobile-menu > li:has(ul)').addClass("has-sub");
  $('.header-navigation-menu li:has(ul)').addClass("menu-item-has-children");
  $('.offcanvas-content ul.mobile-menu > li:has(ul) > a').after('<span class="caret"></span>');
  $(document).on('click', '.offcanvas-content ul.mobile-menu > li > .caret', function (e) {
    e.preventDefault();
    var checkElement = $(this).next();
    $('.offcanvas-content ul.mobile-menu > li').removeClass('menu-active');
    $(this).closest('li').addClass('menu-active');
    if ((checkElement.is('.submenu-inner')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('menu-active');
      checkElement.slideUp('normal');
    }
    if ((checkElement.is('.submenu-inner')) && (!checkElement.is(':visible'))) {
      $('.offcanvas-content ul.mobile-menu .submenu-inner:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }
    if (checkElement.is('.submenu-inner')) {
      return false;
    } else {
      return true;
    }
  })
  $(document).on('click', '.canvas-menu.menu-offcanvas > a.dropdown-toggle', function (e) {
    e.preventDefault();
    var $style = $(this).data('canvas');
    if ($('.offcanvas-content' + $style).hasClass('open')) {
      $('.offcanvas-content' + $style).removeClass('open');
      $('#site-overlay').removeClass('open');
      $('#wp-main-content').removeClass('blur');
    } else {
      $('.offcanvas-content' + $style).addClass('open');
      $('#site-overlay').addClass('open');
      $('#wp-main-content').addClass('blur');
    }
  });
  $(document).on('click', '#site-overlay', function (e) {
    e.preventDefault();
    $(this).removeClass('open');
    $('.offcanvas-content').removeClass('open');
    $('#wp-main-content').removeClass('blur');
  })
  $(document).on('click', '.close-canvas', function (e) {
    e.preventDefault();
    $('.offcanvas-content').removeClass('open');
    $('#site-overlay').removeClass('open');
    $('#wp-main-content').removeClass('blur');
  })
  jQuery(document).ready(function () {
    if ($(".full-bar-search-toggle").length) {
      $(document).on('click', '.full-bar-search-toggle', function () {
        $('.full-bar-search-wrap').toggleClass('active');
        return false;
      });
    }
    // 6. Background image 
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    $('.video-popup a').magnificPopup({
      type: 'iframe'
    });
    // 8. FAQ accordian 
    if ($('.accrodion-widget').length) {
      var accrodionGroup = $('.accrodion-widget');
      $('.accrodion-box').first().addClass('active');
      accrodionGroup.each(function () {
        var accrodionName = $(this).data('ag-name');
        var Self = $(this);
        var accordion = Self.find('.accrodion-box');
        Self.addClass(accrodionName);
        Self.find('.accrodion-box .accrodion-content').hide();
        Self.find('.accrodion-box.active').find('.accrodion-content').show();
        accordion.each(function () {
          $(this).find('.accrodion-title').on('click', function () {
            if ($(this).parent().parent().hasClass('active') === false) {
              $('.accrodion-widget.' + accrodionName).find('.accrodion-box').removeClass('active');
              $('.accrodion-widget.' + accrodionName).find('.accrodion-box').find('.accrodion-content').slideUp();
              $(this).parent().parent().addClass('active');
              $(this).parent().parent().find('.accrodion-content').slideDown();
            };
          });
        });
      });
    };
    $('.counter-block').appear(function () {
      var $endNum = parseInt(jQuery(this).find('.count-number').text());
      jQuery(this).find('.count-number').countTo({
        from: 0,
        to: $endNum,
        speed: 5000,
        refreshInterval: 60,
        formatter: function (value, options) {
          value = value.toFixed(options.decimals);
          value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          return value;
        }
      });
    }, {
      accX: 0,
      accY: 0
    });

    $('.testimonial-slider').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      items: 1,
      navText: [$('.testimonials_slide-next'), $('.testimonials_slide-prev')],
      navContainer: '.testimonials_slider_nav',
    });
    $('.post-carousel').owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      dots: true,
      items: 3,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 3
        }
      }
    });
    $('.scroll-top').on('click', function () {
      $('html,body').animate({
        scrollTop: 0
      }, 900);
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 500) {
        $('.scroll-top').slideDown(450);
      } else {
        $('.scroll-top').slideUp(450);
      }
    });
    /* ===============================
    	***** Fixed Header on Scroll *****
    	================================*/
    $(window).on("scroll", function () {
      let navbar = $(".sticky-header-active");
      var scroll = $(window).scrollTop();
      if (scroll < 500) {
        navbar.removeClass('sticky-header');
      } else {
        if (window.innerWidth >= 768) {
          navbar.addClass('sticky-header');
        }
      }
    });
    $(window).on('load', function () {
      if ($(".page-loader").length) {
        $(".page-loader").fadeOut("slow");
      }
    });
    if ($('.clenoz-slider').length) {
      $('.clenoz-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: 12000,
        navText: ['<span class="fal fa-arrow-left"></span>', '<span class="fal fa-arrow-right"></span>'],
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 1,
            nav: false
          },
          1200: {
            items: 1
          }
        }
      });
    }
    if ($('.service-carousel').length) {
      $('.service-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          800: {
            items: 2
          },
          1200: {
            items: 3
          }
        }
      });
    }
    if ($('.service-slider-two').length) {
      $('.service-slider-two').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          800: {
            items: 3
          },
          1200: {
            items: 4
          }
        }
      });
    }
    if ($('.project-slider').length) {
      $('.project-slider').owlCarousel({
        loop: true,
        margin: 1,
        dots: true,
        nav: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          800: {
            items: 3
          },
          1200: {
            items: 4
          }
        }
      });
    }
    if ($('.logo-carousel').length) {
      $('.logo-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: 15000,
        responsive: {
          0: {
            items: 2,
            margin: 80
          },
          700: {
            items: 3,
            margin: 40
          },
          800: {
            items: 4
          },
          1200: {
            items: 5,
            margin: 140,
          }
        }
      });
    }
    if ($('.testimonials-slider').length) {
      $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: 15000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          800: {
            items: 2
          },
          1200: {
            items: 3,
          }
        }
      });
    }
    if ($('.blog-post-slider').length) {
      $('.blog-post-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          800: {
            items: 2
          },
          1200: {
            items: 3,
          }
        }
      });
    }
    if ($('.team-slider').length) {
      $('.team-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            dots: true
          },
          600: {
            items: 2
          },
          800: {
            items: 2
          },
          1200: {
            items: 3,
          }
        }
      });
    }
    $('.nice-select').niceSelect();
    //Parallax Scene
    if ($('.parallax-section').length) {
      var scene = $('.parallax-section').get(0);
      var parallaxInstance = new Parallax(scene);
    }
    if ($('.parallax-footer').length) {
      var scene = $('.parallax-footer').get(0);
      var parallaxInstance = new Parallax(scene);
    }
    if ($('.parallax-pricing').length) {
      var scene = $('.parallax-pricing').get(0);
      var parallaxInstance = new Parallax(scene);
    }
    if ($('.parallax-pricing-shapes').length) {
      var scene = $('.parallax-pricing-shapes').get(0);
      var parallaxInstance = new Parallax(scene);
    }
    if ($('.parallax-cta').length) {
      var scene = $('.parallax-cta').get(0);
      var parallaxInstance = new Parallax(scene);
    }
    
    $('.tilt-effect').tilt({
      maxTilt: 20,
      perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
      easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
      scale: 1, // 2 = 200%, 1.5 = 150%, etc..
      speed: 300, // Speed of the enter/exit transition.
      transition: true, // Set a transition on enter/exit.
      disableAxis: null, // What axis should be disabled. Can be X or Y.
      reset: true, // If the tilt effect has to be reset on exit.
      glare: false, // Enables glare effect
      maxGlare: 1 // From 0 - 1.
    });
    // Progress Bar
    if ($('.bar-line-active').length) {
      $('.bar-line-active').appear(function () {
        var el = $(this);
        var percent = el.data('percent');
        $(el).css('width', percent).addClass('counted');
      }, {
        accY: -50
      });
    }


    $('.gallery-overlay').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
      }
    });
    

  });
  $(window).on('load',function(){if($(".page-loader").length){$(".page-loader").fadeOut("slow");}});
})(jQuery);