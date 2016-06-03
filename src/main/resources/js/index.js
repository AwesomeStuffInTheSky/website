// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 38: 'up', 40: 'down', 32: 'down', 33: 'up', 34: 'down', 35: 'end', 36: 'home' };

function preventDefault( event ) {
    event = event || window.event;
    if( event.preventDefault )
        event.preventDefault();
    event.returnValue = false;
}

function preventDefaultForWheel( event ) {
    preventDefault( event );
    pageScroll( event.deltaY > 0 ? 'down' : 'up' );
}

function preventDefaultForScrollKeys( event ) {
    if( keys[ event.keyCode ] ) {
        preventDefault( event );
        pageScroll( keys[ event.keyCode ] );
        return false;
    }
}

function disableScroll() {
    window.onwheel = preventDefaultForWheel;
    document.onkeydown  = preventDefaultForScrollKeys;
}

// Constants
var numberOfPages = 2;
var timeBetweenScrolls = 300;
var animationTime = 500;

// Variables
var currentPage = 1;
var timeOfLastScroll = 0;

function pageScroll( command ) {
    var currentTime = new Date();
    if( currentTime.getTime() - timeOfLastScroll > timeBetweenScrolls ) {
        if( command == 'down' ) {
            if( currentPage < numberOfPages ) { // If not on last page
                currentPage++;
            }
        }
        else if( command == 'up' ) {
            if( currentPage > 1 ) { // if not on first page
                currentPage--;
            }
        }
        else if( command == 'end' ) {
            currentPage = numberOfPages;
        }
        else {
            currentPage = 1;
        }

        timeOfLastScroll = currentTime.getTime();
        $( 'html, body' ).animate( {
            scrollTop: $( "#page" + currentPage ).offset().top
        }, animationTime );
    }
}


function onResize( event ) {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var wRatio = width / 1200;
    var hRatio = height / 675;
    var ratio;

    if( wRatio < hRatio ) {
        ratio = wRatio;
    }
    else {
        ratio = hRatio;
    }

    $( "#awesome-cloud" ).width( ratio * 400 );
    $( "#awesome-cloud" ).height( ratio * 280 );
    $( "#awesome-cloud" ).css( 'top', height - (ratio * 280) - 25 );

    $( "#stuff-cloud" ).width( ratio * 300 );
    $( "#stuff-cloud" ).height( ratio * 210 );
    $( "#stuff-cloud" ).css( 'top', 25 );

    $( "#in-the-cloud" ).width( ratio * 200 );
    $( "#in-the-cloud" ).height( ratio * 140 );
    $( "#in-the-cloud" ).css( 'top', height * 0.3 );

    $( "#sky-cloud" ).width( ratio * 500 );
    $( "#sky-cloud" ).height( ratio * 350 );
    $( "#sky-cloud" ).css( 'top', (height - ratio * 350) / 2 );
}

// TODO
window.onresize = onResize;

window.onload = function() {
    onResize();
    disableScroll();
}

var isFooterHidden = true;
function toggleFooter() {
    if( isFooterHidden ) {
        showFooter();
        isFooterHidden = false;
    }
    else {
        hideFooter();
        isFooterHidden = true;
    }
}

function showFooter() {
    var height = $( "#footer" ).height();

    $( "#footer" ).animate( {
        top: "-=" + height + "px"
    }, 800, function() {
        // Animation complete.
    });

    $( "#footer-arrow-up" ).animate( {
        top: "-=" + height + "px"
    }, 800, function() {
        // Animation complete.
    });

    $( "#footer-arrow-up" ).removeClass( "rotate-0deg" );
    $( "#footer-arrow-up" ).addClass( "rotate-180deg" );

}

function hideFooter() {
    var height = $( "#footer" ).height();

    $( "#footer" ).animate( {
        top: "+=" + height + "px"
    }, 800, function() {
        // Animation complete.
    });

    $( "#footer-arrow-up" ).animate( {
        top: "+=" + height + "px"
    }, 800, function() {
        // Animation complete.
    });

    $( "#footer-arrow-up" ).removeClass( "rotate-180deg" );
    $( "#footer-arrow-up" ).addClass( "rotate-0deg" );
}