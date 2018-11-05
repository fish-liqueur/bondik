$(document).ready(function() {
    $('.js-that-is-mom').on('click', function() {
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
        }
        else {
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

    $('.js-that-is-son').on('click', function() {
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
        }
        else {
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

    $('.js-that-is-dad').on('click', function() {
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
        }
        else {
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

    $('.js-that-is-grandpa').on('click', function() {
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
        }
        else {
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