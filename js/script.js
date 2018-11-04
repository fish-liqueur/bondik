// $(document).ready(function() {
//   $("#pathFade").css("opacity", "0");
// });
//
//      var fadein_tween = TweenLite.to('#pathFade', 2, {opacity: 0.5});
//      var controller = new ScrollMagic.Controller();
//      var scene1 = new ScrollMagic.Scene({
//          offset: 100,
//          duration: $("#pathFade").height(),
//          reverse: false
//        })
//        .setTween(fadein_tween)
//        .addTo(controller);

//var path = document.querySelector('.js-path_path');
//var pathImg = $('.js-path');
//console.log(pathImg[0]);
//var pathLength = path.getTotalLength();
//window.addEventListener("scroll", function(e) {
// 
//  // What % down is it? 
//  // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
//  // Had to try three or four differnet methods here. Kind of a cross-browser nightmare. parseInt(pathImg[0]['attributes'][2].nodeValue)
//  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (pathImg.height() - document.documentElement.clientHeight / 2);
//    
//  // Length to offset the dashes
//  var drawLength = pathLength * scrollPercentage;
//  console.log(drawLength);
//  // Draw in reverse
//  path.style.strokeDashoffset = pathLength - drawLength;
//    
//  // When complete, remove the dash array, otherwise shape isn't quite sharp
// // Accounts for fuzzy math
//  if (scrollPercentage >= 0.99) {
//    path.style.strokeDasharray = "none";
//    
//  } else {
//    path.style.strokeDasharray = pathLength + ' ' + pathLength;
//  }
//  
//});

var myline = $('.js-path_path').get(0);
var length = myline.getTotalLength();
var pathImg = $('.js-path');
myline.style.strokeDasharray = length;
myline.style.strokeDashoffset = length;
window.addEventListener("scroll", myFunction);

function myFunction() {
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (pathImg.height() - document.documentElement.clientHeight / 2);
  var draw = length * scrollpercent;
  myline.style.strokeDashoffset = length - draw;
  endPoint = myline.getPointAtLength(draw);
}

