var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var path = "/js/games/who-killed-oetzi/";

function loadImage (url) {
  var img = new Image();
  img.src = url
  img.onload = function () {
    ctx.drawImage(img, 430, 150, 80,80);
  }
}

function main() {
  ctx.fillRect(0,0,canvas.width,canvas.height);
  loadImage(path+"oetzi.svg");
}

main();
