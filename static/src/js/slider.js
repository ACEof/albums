let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);
let next = document.getElementById('next');
let previous = document.getElementById('previous');

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showing';
}

let playing = true;
let pauseButton = document.getElementById('pause');

function pauseSlideshow(){
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow(){
  pauseButton.innerHTML = 'Pause';
  playing = true;
  slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function(){
  if(playing){ pauseSlideshow(); }
  else{ playSlideshow(); }
};

next.onclick = function() {
  pauseSlideshow();
  nextSlide();
};

previous.onclick = function() {
  pauseSlideshow();
  previousSlide();
};