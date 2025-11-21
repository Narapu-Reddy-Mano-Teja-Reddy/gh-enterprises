(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    // Use window load to ensure all assets are loaded before hiding spinner
    $(window).on('load', function () {
        spinner();
    });


    // Initiate the wowjs
    // new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '0px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    // Form Validation and Submission
    function handleFormSubmit(formId, successMessage) {
        var form = $(formId);
        if (form.length === 0) return;

        form.on('submit', function (e) {
            e.preventDefault();

            if (this.checkValidity() === false) {
                e.stopPropagation();
                form.addClass('was-validated');
                return;
            }

            // Simulate submission
            var btn = form.find('button[type="submit"]');
            var originalText = btn.text();
            btn.prop('disabled', true).text('Sending...');

            setTimeout(function () {
                alert(successMessage);
                form[0].reset();
                form.removeClass('was-validated');
                btn.prop('disabled', false).text(originalText);
            }, 1500);
        });
    }

    handleFormSubmit('#appointmentForm', 'Thank you! Your appointment request has been sent. We will contact you shortly.');
    handleFormSubmit('#contactForm', 'Thank you! Your message has been sent. We will get back to you soon.');


})(jQuery);
