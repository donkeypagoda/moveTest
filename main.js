var firstTime = true;
let base = document.getElementById("root")

$('g').hover(
  function() {
    $(this).find('animateMotion').attr('dur', '3s');
    if (firstTime) {
      firstTime = false;
      return;
    }
    document.getElementById("root").setCurrentTime(
    document.getElementById("root").getCurrentTime() * 3 / 7);
  },
  function() {
    $(this).find('animateMotion').attr('dur', '7s');
    document.getElementById("root").setCurrentTime(
    document.getElementById("root").getCurrentTime() * 7 / 3);      }
);
