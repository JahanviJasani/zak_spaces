(function() {
  "use strict";

  // Sticky Header
	$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.header').addClass('header-fixed');
    } else {
      $('.header').removeClass('header-fixed');
    }
  });

  $('.mobile-nav-open').on('click', function(e) {
    $('.nav_menu_container').addClass('mobile_nav');
  })

  $('.mobile-nav-close').on('click', function(e) {
    nav_close();
  })


  if ($('.mobile_nav').length) {
    console.log("Hie");
    $( window ).resize(function(e) {
      nav_close(e);
    });
    $(document).click(function (e) {
      nav_close(e);
    });
  }

  // Select all links with hashes
  $('a[href*="#"]').not('[href="#"]').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 100, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
        nav_close();
      }
    }
  });

  function nav_close(e) {
    $('.nav_menu_container').removeClass('mobile_nav')
  }

  $('.accordion_q').on('click', function () {
    $(this).next().slideToggle(300);
    $(this).toggleClass('open', 300);
  });

})()