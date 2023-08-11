let video = document.querySelector('.video__content');
let videoBtn = document.querySelector('.video__button');

function videoBtnOnclick() {
  if (video.paused) {
    video.play();
    videoBtn.style.display = 'none';
  } else {
    video.pause();
  }
}

function videoOnclick() {
  video.pause();
  videoBtn.style.display = 'block';
}

if (video) {
  video.addEventListener('click', videoOnclick);
  videoBtn.addEventListener('click', videoBtnOnclick);
}
