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
    endPoint = myline[size].getPointAtLength(draw);
}
