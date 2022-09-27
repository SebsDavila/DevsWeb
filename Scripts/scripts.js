
(function ($) {
    "use strict";

    /*================================
    Preloader
    ==================================*/

    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () { $(this).remove(); });
    });

    /*================================
    sidebar collapsing
    ==================================*/
    $('.nav-btn').on('click', function () {
        $('.page-container').toggleClass('sbar_collapsed');
    });

    /*================================
    Start Footer resizer
    ==================================*/
    var e = function () {
        var e = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 5;
        (e -= 67) < 1 && (e = 1), e > 67 && $(".main-content").css("min-height", e + "px")
    };
    $(window).ready(e), $(window).on("resize", e);

    /*================================
    sidebar menu
    ==================================*/
    $("#menu").metisMenu();

    /*================================
    slimscroll activation
    ==================================*/
    $('.menu-inner').slimScroll({
        height: 'auto'
    });
    $('.nofity-list').slimScroll({
        height: '435px'
    });
    $('.timeline-area').slimScroll({
        height: '500px'
    });
    $('.recent-activity').slimScroll({
        height: 'calc(100vh - 114px)'
    });
    $('.settings-list').slimScroll({
        height: 'calc(100vh - 158px)'
    });

    /*================================
    stickey Header
    ==================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header'),
            mainHeaderHeight = mainHeader.innerHeight();

        // console.log(mainHeader.innerHeight());
        if (scroll > 1) {
            $("#sticky-header").addClass("sticky-menu");
        } else {
            $("#sticky-header").removeClass("sticky-menu");
        }
    });

    /*================================
    form bootstrap validation
    ==================================*/
    $('[data-toggle="popover"]').popover()

    /*------------- Start form Validation -------------*/
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    /*================================
    datatable active
    ==================================*/
    if ($('#dataTable').length) {
        $('#dataTable').DataTable({
            responsive: true
        });
    }
    /*================================
    Slicknav mobile menu
    ==================================*/
    $('ul#nav_menu').slicknav({
        prependTo: "#mobile_menu"
    });

    /*================================
    login form
    ==================================*/
    $('.form-gp input').on('focus', function () {
        $(this).parent('.form-gp').addClass('focused');
    });
    $('.form-gp input').on('focusout', function () {
        if ($(this).val().length === 0) {
            $(this).parent('.form-gp').removeClass('focused');
        }
    });

    /*================================
    slider-area background setting
    ==================================*/
    $('.settings-btn, .offset-close').on('click', function () {
        $('.offset-area').toggleClass('show_hide');
        $('.settings-btn').toggleClass('active');
    });

    /*================================
    Owl Carousel
    ==================================*/
    function slider_area() {
        var owl = $('.testimonial-carousel').owlCarousel({
            margin: 50,
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1360: {
                    items: 1
                },
                1600: {
                    items: 2
                }
            }
        });
    }
    slider_area();

    /*================================
    Fullscreen Page
    ==================================*/

    if ($('#full-view').length) {

        var requestFullscreen = function (ele) {
            if (ele.requestFullscreen) {
                ele.requestFullscreen();
            } else if (ele.webkitRequestFullscreen) {
                ele.webkitRequestFullscreen();
            } else if (ele.mozRequestFullScreen) {
                ele.mozRequestFullScreen();
            } else if (ele.msRequestFullscreen) {
                ele.msRequestFullscreen();
            } else {
                console.log('Fullscreen API is not supported.');
            }
        };

        var exitFullscreen = function () {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else {
                console.log('Fullscreen API is not supported.');
            }
        };

        var fsDocButton = document.getElementById('full-view');
        var fsExitDocButton = document.getElementById('full-view-exit');

        fsDocButton.addEventListener('click', function (e) {
            e.preventDefault();
            requestFullscreen(document.documentElement);
            $('body').addClass('expanded');
        });

        fsExitDocButton.addEventListener('click', function (e) {
            e.preventDefault();
            exitFullscreen();
            $('body').removeClass('expanded');
        });
    }
    /*================================
    Home/Index Page
    ==================================*/
    if ($('#StatusB').length) {
        $('#StatusB').click(function () {
            window.location.href = $(this).data('url');
        });
     
    }
    if ($('#UpdateStatus').length) {
        $('#UpdateStatus').click(function () {
            window.open($(this).data('url'), "_blank");
        });
    }
    if ($('#LocateItems').length) {
        $('#LocateItems').click(function () {
            window.location.href = $(this).data('url');
        });
    }
    if ($('#SetLocations').length) {
        $('#SetLocations').click(function () {
            window.location.href = $(this).data('url');
        });
    }
    if ($('#ReqParts').length) {
        $('#ReqParts').click(function () {
            window.location.href = $(this).data('url');
        }); 
    }
    if ($('#ReviewRequest').length) {
        $('#ReviewRequest').click(function () {
            window.location.href = $(this).data('url');
        }); 
    }
    if ($('#ReviewRequestOffline').length) {
        $('#ReviewRequestOffline').click(function () {
            window.location.href = $(this).data('url');

        }); 
    }
    if ($('#ReviewRequestYellowJacket').length) {
        $('#ReviewRequestYellowJacket').click(function () {
            window.location.href = $(this).data('url');
        }); 
    }
    if ($('#GetLcoInventory').length) {
        $('#GetLcoInventory').click(function () {
            window.location.href = $(this).data('url');
        });
    }
    if ($('#LcoReport').length) {
        $('#LcoReport').click(function () {
            window.location.href = $(this).data('url');
        });
    }
    if ($('#users').length) {
        $('#users').click(function () {
            window.location.href = $(this).data('url');
        });
    }
    if ($('#FaltantesPendientes').length) {
        $('#FaltantesPendientes').click(function () {
            window.location.href = $(this).data('url');
        });
    }
})(jQuery);
function LoadTables() {
    if ($('#dtLocations').length) {
        var tableLoc = $('#dtLocations').DataTable({
            responsive: true
        });
        $('#dtLocations tbody').on('click', '.btn-danger', function () {
            var row = tableLoc.row($(this).parents('tr'));
            row.remove();
            row.draw();
        });
    }
};
