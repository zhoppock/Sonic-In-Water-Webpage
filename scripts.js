var audio = document.getElementById("myaudio");
audio.volume = 0.1;

var focused = true;
document.addEventListener("visibilitychange", function () {
focused = !focused;
if (!focused)
    document.getElementById("myaudio").pause();
else if (focused)
    document.getElementById("myaudio").play();
});
window.addEventListener('focus', function () {
    console.log('has focus');
    document.getElementById("myaudio").play();
});
window.addEventListener('blur', function () {
    console.log('lost focus');
    document.getElementById("myaudio").pause();
});

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

function popup_noise(){
  var popup_sound = new Audio('./audio/Underwater Air timer.wav');
  popup_sound.volume = 0.1;
  popup_sound.play();
}

function new_sonic_page(){
  var warp = new Audio('./audio/Special stage warp.wav');
  warp.volume = 0.1;
  warp.play();
}

function new_email(){
  var email = new Audio('./audio/Checkpoint.wav');
  email.volume = 0.1;
  email.play();
}

function mute_unmute() {
    var x = document.getElementById("myaudio");
    if (x.innerHTML === "Mute") {
      x.innerHTML = "Unmute";
      audio.volume = 0.1;
      // Function to mute
    } else {
      x.innerHTML = "Mute";
      audio.volume = 0;
      var stop = new Audio('./audio/Skid.wav');
      stop.volume = 0.1;
      stop.play();
   // Function to unmute
    }
  }

var bubble_sound = new Audio('./audio/Air Bubble.wav');
bubble_sound.volume = 0.05;

"use strict";
var element1 = document.getElementById("bub1");
element1.addEventListener("click", function(e){
  e.preventDefault;
  element1.classList.remove("bubble1");
  bubble_sound.play();
  void element1.offsetHeight;
  element1.classList.add("bubble1");
}, false);

"use strict";
var element2 = document.getElementById("bub2");
element2.addEventListener("click", function(e){
  e.preventDefault;
  element2.classList.remove("bubble2");
  bubble_sound.play();
  void element2.offsetHeight;
  element2.classList.add("bubble2");
}, false);

"use strict";
var element3 = document.getElementById("bub3");
element3.addEventListener("click", function(e){
  e.preventDefault;
  element3.classList.remove("bubble3");
  bubble_sound.play();
  void element3.offsetHeight;
  element3.classList.add("bubble3");
}, false);

"use strict";
var element4 = document.getElementById("bub4");
element4.addEventListener("click", function(e){
  e.preventDefault;
  element4.classList.remove("bubble4");
  bubble_sound.play();
  void element4.offsetHeight;
  element4.classList.add("bubble4");
}, false);

"use strict";
var element5 = document.getElementById("bub5");
element5.addEventListener("click", function(e){
  e.preventDefault;
  element5.classList.remove("bubble5");
  bubble_sound.play();
  void element5.offsetHeight;
  element5.classList.add("bubble5");
}, false);

"use strict";
var element6 = document.getElementById("bub6");
element6.addEventListener("click", function(e){
  e.preventDefault;
  element6.classList.remove("bubble6");
  bubble_sound.play();
  void element6.offsetHeight;
  element6.classList.add("bubble6");
}, false);

"use strict";
var element7 = document.getElementById("bub7");
element7.addEventListener("click", function(e){
  e.preventDefault;
  element7.classList.remove("bubble7");
  bubble_sound.play();
  void element7.offsetHeight;
  element7.classList.add("bubble7");
}, false);

"use strict";
var element8 = document.getElementById("bub8");
element8.addEventListener("click", function(e){
  e.preventDefault;
  element8.classList.remove("bubble8");
  bubble_sound.play();
  void element8.offsetHeight;
  element8.classList.add("bubble8");
}, false);