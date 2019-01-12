window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function(){
    var v = document.getElementById('v');
    document.addEventListener('scroll', function(){
      if (v.paused && (window.scrollY > 10)) {
        v.play();
      }
    })
});
