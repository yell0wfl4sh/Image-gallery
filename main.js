var displayedImage = document.querySelector('#image');
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
  downimage();
}
function downimage(){
  var current = displayedImage.getAttribute('src');
  var index = images.indexOf(current)+ 1;
  if (index== 11){
    displayImage(images[0]);
  }
else{
  displayImage(images[index]);
}
}


function changeImg(e){
  if(e.keyCode=="38"){
    upimage();
  }
  if(e.keyCode=="40"){
    downimage();
  }
}

window.addEventListener(`keydown`,changeImg);



//*********Controls**********
const inputs = document.querySelectorAll(`.controls input`);
function updateValue(){
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach(input => input.addEventListener('change',updateValue));
inputs.forEach(input => input.addEventListener('mousemove',updateValue));