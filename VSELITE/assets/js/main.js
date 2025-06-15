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

 AOS.init();


 $(document).ready(function() {
    // Set today's date in the 'YYYY-MM-DD' format for the date field validation
    var today = new Date().toISOString().split('T')[0];
   

    $("#contact-form").validate({
        rules: {
            // Name: Only alphabets and spaces allowed
            namea: {
                required: true,
                pattern: /^[A-Za-z\s]+$/
            },
            // Phone: Only numbers, spaces, and '+' allowed (max 12 characters)
            mytbile: {
                required: true,
                pattern: /^[\d\s\+]{1,12}$/
            },
            // Email: Must be a valid email format
            hmail: {
                required: true,
                email: true
            },
            // Service: Dropdown is mandatory
            swerviceus: {
            required: true
            },
             prdutsoar: {
            required: true
            },
            // Appointment Date: Must be today or in the future
            aointmenttade: {
                required: true,
                date: true,
                min: today // Ensure the date is today or in the future
            },
             // Appointment Time: Must be today or in the future
            locao: {
                required: true,
            },
            
            // Message: Disallow URLs (only normal text is allowed)
            messagevw: {
                required: true,
            pattern: /^(?!.*(?:https?|ftp):\/\/.*|www\..*\..{2,})/s  
            }
        },
        messages: {
            // Custom error messages
            namea: {
                required: "Please enter your name.",
                pattern: "Name can only contain letters and spaces."
            },
            mytbile: {
                required: "Please enter your phone number.",
                pattern: "Only numbers, spaces, and '+' are allowed, and the number should be up to 12 characters."
            },
            hmail: {
                required: "Please enter a valid email address.",
                email: "Please enter a valid email address."
            },
            swerviceus: {
                required: "Please Enter a Service."
            },
           prdutsoar: {
                required: "Please select a product."
            },
            aointmenttade: {
                required: "Please select your Appointment Date.",
                date: "Please enter a valid date.",
                min: "The Appointment Date must be today or in the future."
            },
            locao: {
                required: "Please enter the Location.",
                pattern: "Location can only contain letters and spaces."
            },
            messagevw: {
                required: "Please enter a message.",
                pattern: "URLs are not allowed in the message."
            
            }
        },
        submitHandler: function(form) {
            form.submit(); // Submit the form if validation passes
        }
    });
    // Initialize form validation

  
});

