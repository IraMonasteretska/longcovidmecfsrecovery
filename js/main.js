
$(document).ready(function () {
    // header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.header').addClass('scrollheader');
        } else {
            $('.header').removeClass('scrollheader');
        }
    });

    if ($(this).scrollTop() > 20) {
        $('.header').addClass('scrollheader');
    } else {
        $('.header').removeClass('scrollheader');
    }


    $("header.header nav ul").on("click", "a:not(.normallink)", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 800);
    });

    $("footer ul").on("click", "a:not(.normallink)", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 800);
    });


    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slideshow',
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
    });

    var $status = $('.pagingInfo');
    var $slickElement = $('.slideshow');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        var $pagingInfo = $('.pagingInfo');
        var $currentSlideSpan = $('<span>').text(i);
        var $slideCountSpan = $('<span>').text(slick.slideCount);

        $pagingInfo.empty().append($currentSlideSpan).append('/').append($slideCountSpan);
    });

    $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-nav',
        dots: false,
        prevArrow: '<button type="button" class="slick-prevn"></button>',
        nextArrow: '<button type="button" class="slick-nextn"></button>',
        appendArrows: $('.slnavwrap')
    });


    $('.menubtn').click(function () {
        $('.mobmenu').addClass('show');

    });
    $('.closemenu').click(function () {
        $('.mobmenu').removeClass('show');
    });
    $('.header.header ul li a').click(function () {
        $('.mobmenu').removeClass('show');
    });



    // popup ------------------------ //
    $('.popup__btn').on('click', function () {
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });

    $('.popup__close').on('click', function () {
        $('.popup__window').removeClass('active');
    });

    // close popup ----------------- //
    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.closest('.popup__body').length) {
            $('.popup__window').removeClass('active');
        }
    });







    var menuBtn = document.querySelector('.menubtn');
    var mobMenu = document.querySelector('.header');
    var overlay = null;

    menuBtn.addEventListener('click', function () {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'overlay';
            mobMenu.appendChild(overlay);
            setTimeout(function () {
                overlay.classList.add('active');
            }, 10);
        }
    });

    var closeMenuBtn = document.querySelector('.closemenu');
    var popupCloseBtn = document.querySelector('.popup__close');

    closeMenuBtn.addEventListener('click', closeMenu);
    popupCloseBtn.addEventListener('click', closeMenu);

    function closeMenu() {
        if (overlay) {
            overlay.classList.remove('active');
            setTimeout(function () {
                mobMenu.removeChild(overlay);
                overlay = null;
            }, 300);
        }
    }

    // Додаємо обробник подій для кожного пункту меню
    var menuItems = document.querySelectorAll('.header ul li a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            closeMenu();
        });
    });



});

