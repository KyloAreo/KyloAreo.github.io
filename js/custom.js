// rotate helmet

$(document).ready(function () {
    DoRotate(360);
    AnimateRotate(360);
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



// google maps
function initMap() {
  var uluru = {lat: 43.64186, lng: -79.41126};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
