var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var path = "/js/games/who-killed-oetzi/";
var canvasWidth = 512;

function Otzi (url, x, y, width, height) {
  var img = new Image();
  img.src = path+url
  this.draw = function () {
    ctx.drawImage(img, x, y, width, height);
  }
}

function Arrow(y, scale, speed){
  var stemLen = 366;
  var offset = stemLen * scale - stemLen;
  var stem = 43.872186 + offset;
  var arrowHead1 = 417.10211 + offset;
  var arrowHead2 = 429.86946 + offset;
  var arrowHead3 = 422.69917 + offset;
  var width = 512 * scale;
  this.x = -2-offset/2;
  this.y = y + -29*scale;
  var arrowSVG = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <svg
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:cc="http://creativecommons.org/ns#"
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:svg="http://www.w3.org/2000/svg"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
     xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
     id="Layer_1"
     height="512"
     viewBox="0 0 512 512"
     width="512"
     data-name="Layer 1"
     version="1.1"
     sodipodi:docname="arrow.svg"
     inkscape:export-filename="/Users/etiene/Downloads/arrow.png"
     inkscape:export-xdpi="96"
     inkscape:export-ydpi="96"
     inkscape:version="1.0.1 (c497b03c, 2020-09-10)">
    <metadata
       id="metadata41">
      <rdf:RDF>
        <cc:Work
           rdf:about="">
          <dc:format>image/svg+xml</dc:format>
          <dc:type
             rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        </cc:Work>
      </rdf:RDF>
    </metadata>
    <defs
       id="defs39" />
    <sodipodi:namedview
       pagecolor="#ffffff"
       bordercolor="#666666"
       borderopacity="1"
       objecttolerance="10"
       gridtolerance="10"
       guidetolerance="10"
       inkscape:pageopacity="0"
       inkscape:pageshadow="2"
       inkscape:window-width="1575"
       inkscape:window-height="967"
       id="namedview37"
       showgrid="false"
       inkscape:zoom="1.609375"
       inkscape:cx="173.11181"
       inkscape:cy="253.09275"
       inkscape:window-x="0"
       inkscape:window-y="23"
       inkscape:window-maximized="0"
       inkscape:current-layer="Layer_1" />
    <path
       d="m 71.659157,184.88232 -24.754917,-0.0279 -21.820721,21.99536 24.750722,0.0316 z"
       fill="#f3ce7d"
       id="path10"
       style="stroke-width:0.563388" />
    <path
       d="m 99.263315,184.9185 -27.604158,-0.0361 -21.824916,21.99908 27.608346,0.0324 z"
       fill="#eb7288"
       id="path12"
       style="stroke-width:0.563388" />
    <path
       d="m 124.80452,184.94864 -25.541205,-0.0301 -21.820728,21.99537 25.532753,0.0301 z"
       fill="#bad79d"
       id="path14"
       style="stroke-width:0.563388" />
    <path
       d="m 99.263315,184.9185 25.541205,0.0301 0.29721,-0.30322 -22.45875,-22.35844 -25.537022,-0.0338 22.458764,22.35844 z"
       fill="#9cb284"
       id="path16"
       style="stroke-width:0.563388" />
    <path
       d="m 71.659157,184.88232 27.604158,0.0361 0.301407,-0.30693 -22.458764,-22.35844 -27.608345,-0.0324 22.458769,22.35844 z"
       fill="#c15b71"
       id="path18"
       style="stroke-width:0.563388" />
    <path
       d="m 71.956382,184.57909 -22.458769,-22.35844 -24.750722,-0.0316 22.458739,22.35846 -0.30139,0.30694 24.754917,0.0279 z"
       fill="#c9a96b"
       id="path20"
       style="stroke-width:0.563388" />
    <path
       d="m ${stem},188.06929 366.183398,0.39394 -0.0877,-6.37027 -366.184184,-0.39394 z"
       fill="#ccd3df"
       id="stem"
       style="stroke-width:0.631569"/>
    <path
        d="m 43.872186,188.06929 366.183398,0.39394 -0.0877,-6.37027 -366.184184,-0.39394 z"
        fill="#ccd3df"
        id="stem2"
        style="stroke-width:0.631569"/>
    <path
       d="m 135.18931,171.906 a 3.5880935,3.1845807 2.3774565 0 0 -2.63312,-5.42462 l -3.16709,0.0165 a 3.5881902,3.1846665 2.3774603 0 0 0.11293,6.37067 l 3.1671,-0.0165 a 3.5767311,3.1744961 2.3774598 0 0 2.52021,-0.9461 z"
       fill="#d4e1f4"
       id="path24"
       style="stroke-width:0.563388" />
    <path
       d="m 236.95203,171.37411 a 3.5880935,3.1845807 2.3774565 0 0 -2.63309,-5.42387 l -89.80285,0.46869 a 3.5881898,3.1846662 2.3774577 0 0 0.11293,6.3707 l 89.80327,-0.46909 a 3.5785252,3.1760886 2.3774565 0 0 2.51977,-0.94643 z"
       fill="#d4e1f4"
       id="path26"
       style="stroke-width:0.563388" />
    <path
       d="m ${arrowHead1},208.08161 -16.93848,-23.28826 16.58822,-23.23085 61.51085,23.33687 z"
       fill="#efeffa"
       id="path28"
       style="stroke-width:0.563388" />
    <path
       d="m ${arrowHead2},184.83565 -13.08734,-23.27315 -16.58822,23.23085 16.93848,23.28826 z"
       fill="#c0c5d9"
       id="path30"
       style="stroke-width:0.563388" />
    <path
       d="m ${arrowHead1},208.08161 5.58379,-10.19081 44.93057,-17.03037 10.64623,4.03894 z"
       fill="#dadae8"
       id="path32"
       style="stroke-width:0.563388" />
    <path
       d="m ${arrowHead3},197.8908 -5.58379,10.19081 -16.93848,-23.28826 6.32078,-8.85177 16.01575,22.01962 z"
       fill="#a6abbc"
       id="path34"
       style="stroke-width:0.563388" />
  </svg>`;

    var img = new Image();
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(arrowSVG);


    this.draw = function (){
      this.x += 1*speed;
      if(this.x >= 390)
        this.x = -100*scale;

      ctx.drawImage(img, this.x, this.y, 100*scale+offset, 100*scale);
    }

}

function main(){
  var otzi = new Otzi("oetzi.svg", 420, 100, 100, 100);
  var arrow = new Arrow(130, 1, 5);
  var draw = function() {
    //Black Rectangle for the background
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    otzi.draw();
    arrow.draw();
    requestAnimationFrame(draw);
  }
  draw();
}
main();
