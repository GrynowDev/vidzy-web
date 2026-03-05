function handleTouchEvent(e) {
  const video = e.target;
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function onPause(context, playBtnId) {
const playBtn = document.getElementById(playBtnId);
playBtn.style.visibility = "visible";
}

function onPlaying(context) {
const playBtn = context.children_[0].parentElement.nextSibling;
playBtn.style.visibility = "hidden";
}

function onPlay(context, playBtnId) {
const playBtn = document.getElementById(playBtnId);
const video = context.children_[0]
document.querySelectorAll("video").forEach((vid) => {
  if (!vid.paused && vid.id !== video.id) {
    vid.pause();
    vid.currentTime = 0
  }
});
playBtn.style.visibility = "hidden";
}

const playVideo = async (videoId, playBtnId) => {
let video = document.getElementById(videoId);
console.log('video ', video);
let playBtn = document.getElementById(playBtnId);
await video.play();
playBtn.style.visibility = "hidden";
};

const onVideoClick = (playBtnId, videoId) => {
  const playBtnElement = document.getElementById(playBtnId);
  const video = document.getElementById(videoId);
  if (playBtnElement && playBtnElement.style.visibility === 'hidden') {
    playBtnElement.style.visibility = 'visible'
    video.pause()
    video.currentTime = 0
  }
}

document.addEventListener("DOMContentLoaded", function() {
let lazyVideos = [...document.querySelectorAll("video.lazy")]

if ("IntersectionObserver" in window) {
  let lazyVideoObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(video) {
      if (video.isIntersecting) {
        for (let source in video.target.children) {
          let videoSource = video.target.children[source];
          if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
            videoSource.src = videoSource.dataset.src;
          }
        }

        video.target.load();
        video.target.classList.remove("lazy");
        lazyVideoObserver.unobserve(video.target);
      }
    });
  });

  lazyVideos.forEach(function(lazyVideo) {
    lazyVideoObserver.observe(lazyVideo);
  });
}
});