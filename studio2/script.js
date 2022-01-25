// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");
var dot5 = document.getElementById("dot5");
var dot6 = document.getElementById("dot6");
var dot7 = document.getElementById("dot7");
var dot8 = document.getElementById("dot8");

var t1 = document.getElementById("timeline-1");
var t2 = document.getElementById("timeline-2");
var t3 = document.getElementById("timeline-3");
var t4 = document.getElementById("timeline-4");
var t5 = document.getElementById("timeline-5");
var t6 = document.getElementById("timeline-6");
var t7 = document.getElementById("timeline-7");
var t8 = document.getElementById("timeline-8");

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");
var span5 = document.getElementById("close5");
var span6 = document.getElementById("close6");
var span7 = document.getElementById("close7");
var span8 = document.getElementById("close8");
// console.log(span);

// When the user clicks the button, open the modal
function hideTs() {
    const myTs = [t1, t2, t3, t4, t5, t6, t7, t8];
    for (let i = 0; i < myTs.length; i++) {
        myTs[i].classList = 'hidden';
    }
}

dot1.addEventListener("click", function() {
    modal1.style.display = "block";
    hideTs();
    t1.className = "showing";
})

dot2.addEventListener("click", function() {
    modal2.style.display = "block";
    hideTs();
    t2.className = "showing";
})

dot3.addEventListener("click", function() {
    modal3.style.display = "block";
    hideTs();
    t3.className = "showing";
})

dot4.addEventListener("click", function() {
    modal4.style.display = "block";
    hideTs();
    t4.className = "showing";
})

dot5.addEventListener("click", function() {
    modal5.style.display = "block";
    hideTs();
    t5.className = "showing";
})

dot6.addEventListener("click", function() {
    modal6.style.display = "block";
    hideTs();
    t6.className = "showing";
})

dot7.addEventListener("click", function() {
    modal7.style.display = "block";
    hideTs();
    t7.className = "showing";
})

dot8.addEventListener("click", function() {
    modal8.style.display = "block";
    hideTs();
    t8.className = "showing";
})

// When the user clicks on <span> (x), close the modal
span1.addEventListener('click', function() {
    console.log('click on span');
    modal1.style.display = "none";
});
span2.addEventListener('click', function() {
    console.log('click on span');
    modal2.style.display = "none";
});
span3.addEventListener('click', function() {
    console.log('click on span');
    modal3.style.display = "none";
});
span4.addEventListener('click', function() {
    console.log('click on span');
    modal4.style.display = "none";
});
span5.addEventListener('click', function() {
    console.log('click on span');
    modal5.style.display = "none";
});
span6.addEventListener('click', function() {
    console.log('click on span');
    modal6.style.display = "none";
});
span7.addEventListener('click', function() {
    console.log('click on span');
    modal7.style.display = "none";
});
span8.addEventListener('click', function() {
    console.log('click on span');
    modal8.style.display = "none";
});
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
// }
// window.onclick = function(event) {
//     if (event.target == modal2) {
//       modal2.style.display = "none";
//     }
//   }
// window.onclick = function(event) {
//     if (event.target == modal3) {
//     modal3.style.display = "none";
//     }
// }
// window.onclick = function(event) {
//     if (event.target == modal4) {
//       modal4.style.display = "none";
//     }
//   }
//   window.onclick = function(event) {
//     if (event.target == modal5) {
//       modal5.style.display = "none";
//     }
//   }
//   window.onclick = function(event) {
//     if (event.target == modal6) {
//       modal6.style.display = "none";
//     }
//   }
//   window.onclick = function(event) {
//     if (event.target == modal7) {
//       modal7.style.display = "none";
//     }
//   }
//   window.onclick = function(event) {
//     if (event.target == modal8) {
//       modal8.style.display = "none";
//     }
//   }

let globalData;
async function getData() {
    const myData = await fetch('data/data.json');
    const data = await myData.json();
    //console.log(data);
    globalData = data;
    document.querySelector('#content1data').innerHTML += outputHTML1(data);
    document.querySelector('#content2data').innerHTML += outputHTML2(data);
    document.querySelector('#content3data').innerHTML += outputHTML3(data);
    document.querySelector('#content4data').innerHTML += outputHTML4(data);
    document.querySelector('#content5data').innerHTML += outputHTML5(data);
    document.querySelector('#content6data').innerHTML += outputHTML6(data);
    document.querySelector('#content7data').innerHTML += outputHTML7(data);
    document.querySelector('#content8data').innerHTML += outputHTML8(data);
}

function outputHTML1(data) {
    const feeling = ['really bad', 'stressed', 'ok', 'extermely happy', 'nervous'];
    const html = `To begin my internship search, I started using LinkedIn and cold applied to hundreds of jobs throughout the span of 2 months. 
                    During ${data.point1.date}, I had sent in ${data.point1.applications} applications and I was feeling ${feeling[data.point1.mood]} 
                    because I had ${data.point1.interviews} interviews.`;
    return html;
}

function outputHTML2(data) {
    const feeling = ['really bad', 'stressed', 'ok', 'extermely happy', 'nervous'];
    const html = `I hadn't been hearing back much. During ${data.point2.date}, I had sent in ${data.point2.applications} applications and I was feeling ${feeling[data.point2.mood]} 
                    because I had ${data.point2.interviews} interviews.`;
    return html;
}

function outputHTML3(data) {
    const feeling = ['really bad', 'stressed', 'ok', 'extermely happy', 'nervous'];
    const html = `I finally started landing interviews! During ${data.point3.date}, I had sent in ${data.point3.applications} applications and I was feeling ${feeling[data.point3.mood]} 
                because I had ${data.point3.interviews} interviews.`;
    return html;
}

function outputHTML4(data) {
    const feeling = ['really bad', 'stressed', 'ok', 'extermely happy', 'nervous'];
    const html = `During ${data.point4.date}, I had sent in ${data.point4.applications} applications and I was feeling ${feeling[data.point4.mood]} 
    because I had ${data.point4.interviews} interviews. I was preparing and practicing very hard.`;
    return html;
}

function outputHTML5(data) {
    const feeling = ['really bad', 'stressed', 'ok', 'extermely happy', 'nervous'];
    const html = `On ${data.point5.date}, I had sent in ${data.point5.applications} applications and I was feeling ${feeling[data.point5.mood]} 
    because I had ${data.point5.interviews} interviews.`;
    return html;
}

function outputHTML6(data) {
    const feeling = ['really bad', 'stressed', 'ok', 'extermely happy', 'nervous'];
    const html = `I was starting to relax more. On ${data.point6.date}, I had sent in ${data.point6.applications} applications and I was feeling ${feeling[data.point6.mood]} 
    because I had ${data.point6.interviews} interviews.`;
    return html;
}

function outputHTML7(data) {
    const feeling = ['really bad', 'stressed', 'ok', 'extermely happy', 'nervous'];
    const html = `On ${data.point7.date}, I had sent in ${data.point7.applications} applications and I was feeling ${feeling[data.point7.mood]} 
    because I had ${data.point7.interviews} interviews`;
    return html;
}

function outputHTML8(data) {
    const feeling = ['really bad', 'stressed', 'ok', 'extermely happy', 'nervous'];
    const html = `At ${data.point8.date}, I had sent in ${data.point8.applications} applications and I was feeling ${feeling[data.point8.mood]} 
    because I had ${data.point8.interviews} interviews. I finally landed my first internship through Cisco!`;
    return html;
}

getData();