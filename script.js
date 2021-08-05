//stop scrolling

// document.body.addEventListener('touchmove', function(event) {
//   event.preventDefault();
// }, false); 


var video = document.querySelector("#videoElement");


//Video Code

video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.setAttribute('playsinline', '');

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
        facingMode: 'environment'
      }
  })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}


function stop(e) {
  var stream = video.srcObject;
  var tracks = stream.getTracks();

  for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    track.stop();
  }

  video.srcObject = null;
}




//Picture movement Code

var picture = document.querySelector(".overlay-image")

picture.addEventListener("touchstart", initialClick);
picture.addEventListener("touchend", stopClick);

var moving = false;

function move(e){

  var touch = e.targetTouches[0];

  var newX = touch.pageX - 615;
  var newY = touch.pageY - 235;

  picture.style.left = newX + "px";
  picture.style.top = newY + "px";

}

function initialClick(e) {

  image = this;
  document.addEventListener("touchmove", move);
  console.log("touched")
}

function stopClick(e) {
  document.removeEventListener("touchmove", move);
}