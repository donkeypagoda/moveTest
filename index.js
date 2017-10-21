console.log("bullshit");


var path = anime.path('#motionPath path');

var motionPath = anime({
  targets: '#motionPath .el',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true,
  update: function(anim) {
    // updateLogEl.value = 'current time : ' + Math.round(anim.currentTime) + 'ms';
    // progressLogEl.value = 'progress : ' + Math.round(anim.progress) + '%';
    // console.log(anim.currentTime);
  }
});
console.log(motionPath)
