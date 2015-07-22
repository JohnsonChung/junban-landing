$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        anchors:['top', 'what-junban', 'store-problem', 'why-junban', 'how-junban', 'try-junban', 'pricing', 'ask-junban', 'spec-junban'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['what-junban', 'store-problem', 'why-junban', 'how-junban', 'try-junban', 'pricing', 'ask-junban', 'spec-junban'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 500,
        autoScrolling: false,
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
        resize : true,
        sectionsColor : ['#fff', '#F09C35', '#ddd', '#F09C35','#f5f0e6','#F09C35','#FFFFFF','#5cb85c','#fff'],
        paddingTop: '52px',
        paddingBottom: '3em',
        fixedElements: '#header',
        responsiveWidth: 1280,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
});