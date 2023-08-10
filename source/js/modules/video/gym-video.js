const findAllVideos = () => {
  let videos = document.querySelectorAll('[data-video]');
  videos.forEach(setupVideo);
};

function setupVideo(video) {
  let link = video.querySelector('[data-video-link]');
  let media = video.querySelector('[data-video-media]');
  let button = video.querySelector('[data-video-button]');
  let id = parseMediaURL(media);
  let currentIframe = null;
  let isActive = false;

  video.addEventListener('click', () => {
    if (!isActive) {
      let iframe = createIframe(id);
      currentIframe = iframe;

      link.remove();
      button.remove();
      video.classList.remove('is-disabled');
      video.classList.add('is-active');
      video.appendChild(iframe);

      isActive = true;
    } else {

      video.classList.remove('is-active');
      video.classList.add('is-disabled');

      if (currentIframe) {
        currentIframe.remove();
      }

      isActive = false;
    }

    link.removeAttribute('href');
  });

  if (currentIframe) {
    currentIframe.addEventListener('pause', () => {
      video.classList.add('is-disabled');
    });
  }
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

export {findAllVideos};
