var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');


btn = document.querySelector('button');
var overlay = document.querySelector('.display');



for(var i = 1; i <= 11; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'img/img' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    var imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc);
  }
}

document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===84){
        example();
    }
}

function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
}



btn.onclick = function() {
  var btnClass = btn.getAttribute('class'); 
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    displayedImage.style.opacity = '0.5';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    displayedImage.style.opacity = '1';
  }
}

