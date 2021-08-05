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

var picture = document.querySelector(".overlay-container")

picture.addEventListener("mousedown", initialClick, false);
picture.addEventListener("mouseup", stopClick, false);

var moving = false;

function move(e){

  var newX = e.clientX - 10;
  var newY = e.clientY - 10;

  image.style.left = newX + "px";
  image.style.top = newY + "px";

  
}

function initialClick(e) {

  image = this;
  document.addEventListener("mousemove", move, false);
}

function stopClick(e) {
  document.removeEventListener("mousemove", move);
}