// NAVBAR TRANSPARENT
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').removeClass('transparent');
    } else {
      $('nav').addClass('transparent');
    }
  });

// NAVBAR HOVER UNDERLINE
$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});

// NAVBAR SCROLL TO TOP
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "fast");
  return false;
});

// NAVBAR SCROLL TO ABOUT
$("a[href='#about']").click(function() {
  $('html, body').animate({scrollTop: $('#about').offset().top - 100 }, 'fast');
  return false;
});

// NAVBAR SCROLL TO EVENTS
$("a[href='#events']").click(function() {
  $('html, body').animate({scrollTop: $('#events').offset().top - 100 }, 'fast');
  return false;
});

// NAVBAR SCROLL TO TEAM
$("a[href='#team']").click(function() {
  $('html, body').animate({scrollTop: $('#team').offset().top - 100 }, 'fast');
  return false;
});

// NAVBAR SCROLL TO CONTACT
$("a[href='#contact']").click(function() {
  $('html, body').animate({scrollTop: $('#contact').offset().top - 100 }, 'fast');
  return false;
});

// EVENTS SCROLL TO UPCOMING
$("a[href='#upcoming']").click(function() {
  $('html, body').animate({scrollTop: $('#upcoming').offset().top - 100 }, 'fast');
  return false;
});

// EVENTS SCROLL TO UPCOMING
$("a[href='#past']").click(function() {
  $('html, body').animate({scrollTop: $('#past').offset().top - 100 }, 'fast');
  return false;
});
