$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        anchors: ['top', 'what-junban', 'store-problem', 'why-junban', 'how-junban', 'try-junban', 'pricing', 'ask-junban'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['「順番コンシェル」とは?', '今の店は...', 'なぜ順番コンシェル?', '機能紹介', "Let's Try", 'プラン比較', 'お問い合わせ'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 500,
        autoScrolling: false,
        fitToSection: false,
        scrollBar: false,
        easing: 'swing',
        easingcss3: 'linear',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize: false,
        sectionsColor: ['#fff', '#F09C35', '#F1F1F1', '#F09C35', '#f5f0e6', '#F09C35', '#FFFFFF', '#5cb85c', '#fff'],
        paddingTop: '52px',
        paddingBottom: '3em',
        fixedElements: '#header',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        /**
         * Loaded
         */
        afterLoad: function(anchorLink, index) {

        },
        /**
         * Leave Section
         */
        onLeave: function(index, newIndex, direction) {
            console.log("Leaving: " + index + " | into: " + newIndex);
            if (newIndex === 2 && direction == 'down') {

            } else if (index == 3 && direction == 'up') {
                // $('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
            }

            // $('img').toggleClass('active', (index == 2 && direction == 'down') || (index == 4 && direction == 'down'));

            $("#fullpage .section:nth-child(2)").find('p').toggleClass("animated pulse", newIndex === 2);
            $("#fullpage .section:nth-child(3)").find('h1').toggleClass("animated pulse", newIndex === 3);
            $("#fullpage .section:nth-child(4)").find('h1').toggleClass("animated fadeInLeft", newIndex === 4 && direction === 'down');
            $("#fullpage .section:nth-child(5)").find('h1').toggleClass("animated fadeInLeft", newIndex === 5 && direction === 'down');
            $("#fullpage .section:nth-child(6)").find('.btn').toggleClass("animated pulse", newIndex === 6);


            if (newIndex === 7 && direction === 'down') {
                var target = $("#fullpage .section:nth-child(7)").find('.pricing-table');
                var i = 0;

                function loop() {
                    target.eq(i).toggleClass("animated pulse", newIndex === 7 && direction === 'down');
                    if (i < target.length) setTimeout(loop, 800);
                    i++;
                }
                setTimeout( loop , 1500 );
            }

            // $('#staticImg').toggleClass('moveDown', newIndex == 4);
            // $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
        },
        /**
         * Rendered
         *      Needed to maintain the fixed position of the element
         *      due to problems using translate3d and fixed elements.
         */
        afterRender: function() {}
    });
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});

