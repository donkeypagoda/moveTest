var dagen = -1;
var multiplier = 30;
function speed($this){
  console.log($this.value);
  multiplier = $this.value;
  document.getElementById('snelheidDisplay').innerHTML = multiplier;
  //alert(speedSetting);
  //return per;
}
function periode(bolletje){
  if (bolletje == 'zon'){var per = (multiplier*24/2);}
  if (bolletje == 'maan'){var per = (multiplier*24*29.5/2);}
  return per;
}
function step(delta) {
  elem.style.height = 100*delta + '%'
}
function animate(opts) {
  var start = new Date
  var id = setInterval(function() {
    var timePassed = new Date - start
    var progress = timePassed / opts.duration
    if (progress > 1) progress = 1
    var delta = opts.delta(progress)
    opts.step(delta)
    if (progress == 1) {
      clearInterval(id)
    }
  }, opts.delay || 10)

}
function terugweg(element, delta, duration) {
  var to = -300;
  var bolletje = element.getAttribute('id');
  per = periode(bolletje);
  document.getElementById(bolletje).style.background='transparent';
  animate({
    delay: 0,
    duration: duration || per,
    //1 sec by default
    delta: delta,
    step: function(delta) {
      element.style.left = ((to*delta)+300) + "px"
    }
  });
  bolletje = element;
  setTimeout(function (element) {
    move(bolletje, function(p) {return p})
  }, per);
}
function move(element, delta, duration) {
  var to = 300;
  var bolletje = element.getAttribute('id');
  per = periode(bolletje);
  document.getElementById(bolletje).style.background='yellow';
  animate({
    delay: 0,
    duration: duration || per,
    //1 sec by default
    delta: delta,
    step: function(delta) {
      element.style.left = to*delta + "px"
    }
  });
  if(bolletje == 'zon'){
    dagen ++;
  }
  document.getElementById('dagen').innerHTML = dagen;
  bolletje = element;
  setTimeout(function (element) {
    terugweg(bolletje, function(p) {return p})
  }, per);
}
