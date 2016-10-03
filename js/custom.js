$(document).ready(function () {
    DoRotate(360);
    AnimateRotate(360);
    hideShip();
});

function DoRotate(d) {
    $(".helmet").css({
        transform: 'rotate(' + d + 'deg)'
    });

}

function AnimateRotate(d){
    var elem = $(".helmet");

    $({deg: 0}).animate({deg: d}, {
        duration: 758000,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}

function hideShip() {
  if($(".spaceship").hasClass("animated")){
    console.log("has class aniamte");
  }
  else {
      console.log("no class");
  }
}
