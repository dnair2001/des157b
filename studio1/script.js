(function() {
    'use strict';

    const myVideo = document.querySelector('#myVideo');
    const fs = document.querySelector('.fa-expand');
    const loading = document.querySelector('.fa-snowflake');

    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');

    const poem = {
        start: [0,5,9],
        stop: [4,8,10],
        line: [line1, line2, line3]
    }

    const intervalID = setInterval(checkTime, 1000);
    // add the rest of the script here

    function checkTime() {
        for (let i = 0; i < poem.start.length; i++) {
            if (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i]) {
                poem.line[i].className = "showing";
            } else {
                poem.line[i].className = "hidden";
            }
        }
    }

    fs.addEventListener('click', function() {
        // The fullscreenElement attribute returns null if the element is in windowed mode
        if (!document.fullscreenElement) {
            // document.documentElement returns the Element that is a direct child of the document, the <html> element
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();

        }
    });

    myVideo.addEventListener('playing', function() {
        loading.style.display = 'none';
    });

    // add the mousemove script here
    myVideo.addEventListener('mousemove', function(event) {
        console.log(event.clientX);
        myVideo.playbackRate = event.clientX / 600 + 0.25;
    })
})();