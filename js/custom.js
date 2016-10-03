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
