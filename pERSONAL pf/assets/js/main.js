$(document).ready(function () {
    var hasAnimated = false;

    function startCounters() {
      var $counterBox = $("#counter-box");
      if ($counterBox.length) {
        var boxTop = $counterBox.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        // Check if the box is visible in the viewport
        if (!hasAnimated && scrollTop + windowHeight > boxTop) {
          $(".counter").each(function () {
            var $this = $(this);
            var countTo = parseInt($this.attr("data-number"), 10);

            $({ countNum: 0 }).animate(
              { countNum: countTo },
              {
                duration: 2000,
                easing: "swing",
                step: function () {
                  $this.text(Math.ceil(this.countNum));
                },
                complete: function () {
                  $this.text(countTo);
                }
              }
            );
          });

          hasAnimated = true;
        }
      }
    }

    $(window).on("scroll", startCounters);
    $(window).trigger("scroll");
  });


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1500, // Controls transition speed (ms)
    freeMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      }
    }
  });

