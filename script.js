$(document).ready(function() {
  var images = ['/city.jpg', '/computer.jpg', '/investment.jpg'];
  var currentIndex = 0;

  function changeBackground() {
    $('#hero').css('background-image', 'url(' + images[currentIndex] + ')');
    currentIndex = (currentIndex + 1) % images.length;
  }

  changeBackground(); // Set initial background

  setInterval(changeBackground, 5000); // Change background every 5 seconds
});
