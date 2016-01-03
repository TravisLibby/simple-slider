var speed = 250;
var minLeftPos = 0;
var currLeftPos = 0;
var maxLeftPos = -800;

$('#prev').on('click', function() {
  if (!isAnimating() && currLeftPos !== minLeftPos) {
    $('#slider').animate({
      left: '+=400'
    }, speed, function() {
      currLeftPos += 400;
    });
  }
});

$('#next').on('click', function() {
  if (!isAnimating() && currLeftPos !== maxLeftPos) {
    $('#slider').animate({
      left: '-=400'
    }, speed, function() {
      currLeftPos -= 400;
      console.log(currLeftPos);
    });
  }
});

function isAnimating() {
  return $('#slider').is(':animated') ? true : false;
}