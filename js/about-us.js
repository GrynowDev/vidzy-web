var swiper = new Swiper(".aboutGallery", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      480: {
        slidesPerView:2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween:20,
      },     
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween:20,
      },
      1200: {
        slidesPerView:3.5,
        spaceBetween:30,
      },    
    },
  });
  
var aboutUsVideoPlayer = videojs('about-us-video',  function () {
    this.preload = "auto";
  });
  
  
  aboutUsVideoPlayer.on('touchend', function (e) { return handleTouchEvent(e)});
  
  aboutUsVideoPlayer.on('play', function () { return onPlay(this, 'about-us-play')});
  
  aboutUsVideoPlayer.on('pause', function () { return onPause(this,'about-us-play')});


  function handleTouchEvent(e) {
    const video = e.target;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
}

function onPause(context, playBtnId) {
    console.log("on pause called")
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
    let video = document.getElementById(videoId).childNodes[0];
    let playBtn = document.getElementById(playBtnId);
    await video.play();
    playBtn.style.visibility = "hidden";
  };