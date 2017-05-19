var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');


opacitybtn = document.getElementById('opac');
upbtn = document.getElementById('updir');
downbtn = document.getElementById('downdir');
var overlay = document.querySelector('.display');

var images=[];
for(var i=1;i <=11;i++){
  images.push('img/img'+ i+ '.jpg');
}

for(var i = 1; i <= 11; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'img/img' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    var imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc);
  }
}

/*
.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===84){
        var imgSrc1 = e.target.('img/img1.jpg');
        displayImage(imgSrc1);
    }}
*/
/*
function keyListener(event){ 
    //whatever we want to do goes in this block
    event = event || window.event; //capture the event, and ensure we have an event
    var key = event.key || event.which || event.keyCode; //find the key that was pressed
    //MDN is better at this: https://developer.mozilla.org/en-US/docs/DOM/event.which
    if(key===84){ //this is for 'T'
        alert("hello");
    }
  }
  */

function checkKey(e) {
    e = e || window.event;
    var key = event.key || event.which || event.keyCode;
    if (key==38){
      upimage();
}
}

document.onkeydown = checkKey;
function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
}



opacitybtn.onclick = function() {
  var btnClass = opacitybtn.getAttribute('class'); 
  if(btnClass === 'dark') {
    opacitybtn.setAttribute('class','light');
    opacitybtn.textContent = 'Lighten';
    displayedImage.style.opacity = '0.5';
  } else {
    opacitybtn.setAttribute('class','dark');
    opacitybtn.textContent = 'Darken';
    displayedImage.style.opacity = '1';
  }
}

upbtn.onclick=function(){
  upimage();
}
function upimage(){
  var current = displayedImage.getAttribute('src');
  var index = images.indexOf(current)- 1;
  if (index== -1){
    displayImage(images[10]);
  }
else{
  displayImage(images[index]);
}
}

downbtn.onclick=function(){
  var current = displayedImage.getAttribute('src');
  var index = images.indexOf(current)+ 1;
  if (index== 11){
    displayImage(images[0]);
  }
else{
  displayImage(images[index]);
}
}