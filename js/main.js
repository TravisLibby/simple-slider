var speed = 250;
var minLeftPos = 0;
var currLeftPos = 0;
var minLeftPos = 0;
var maxLeftPos = -800;

// Hide prev arrow to start
$('#prev').hide();

// Prev Button
$('#prev').on('click', function() {
  if (!isAnimating() && currLeftPos !== minLeftPos) {
    $('#slider').animate({
      left: '+=400'
    }, speed, function() {
      currLeftPos += 400;
      if (currLeftPos === minLeftPos) {
        $('#prev').hide();
      }
    });
  }
});

// Next Button
$('#next').on('click', function() {
  $('#prev').show();
  if (!isAnimating() && currLeftPos === maxLeftPos) {
    $('#slider').animate({
      left: '+=800'
    }, speed, function() {
      currLeftPos = 0;
      $('#prev').hide();
    });
  }
  if (!isAnimating() && currLeftPos !== maxLeftPos) {
    $('#slider').animate({
      left: '-=400'
    }, speed, function() {
      currLeftPos -= 400;
    });
  }
});

function isAnimating() {
  return $('#slider').is(':animated') ? true : false;
}