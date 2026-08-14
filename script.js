$(function () {
  "use strict";
  $("#navToggle").on("click", function () {
    var $list = $("#navPanelList");
    var isOpen = $list.hasClass("is-open");

    $list.toggleClass("is-open");
    $(this).attr("aria-expanded", !isOpen);
  });

  $("#navPanelList a").on("click", function () {
    $("#navPanelList").removeClass("is-open");
    $("#navToggle").attr("aria-expanded", false);
  });

  $(".expertise__tab").on("click", function () {
    var target = $(this).data("tab");

    $(".expertise__tab").removeClass("is-active");
    $(this).addClass("is-active");

    $(".expertise__panel-item").removeClass("is-active");
    $(".expertise__panel-item[data-panel='" + target + "']").addClass(
      "is-active"
    );
  });

  var currentSlide = 0;
  var $slides = $(".project__slide");
  var $dots = $(".project__dot");
  var totalSlides = $slides.length;

  function goToSlide(index) {
    $slides.removeClass("is-active");
    $slides.eq(index).addClass("is-active");

    $dots.removeClass("is-active");
    $dots.eq(index).addClass("is-active");

    currentSlide = index;
  }

  $(".project__dot").on("click", function () {
    var index = $(this).index();
    goToSlide(index);
  });

  $(".project__arrow--next").on("click", function () {
    var nextIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextIndex);
  });

  $(".project__arrow--prev").on("click", function () {
    var prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prevIndex);
  });
});
