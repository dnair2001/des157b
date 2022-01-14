(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section');
    // Dark Mode
    const grass = document.getElementById("grass");
    const cloud1 = document.getElementById("cloud1");
    const cloud2 = document.getElementById("cloud2");
    const cloud3 = document.getElementById("cloud3");
    const star1 = document.getElementById("star1");
    const star2 = document.getElementById("star2");
    const star3 = document.getElementById("star3");
    const star4 = document.getElementById("star4");
    const star5 = document.getElementById("star5");
    const star6 = document.getElementById("star6");
    const star7 = document.getElementById("star7");
    const sleepingDog = document.getElementById("sleepingDog");
    let mode = 'dark';
    // Light Mode
    const grass2 = document.getElementById("grass2");
    const lightcloud1 = document.getElementById("lightcloud1");
    const lightcloud2 = document.getElementById("lightcloud2");
    const lightcloud3 = document.getElementById("lightcloud3");
    const lightcloud4 = document.getElementById("lightcloud4");
    const dog = document.getElementById("dog");
    const projects = document.getElementById("projects");
    const research = document.getElementById("research");
    const development = document.getElementById("development");
    const final = document.getElementById("final");
    const flower1 = document.getElementById("flower1");
    const flower2 = document.getElementById("flower2");

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
            grass.style.display = "none";
            cloud1.style.display = "none";
            cloud2.style.display = "none";
            cloud3.style.display = "none";
            star1.style.display = "none";
            star2.style.display = "none";
            star3.style.display = "none";
            star4.style.display = "none";
            star5.style.display = "none";
            star6.style.display = "none";
            star7.style.display = "none";
            sleepingDog.style.display = "none";
            grass2.className = 'seen';
            lightcloud1.className = 'seen';
            lightcloud2.className = 'seen';
            lightcloud3.className = 'seen';
            lightcloud4.className = 'seen';
            flower1.className = 'seen';
            flower2.className = 'seen';
            dog.className = 'seen';
            projects.className = 'dark-dash';
            research.className = 'dark-dash';
            development.className = 'dark-dash';
            final.className = 'dark-dash';
            banner.style.backgroundColor = "white";
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark';
            grass.style.display = "block";
            cloud1.style.display = "block";
            cloud2.style.display = "block";
            cloud3.style.display = "block";
            star1.style.display = "block";
            star2.style.display = "block";
            star3.style.display = "block";
            star4.style.display = "block";
            star5.style.display = "block";
            star6.style.display = "block";
            star7.style.display = "block";
            sleepingDog.style.display = "block";
            banner.style.backgroundColor = "rgb(34, 31, 31)";
            // Change
            grass2.className = 'hidden';
            lightcloud1.className = 'hidden';
            lightcloud2.className = 'hidden';
            lightcloud3.className = 'hidden';
            lightcloud4.className = 'hidden';
            flower1.className = 'hidden';
            flower2.className = 'hidden';
            dog.className = 'hidden';
        }
    })
})()