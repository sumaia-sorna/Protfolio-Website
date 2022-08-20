$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > window.innerHeight * 0.75) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".menu-btn").click(function () {
    $(".navbar .logo").toggleClass("active");
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
    if (document.querySelector(".navbar .menu").classList.contains("active")) {
      $(".navbar .logo").css("opacity", "0");
    }
    if (!document.querySelector(".navbar .menu").classList.contains("active")) {
      $(".navbar .logo").css("opacity", "1");
    }
  });

  $(".menu").click(function () {
    if (document.querySelector(".navbar .menu").classList.contains("active")) {
      $(".navbar .menu").removeClass("active");
      $(".menu-btn i").removeClass("active");
      if (!document.querySelector(".navbar .menu").classList.contains("active")) {
        $(".navbar .logo").css("opacity", "1");
      }
    }
  });
});
