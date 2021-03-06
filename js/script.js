var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
if (!isIE && !isEdge) {
    var size = 0;
    if ($(window).width() <= 561) {
        size = 1;
    }
    var myline = [$('.js-path .js-path_path').get(0), $('.js-path-mobile .js-path_path').get(0)];
    var length = myline[size].getTotalLength();
    var pathImg = [$('.js-path'), $('.js-path-mobile')];
    myline[size].style.strokeDasharray = length;
    myline[size].style.strokeDashoffset = length;
    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
        var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (pathImg[size].height() - document.documentElement.clientHeight / 2);
        var draw = length * scrollpercent;
        myline[size].style.strokeDashoffset = length - draw;
    }
}

$(document).ready(function () {
    var windowHeight = $(window).height();

    $(document).on('scroll', function() {
        $('.main__person-block_person').each(function() {
            var self = $(this),
                height = self.offset().top + self.height()/2 - windowHeight/2;
            if ($(document).scrollTop() >= height) {
                self.addClass('swing');
            }
        });
    });

    $(document).on('scroll', function() {
        $('.main__img_controller').each(function() {
            var self = $(this),
                height = self.offset().top + self.height();
            if ($(document).scrollTop() + windowHeight >= height) {
                self.addClass('jackInTheBox')
            }
        });
    });

    $(document).on('scroll', function() {
        $('.main__img_car').each(function() {
            var self = $(this),
                height = self.offset().top + self.height();
            if ($(document).scrollTop() + windowHeight >= height) {
                self.addClass('zoomInRight')
            }
        });
    });

    $(document).on('scroll', function() {
        $('.main__img_flower2').each(function() {
            var self = $(this),
                height = self.offset().top + self.height()/2 - windowHeight/2;
            if ($(document).scrollTop() + windowHeight >= height) {
                self.addClass('slideInDown')
            }
        });
    });

    $(document).on('scroll', function() {
        $('.main__img_pine').each(function() {
            var self = $(this),
                height = self.offset().top + self.height();
            if ($(document).scrollTop() + windowHeight >= height) {
                self.addClass('slideInDown')
            }
        });
    });

    $('.js-that-is-mom').on('click', function () {
        if ($(window).width() >= 1280) {
            $.magnificPopup.open({
                items: {
                    src: $('.popup__desktop-mom'),
                    type: 'inline'
                },
                fixedContentPos: true,
                fixedBgPos: true,
                midClick: true,
                mainClass: 'my-mfp-zoom-in'
            });
        } else {
            $.magnificPopup.open({
                items: {
                    src: $('.popup__mobile-mom'),
                    type: 'inline'
                },
                fixedContentPos: true,
                fixedBgPos: true,
                midClick: true,
                mainClass: 'my-mfp-zoom-in'
            });
        }
    });

    $('.js-that-is-son').on('click', function () {
        if ($(window).width() >= 1280) {
            $.magnificPopup.open({
                items: {
                    src: $('.popup__desktop-son'),
                    type: 'inline'
                },
                fixedContentPos: true,
                fixedBgPos: true,
                midClick: true,
                mainClass: 'my-mfp-zoom-in'
            });
        } else {
            $.magnificPopup.open({
                items: {
                    src: $('.popup__mobile-son'),
                    type: 'inline'
                },
                fixedContentPos: true,
                fixedBgPos: true,
                midClick: true,
                mainClass: 'my-mfp-zoom-in'
            });
        }
    });

    $('.js-that-is-dad').on('click', function () {
        if ($(window).width() >= 1280) {
            $.magnificPopup.open({
                items: {
                    src: $('.popup__desktop-dad'),
                    type: 'inline'
                },
                fixedContentPos: true,
                fixedBgPos: true,
                midClick: true,
                mainClass: 'my-mfp-zoom-in'
            });
        } else {
            $.magnificPopup.open({
                items: {
                    src: $('.popup__mobile-dad'),
                    type: 'inline'
                },
                fixedContentPos: true,
                fixedBgPos: true,
                midClick: true,
                mainClass: 'my-mfp-zoom-in'
            });
        }
    });

    $('.js-that-is-grandpa').on('click', function () {
        if ($(window).width() >= 1280) {
            $.magnificPopup.open({
                items: {
                    src: $('.popup__desktop-grandpa'),
                    type: 'inline'
                },
                fixedContentPos: true,
                fixedBgPos: true,
                midClick: true,
                mainClass: 'my-mfp-zoom-in'
            });
        } else {
            $.magnificPopup.open({
                items: {
                    src: $('.popup__mobile-grandpa'),
                    type: 'inline'
                },
                fixedContentPos: true,
                fixedBgPos: true,
                midClick: true,
                mainClass: 'my-mfp-zoom-in'
            });
        }
    });
});