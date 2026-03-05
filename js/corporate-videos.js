

const playVideobyBtn = async (videoId, playBtnId) => {
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