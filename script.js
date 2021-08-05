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

var picture = document.querySelector(".overlay-container")

picture.addEventListener("touchstart", initialClick);
picture.addEventListener("touchend", stopClick);

var moving = false;

function move(e){

  var touch = e.targetTouches[0];

  var newX = touch.pageX;
  var newY = touch.pageY-$("#overlay").height()/2;

  picture.style.left = newX + "px";
  picture.style.top = newY + "px";

}

function initialClick(e) {

  image = this;
  document.addEventListener("touchmove", move);
  document.querySelector("body").style.setProperty("background-color","red")
}

function stopClick(e) {
  document.removeEventListener("touchmove", move);
  document.querySelector("body").style.setProperty("background-color","white")
}


//button presses. Size adjustments

var size = $("#overlay").width()

$("#plus").click(function(){
  if(size<$("#videoElement").width()-50){
    size+=50
  }
  $("#overlay").width(size)
})

$("#minus").click(function(){
  if(size>50){
    size-=50
  }

  $("#overlay").width(size)
})