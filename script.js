function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var x = 0;
var r = $('body').height() / 3,origr = r;

f = function(x) {

    if (r*r - x*x > 0) {
      return [x,Math.sqrt(r*r- x*x)]
    }
    else if (Math.sqrt(r*r- (2*r-x)*(2*r-x))) {
        return [2*r-x,-Math.sqrt(r*r- (2*r-x)*(2*r-x))]
    }

    else {

        r -= rnd(-8,8)*10;

        if (x >= r*3) {
            console.warn(1);
      window.x = 0-r+1;
        }
        else if (x <= 0-r) {
            console.warn(2);
      window.x = x + 4*r;
        }
      return f(window.x);
    }

};

$(function(){

    var canvas = document.getElementById("canvas");
    canvas.width = $('body').width();
    canvas.height = $('body').height();
var ctx = canvas.getContext("2d");

    $('canvas').on('mousewheel', function(event) {

    console.log(event.deltaX, event.deltaY, event.deltaFactor, f(x));

        x += -1 * event.deltaY*2;

        var r = rnd(1,30),g = rnd(1,30),b = rnd(1,30);
        var a = rnd(100,255);

        ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
        ctx.beginPath();
           ctx.arc($('body').height()/2+f(x)[0], $('body').height()/2+f(x)[1], rnd(1,10), 0, 2 * Math.PI, false);
        ctx.fill();


    });


})
