function readMoreLess() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  
  // testimonial slider
  // var swiper = new Swiper(".testimonialSwiper", {
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   freeMode: true,
  //   pagination: {
  //     // el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   autoplay: {
  //     delay: 2000,
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1.4,
  //       spaceBetween: 10,
  //     },
  //     480: {
  //       slidesPerView: 1.4,
  //       spaceBetween:15,
  //     },
  //     576: {
  //       slidesPerView: 2,
  //       spaceBetween:15,
  //     },    
  //     768: {
  //       slidesPerView: 2.5,
  //       spaceBetween:15,
  //     },
  //     1200: {
  //       slidesPerView:3,
  //       spaceBetween:15,
  //     },    
  //   },
  // });
  
  // steps swiper
  
  var swiper = new Swiper(".stepsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      // el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween:15,
      },     
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween:30,
      },
      1200: {
        slidesPerView:4,
        spaceBetween:30,
      },    
    },
  });
  
  const buildSwiperSlider = sliderElm => {
    return new Swiper(`#${sliderElm.id}`, {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      slidesPerGroup: 1,
      pagination: {
        // el: `.swiper-pagination-${sliderElm.id}`,
        // clickable: true,
      },
        navigation: {
            nextEl: `.swiper-button-next-${sliderElm.id}`,
            prevEl: `.swiper-button-prev-${sliderElm.id}`
        },
        breakpoints: {
          320: {
            slidesPerView: 1.4,
            spaceBetween:0,
          },
          576: {
            slidesPerView: 2,
            spaceBetween:0,
          },    
          768: {
            slidesPerView: 2.5,
            spaceBetween:15,
          },
          992: {
            slidesPerView: 3,
            spaceBetween:15,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween:0,
          },    
        },
    });
  
  }
  
  // Get all of the swipers on the page
  const allSliders = document.querySelectorAll('.influencers-video-swiper');
  
  // Loop over all of the fetched sliders and apply Swiper on each one.
  allSliders.forEach(slider => buildSwiperSlider(slider));
  
  
  // client slider
  var swiper = new Swiper(".clientSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      // el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      320: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      992: {
        slidesPerView:7.5,
        spaceBetween:25,
      },    
    },
  });
  
  // slider with tabs
  var swiper = new Swiper(".tabsSlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      // el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  
  const playMainVideo = (vidId) => {
    let parent = document.getElementById(vidId);
    let video = parent.childNodes[0];
    const playBtn = document.getElementById("main-video-play-btn");
    if (!video.paused) {
    video.play();
    playBtn.style.visibility = "hidden";
    } else {
      video.pause();
      playBtn.style.visibility = "visible";
    }
  }
  
  const playMainVideoFromButton = (vidId) => {
    let parent = document.getElementById(vidId);
    let video = parent.childNodes[0];
    const playBtn = document.getElementById("main-video-play-btn");
    console.log("video ", video);
    console.log("video paused", video.paused);
    if (video.paused) {
    video.play();
    playBtn.style.visibility = "hidden";
    } else {
      video.pause();
      playBtn.style.visibility = "visible";
    }
  }
  
  const playVideo = async (videoId) => {
    let video = document.getElementsByClassName(videoId);
    console.log("video ", video);
    if (!video[0].player) {
      video = video[1].childNodes[0]
    } else {
      video = video[0].childNodes[0]
    }
    const playBtn = video.parentElement.nextSibling;
    await video.play();
    playBtn.style.visibility = "hidden";
  };
  
  // Beauty
  const videos = 
    {
      "fashion": [
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/8dbefc6f-2268-4c59-a3f0-efe07f04f744/MP4/jewel-kart.mp4",
      id: "fashion-video-one",
      classes: "video-js vjs-default-skin fashion-video1",
      parentId: "fashion",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/8dbefc6f-2268-4c59-a3f0-efe07f04f744/Thumbnails/22.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/59e2313a-2acb-42da-90e9-89015b903111/brand-logo/Filo.png"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/0bb5bb9a-577f-46a5-a7bc-ed3eef650e72/MP4/FabAlley.mp4",
      id: "fashion-video-two",
      classes: "video-js vjs-default-skin fashion-video2",
      parentId: "fashion",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/0bb5bb9a-577f-46a5-a7bc-ed3eef650e72/Thumbnails/111.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/59e2313a-2acb-42da-90e9-89015b903111/brand-logo/Filo.png"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/b8298c19-f4e7-43b1-aa56-bc84a263509d/MP4/Zivame.mp4",
      id: "fashion-video-three",
      classes: "video-js vjs-default-skin fashion-video3",
      parentId: "fashion",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/b8298c19-f4e7-43b1-aa56-bc84a263509d/Thumbnails/4 Zivame-@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/b8298c19-f4e7-43b1-aa56-bc84a263509d/brand-logo/4 Zivame--.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/5280d704-4ffb-4096-954d-97a6f42b7cdd/MP4/Urbanic.mp4",
      id: "fashion-video-four",
      classes: "video-js vjs-default-skin fashion-video4",
      parentId: "fashion",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/5280d704-4ffb-4096-954d-97a6f42b7cdd/Thumbnails/5 Urbanic@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/5280d704-4ffb-4096-954d-97a6f42b7cdd/brand-logo/5 Urbanic-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/3e8b35f6-061e-41ac-a476-c567180b17b8/MP4/HnM.mp4",
      id: "fashion-video-five",
      classes: "video-js vjs-default-skin fashion-video5",
      parentId: "fashion",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/3e8b35f6-061e-41ac-a476-c567180b17b8/Thumbnails/6 HnM@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/3e8b35f6-061e-41ac-a476-c567180b17b8/brand-logo/6 HnM-.webp"
    },
    // {
    //   url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/291e79a9-b139-48d3-a3e2-15e6015a8da7/MP4/Shayagram.mp4",
    //   id: "fashion-video-six",
    //   classes: "video-js vjs-default-skin fashion-video6",
    //   parentId: "fashion",
    //   poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/291e79a9-b139-48d3-a3e2-15e6015a8da7/Thumbnails/7 Shayagram@.webp",
    //   brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/291e79a9-b139-48d3-a3e2-15e6015a8da7/brand-logo/7 Shayagram-.webp"
    // },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/7edefeca-3934-48eb-8803-e9e26156b194/MP4/Flipkart.mp4",
      id: "fashion-video-seven",
      classes: "video-js vjs-default-skin fashion-video7",
      parentId: "fashion",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/7edefeca-3934-48eb-8803-e9e26156b194/Thumbnails/8 Flipkart @.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/7edefeca-3934-48eb-8803-e9e26156b194/brand-logo/8 Flipkart-.webp"
    }
  ],
  "beauty": [
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/7c5ad8ce-4be5-4bb4-a7af-d6f1629baf60/MP4/VaselineIndia.mp4",
      id: "beauty-video-one",
      classes: "video-js vjs-default-skin beauty-video1",
      parentId: "beauty",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/7c5ad8ce-4be5-4bb4-a7af-d6f1629baf60/Thumbnails/1 VaselineIndia@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/7c5ad8ce-4be5-4bb4-a7af-d6f1629baf60/brand-logo/1 VaselineIndia.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/cf10ebd3-01ae-499b-9a15-0adcb589507b/MP4/lorealparis.mp4",
      id: "beauty-video-two",
      classes: "video-js vjs-default-skin beauty-video2",
      parentId: "beauty",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/cf10ebd3-01ae-499b-9a15-0adcb589507b/Thumbnails/2 LorealParis@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/cf10ebd3-01ae-499b-9a15-0adcb589507b/brand-logo/2 LorealParis.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/7551a597-ed02-417b-9ebc-659ff6dc0c8e/MP4/DermacoIndia.mp4",
      id: "beauty-video-three",
      classes: "video-js vjs-default-skin beauty-video3",
      parentId: "beauty",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/7551a597-ed02-417b-9ebc-659ff6dc0c8e/Thumbnails/4 DermacoIndia@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/7551a597-ed02-417b-9ebc-659ff6dc0c8e/brand-logo/4 DermacoIndia-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/0cada07d-0a23-4c6f-951c-f4c4b7ef30fb/MP4/DermacoIndia1.mp4",
      id: "beauty-video-four",
      classes: "video-js vjs-default-skin beauty-video4",
      parentId: "beauty",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/7edefeca-3934-48eb-8803-e9e26156b194/Thumbnails/8 Flipkart @.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/7edefeca-3934-48eb-8803-e9e26156b194/brand-logo/8 Flipkart-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/50e34092-ddba-486b-9e5a-9b2875438dc7/MP4/thebeautystorebybigbasket.mp4",
      id: "beauty-video-five",
      classes: "video-js vjs-default-skin beauty-video5",
      parentId: "beauty",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/50e34092-ddba-486b-9e5a-9b2875438dc7/Thumbnails/6 Thebeautystorebybigbas@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/50e34092-ddba-486b-9e5a-9b2875438dc7/brand-logo/6 Thebeautystorebybigbas-.webp"
    }
  ], 
  "edtech": [
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/2fd3fd53-993d-4302-807f-f1df003d988d/MP4/UpGrad.mp4",
      id: "edtech-video-one",
      classes: "video-js vjs-default-skin edtech-video1",
      parentId: "edtech",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/2fd3fd53-993d-4302-807f-f1df003d988d/Thumbnails/UpGrad.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/2fd3fd53-993d-4302-807f-f1df003d988d/brand-logo/1%20UpGrad.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/59e2313a-2acb-42da-90e9-89015b903111/MP4/Filo.mp4",
      id: "edtech-video-two",
      classes: "video-js vjs-default-skin edtech-video2",
      parentId: "edtech",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/59e2313a-2acb-42da-90e9-89015b903111/Thumbnails/Filo.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/59e2313a-2acb-42da-90e9-89015b903111/brand-logo/2 Filo.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/23f43c81-95de-436a-81a4-da483261ba5d/MP4/Edvoy-india.mp4",
      id: "edtech-video-three",
      classes: "video-js vjs-default-skin edtech-video3",
      parentId: "edtech",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/23f43c81-95de-436a-81a4-da483261ba5d/Thumbnails/Edvoy-India.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/23f43c81-95de-436a-81a4-da483261ba5d/brand-Logo/Edvoy-India.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/28585d17-d4c2-4db2-a28d-f9749d938c5a/MP4/UpGrad-2.mp4",
      id: "edtech-video-four",
      classes: "video-js vjs-default-skin edtech-video4",
      parentId: "edtech",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/28585d17-d4c2-4db2-a28d-f9749d938c5a/Thumbnails/UpGrad-2.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/28585d17-d4c2-4db2-a28d-f9749d938c5a/brand-logo/4 UpGrad-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/a7716350-5cdb-455d-8a82-0f7a3ac9010a/MP4/KnowledgeHut.mp4",
      id: "edtech-video-five",
      classes: "video-js vjs-default-skin edtech-video5",
      parentId: "edtech",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/a7716350-5cdb-455d-8a82-0f7a3ac9010a/Thumbnails/KnowledgeHut.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/a7716350-5cdb-455d-8a82-0f7a3ac9010a/brand-logo/5 KnowledgeHut-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/59744a82-0dc1-410e-99c1-77f12655cc33/MP4/Aismindia.mp4",
      id: "edtech-video-six",
      classes: "video-js vjs-default-skin edtech-video6",
      parentId: "edtech",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/59744a82-0dc1-410e-99c1-77f12655cc33/Thumbnails/Aismindia.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/59744a82-0dc1-410e-99c1-77f12655cc33/brand-logo/6 Aismindia-.webp"
    }
  ],
  "finance": [
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/3022d1a7-12ee-4f2e-8260-cb4701d05147/MP4/IndMoneyApp.mp4",
      id: "fin-video-one",
      classes: "video-js vjs-default-skin fin-video1",
      parentId: "finance",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/3022d1a7-12ee-4f2e-8260-cb4701d05147/Thumbnails/1 IndMoneyApp@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/3022d1a7-12ee-4f2e-8260-cb4701d05147/brand-logo/1 IndMoneyApp.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/388af3a9-ed61-42de-a07c-461efaa84cee/MP4/ClearfromClearTax.mp4",
      id: "fin-video-two",
      classes: "video-js vjs-default-skin fin-video2",
      parentId: "finance",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/388af3a9-ed61-42de-a07c-461efaa84cee/Thumbnails/2 ClearfromClearTax@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/388af3a9-ed61-42de-a07c-461efaa84cee/brand-logo/2 ClearfromClearTax.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/d7e6baf2-ab30-4933-91f9-dde11c9fae43/MP4/Jupiter-2.mp4",
      id: "fin-video-three",
      classes: "video-js vjs-default-skin fin-video3",
      parentId: "finance",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/d7e6baf2-ab30-4933-91f9-dde11c9fae43/Thumbnails/5 Jupiter@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/d7e6baf2-ab30-4933-91f9-dde11c9fae43/brand-logo/3 Jupiter.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/5eeed245-0455-49bf-bd33-3c1780a80ed4/MP4/boat.mp4",
      id: "fin-video-four",
      classes: "video-js vjs-default-skin fin-video4",
      parentId: "finance",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/5eeed245-0455-49bf-bd33-3c1780a80ed4/Thumbnails/6 Boat@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/5eeed245-0455-49bf-bd33-3c1780a80ed4/brand-logo/6%20Boat-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/78d29bbe-9d94-4b77-9a53-1e7dda77d1ae/MP4/5paisa.mp4",
      id: "fin-video-five",
      classes: "video-js vjs-default-skin fin-video5",
      parentId: "finance",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/78d29bbe-9d94-4b77-9a53-1e7dda77d1ae/Thumbnails/8 5paisa@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/78d29bbe-9d94-4b77-9a53-1e7dda77d1ae/brand-logo/8%205paisa-.webp"
    }
  ],
  "fitness": [
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/1aab44b8-e2c0-4597-a06d-092135e3713f/MP4/saffolafittify.mp4",
      id: "fit-video-one",
      classes: "video-js vjs-default-skin fit-video1",
      parentId: "fitness",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/1aab44b8-e2c0-4597-a06d-092135e3713f/Thumbnails/2 saffolafittify@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/1aab44b8-e2c0-4597-a06d-092135e3713f/brand-logo/2 saffolafittify.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/ff2c819f-375f-4593-826d-ef351ffdaedb/MP4/Scitron.mp4",
      id: "fit-video-two",
      classes: "video-js vjs-default-skin fit-video2",
      parentId: "fitness",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/ff2c819f-375f-4593-826d-ef351ffdaedb/Thumbnails/3 Scitron@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/ff2c819f-375f-4593-826d-ef351ffdaedb/brand-logo/3 Scitron.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/3bdcfe7e-11a2-41e7-ac65-2a4a886b656a/MP4/Nutrabox.mp4",
      id: "fit-video-three",
      classes: "video-js vjs-default-skin fit-video3",
      parentId: "fitness",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/3bdcfe7e-11a2-41e7-ac65-2a4a886b656a/Thumbnails/4 Nutrabox@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/3bdcfe7e-11a2-41e7-ac65-2a4a886b656a/brand-logo/4 Nutrabox-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/a11a002b-8144-46ad-b75e-81c53c5612e4/MP4/Avvatar.mp4",
      id: "fit-video-four",
      classes: "video-js vjs-default-skin fit-video4",
      parentId: "fitness",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/a11a002b-8144-46ad-b75e-81c53c5612e4/Thumbnails/5 Avvatar@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/a11a002b-8144-46ad-b75e-81c53c5612e4/brand-logo/5 Avvatar-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/043e790f-cf2f-40a4-8c88-93d78959e543/MP4/Muscle-Blaze.mp4",
      id: "fit-video-five",
      classes: "video-js vjs-default-skin fit-video5",
      parentId: "fitness",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/043e790f-cf2f-40a4-8c88-93d78959e543/Thumbnails/6 Muscle Blaze@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/043e790f-cf2f-40a4-8c88-93d78959e543/brand-logo/6 Muscle Blaze-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/b1449ff5-2972-4765-a708-ece6048c0652/MP4/fastand-up.mp4",
      id: "fit-video-six",
      classes: "video-js vjs-default-skin fit-video6",
      parentId: "fitness",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/b1449ff5-2972-4765-a708-ece6048c0652/Thumbnails/7 Fastand up@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/b1449ff5-2972-4765-a708-ece6048c0652/brand-logo/7 Fastand up-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/ef775b7e-7536-4852-845d-6df006f3973a/MP4/Optimum-Nutrition.mp4",
      id: "fit-video-seven",
      classes: "video-js vjs-default-skin fit-video7",
      parentId: "fitness",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/ef775b7e-7536-4852-845d-6df006f3973a/Thumbnails/8 Optimum Nutrition@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/ef775b7e-7536-4852-845d-6df006f3973a/brand-logo/8 Optimum Nutrition-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/e4286425-779d-440c-b7c3-8b059c8aca0e/MP4/repfuel.mp4",
      id: "fit-video-eight",
      classes: "video-js vjs-default-skin fit-video8",
      parentId: "fitness",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/e4286425-779d-440c-b7c3-8b059c8aca0e/Thumbnails/9 Repfuel@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/e4286425-779d-440c-b7c3-8b059c8aca0e/brand-logo/9 Repfuel-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/271098ff-5651-4588-9b40-e803bd99321e/MP4/GetBeatXP.mp4",
      id: "fit-video-nine",
      classes: "video-js vjs-default-skin fit-video9",
      parentId: "fitness",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/271098ff-5651-4588-9b40-e803bd99321e/Thumbnails/1 GetBeatXP@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/271098ff-5651-4588-9b40-e803bd99321e/brand-logo/1 GetBeatXP.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/d753a883-b592-4325-b4cc-b9064bf2ca78/MP4/Muscle-Blaze-2.mp4",
      id: "fit-video-ten",
      classes: "video-js vjs-default-skin fit-video10",
      parentId: "fitness",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/d753a883-b592-4325-b4cc-b9064bf2ca78/Thumbnails/10 Muscle Blaze@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/d753a883-b592-4325-b4cc-b9064bf2ca78/brand-logo/10 Muscle Blaze.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/9451a71d-bae1-4d80-809f-6b6a279f4889/MP4/Avvatar-2.mp4",
      id: "fit-video-eleven",
      classes: "video-js vjs-default-skin fit-video11",
      parentId: "fitness",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/9451a71d-bae1-4d80-809f-6b6a279f4889/Thumbnails/11 Avvatar@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/9451a71d-bae1-4d80-809f-6b6a279f4889/brand-logo/11 Avvatar.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/b55c9718-c5d5-4172-9770-42b23a0bdde5/MP4/Urban-Guru.mp4",
      id: "fit-video-twelve",
      classes: "video-js vjs-default-skin fit-video12",
      parentId: "fitness",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/b55c9718-c5d5-4172-9770-42b23a0bdde5/Thumbnails/12 Urban Guru@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/b55c9718-c5d5-4172-9770-42b23a0bdde5/brand-logo/12 Urban Guru-.webp"
    }
  ],
  "food": [
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/ab881645-53ac-452a-a631-7426d33e3204/MP4/Onlyearth.mp4",
      id: "food-video-one",
      classes: "video-js vjs-default-skin food-video1",
      parentId: "food",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/ab881645-53ac-452a-a631-7426d33e3204/Thumbnails/1 Onlyearth@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/ab881645-53ac-452a-a631-7426d33e3204/brand-logo/1 Onlyearth.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/24ce55d9-7322-4367-95fe-6578c53df045/MP4/Licious.mp4",
      id: "food-video-two",
      classes: "video-js vjs-default-skin food-video2",
      parentId: "food",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/24ce55d9-7322-4367-95fe-6578c53df045/Thumbnails/2 Licious@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/24ce55d9-7322-4367-95fe-6578c53df045/brand-logo/2 Licious.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/26c41198-c6d4-4edf-a296-e0742a1ab88b/MP4/Borosilyandyou.mp4",
      id: "food-video-three",
      classes: "video-js vjs-default-skin food-video3",
      parentId: "food",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/26c41198-c6d4-4edf-a296-e0742a1ab88b/Thumbnails/3 Borosilyandyou@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/26c41198-c6d4-4edf-a296-e0742a1ab88b/brand-logo/3 Borosilyandyou-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/94bd6dc5-c063-4993-81be-f236ff6df864/MP4/oleevoil.mp4",
      id: "food-video-four",
      classes: "video-js vjs-default-skin food-video4",
      parentId: "food",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/94bd6dc5-c063-4993-81be-f236ff6df864/Thumbnails/4 oleevoil@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/94bd6dc5-c063-4993-81be-f236ff6df864/brand-logo/4 oleevoil-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/22129127-0725-4680-956d-2fd9fd227889/MP4/Catchfoods.mp4",
      id: "food-video-five",
      classes: "video-js vjs-default-skin food-video5",
      parentId: "food",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/22129127-0725-4680-956d-2fd9fd227889/Thumbnails/5 Catchfoods@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/22129127-0725-4680-956d-2fd9fd227889/brand-logo/5 Catchfoods-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/027854b0-da17-4d3b-89f1-324623247169/MP4/Aashirvaad.mp4",
      id: "food-video-six",
      classes: "video-js vjs-default-skin food-video6",
      parentId: "food",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/027854b0-da17-4d3b-89f1-324623247169/Thumbnails/Aashirvaad@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/027854b0-da17-4d3b-89f1-324623247169/brand-logo/7 Aashirvaad-.webp"
    }
  ],
  "funny": [
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/top6/08e689d6-8474-45f1-a9f6-ea45f5ed4d10/MP4/BeeYoung.mp4",
      id: "funny-video-one",
      classes: "video-js vjs-default-skin funny-video1",
      parentId: "funny",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/top6/08e689d6-8474-45f1-a9f6-ea45f5ed4d10/Thumbnails/1 Beeyoung@.jpg",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/top6/08e689d6-8474-45f1-a9f6-ea45f5ed4d10/brand-logo/1 Beeyoung.png"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/funny/27767750-e655-4382-a8c4-e433922b1eaa/MP4/Lenskart.mp4",
      id: "funny-video-two",
      classes: "video-js vjs-default-skin funny-video2",
      parentId: "funny",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/funny/27767750-e655-4382-a8c4-e433922b1eaa/Thumbnails/2 Lenskart@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/funny/27767750-e655-4382-a8c4-e433922b1eaa/brand-logo/2 Lenskart.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/funny/515cfbe2-fc9a-4097-8be2-2e25eed1927a/MP4/Naukaridotcom.mp4",
      id: "funny-video-three",
      classes: "video-js vjs-default-skin funny-video3",
      parentId: "funny",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/funny/515cfbe2-fc9a-4097-8be2-2e25eed1927a/Thumbnails/3 Naukaridotcom @.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/funny/515cfbe2-fc9a-4097-8be2-2e25eed1927a/brand-logo/3 Naukaridotcom.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/funny/d6cff75e-4446-49a9-b6d8-b4b6e8c2b42e/MP4/Pl-India.mp4",
      id: "funny-video-four",
      classes: "video-js vjs-default-skin funny-video4",
      parentId: "funny",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/funny/d6cff75e-4446-49a9-b6d8-b4b6e8c2b42e/Thumbnails/4 PL India@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/funny/d6cff75e-4446-49a9-b6d8-b4b6e8c2b42e/brand-logo/4 PL India.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/funny/d7bdeec2-42c8-43a4-b86f-0a1f7c94bc5b/MP4/Colors.mp4",
      id: "funny-video-five",
      classes: "video-js vjs-default-skin funny-video5",
      parentId: "funny",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/funny/d7bdeec2-42c8-43a4-b86f-0a1f7c94bc5b/Thumbnails/5 Colors tv@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/funny/d7bdeec2-42c8-43a4-b86f-0a1f7c94bc5b/brand-logo/5 Colors tv-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/funny/211c16c5-0220-409b-982d-75bf2819ba99/MP4/Boat.mp4",
      id: "funny-video-six",
      classes: "video-js vjs-default-skin funny-video6",
      parentId: "funny",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/funny/211c16c5-0220-409b-982d-75bf2819ba99/Thumbnails/6 Boat@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/funny/211c16c5-0220-409b-982d-75bf2819ba99/brand-logo/6 Boat-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/funny/b5923a55-a3b5-4c87-a5ac-15c2306f5e77/MP4/Netflix.mp4",
      id: "funny-video-seven",
      classes: "video-js vjs-default-skin funny-video7",
      parentId: "funny",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/funny/b5923a55-a3b5-4c87-a5ac-15c2306f5e77/Thumbnails/7 Netflix@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/funny/b5923a55-a3b5-4c87-a5ac-15c2306f5e77/brand-logo/7 Netflix-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/funny/0bf84cba-441b-4396-a565-91e819f0e1a4/MP4/Stayfree.mp4",
      id: "funny-video-eight",
      classes: "video-js vjs-default-skin funny-video8",
      parentId: "funny",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/funny/0bf84cba-441b-4396-a565-91e819f0e1a4/Thumbnails/8 StayfreeIndia@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/funny/0bf84cba-441b-4396-a565-91e819f0e1a4/brand-logo/8 StayfreeIndia-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/funny/e2861857-050a-4b2f-9b03-704c3303cd90/MP4/Boat-2.mp4",
      id: "funny-video-nine",
      classes: "video-js vjs-default-skin funny-video9",
      parentId: "funny",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/funny/e2861857-050a-4b2f-9b03-704c3303cd90/Thumbnails/9 Boat@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/funny/e2861857-050a-4b2f-9b03-704c3303cd90/brand-logo/9 Boat.png"
    },
  ],
  "tech": [
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/tech/a348efce-a005-429d-a50e-db3582c5c91a/MP4/Gpay.mp4",
      id: "tech-video-one",
      classes: "video-js vjs-default-skin tech-video1",
      parentId: "tech",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/tech/a348efce-a005-429d-a50e-db3582c5c91a/Thumbnails/1 Gpay@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/tech/a348efce-a005-429d-a50e-db3582c5c91a/brand-logo/1 Gpay.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/tech/4ead0944-cfdd-4d97-ad3a-7b438b152c49/MP4/Paytm.mp4",
      id: "tech-video-two",
      classes: "video-js vjs-default-skin tech-video2",
      parentId: "tech",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/tech/4ead0944-cfdd-4d97-ad3a-7b438b152c49/Thumbnails/2 Paytm@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/tech/4ead0944-cfdd-4d97-ad3a-7b438b152c49/brand-logo/2 Paytm.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/tech/0e7f02e1-4604-4c4f-a653-2165abde4a9a/MP4/VivoIndia.mp4",
      id: "tech-video-three",
      classes: "video-js vjs-default-skin tech-video3",
      parentId: "tech",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/tech/0e7f02e1-4604-4c4f-a653-2165abde4a9a/Thumbnails/3 Vivo India@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/tech/0e7f02e1-4604-4c4f-a653-2165abde4a9a/brand-logo/3 Vivo India.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/tech/b15eddb2-50fa-42e9-8ecc-0f36f9fa77cd/MP4/getonecardin1.mp4",
      id: "tech-video-four",
      classes: "video-js vjs-default-skin tech-video4",
      parentId: "tech",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/tech/b15eddb2-50fa-42e9-8ecc-0f36f9fa77cd/Thumbnails/4 getonecardin@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/tech/b15eddb2-50fa-42e9-8ecc-0f36f9fa77cd/brand-logo/4 getonecardin-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/tech/cf6f9897-6071-41f5-9db6-8242ed6d5004/MP4/jio.mp4",
      id: "tech-video-five",
      classes: "video-js vjs-default-skin tech-video5",
      parentId: "tech",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/tech/cf6f9897-6071-41f5-9db6-8242ed6d5004/Thumbnails/6 Jio@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/tech/cf6f9897-6071-41f5-9db6-8242ed6d5004/brand-logo/6 Jio-.webp"
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/tech/2c68417a-527f-4eae-989e-bcaf04880f33/MP4/samsung.mp4",
      id: "tech-video-six",
      classes: "video-js vjs-default-skin tech-video6",
      parentId: "tech",
      poster: "https://drl5d07sf56ow.cloudfront.net/assets/tech/2c68417a-527f-4eae-989e-bcaf04880f33/Thumbnails/7 Samsung@.webp",
      brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/tech/2c68417a-527f-4eae-989e-bcaf04880f33/brand-logo/7 Samsung-.webp"
    },
  ],
    "travel": [
      {
        url: "https://drl5d07sf56ow.cloudfront.net/assets/travel/9689f5a1-2637-4ea0-85f0-d3a329d7f98f/MP4/Whoopershostel.mp4",
        id: "travel-video-one",
        classes: "video-js vjs-default-skin travel-video1",
        parentId: "travel",
        poster: "https://drl5d07sf56ow.cloudfront.net/assets/travel/9689f5a1-2637-4ea0-85f0-d3a329d7f98f/Thumbnails/1 Whoopershostel@.webp",
        brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/travel/9689f5a1-2637-4ea0-85f0-d3a329d7f98f/brand-logo/1 Whoopershostel.webp"
      },
      {
        url: "https://drl5d07sf56ow.cloudfront.net/assets/travel/7244944d-5c62-4c85-b8b4-7fbd1d8074ad/MP4/Yatradotcom.mp4",
        id: "travel-video-two",
        classes: "video-js vjs-default-skin travel-video2",
        parentId: "travel",
        poster: "https://drl5d07sf56ow.cloudfront.net/assets/travel/7244944d-5c62-4c85-b8b4-7fbd1d8074ad/Thumbnails/2 Yatradotcom@.webp",
        brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/travel/7244944d-5c62-4c85-b8b4-7fbd1d8074ad/brand-logo/2 Yatradotcom.webp"
      },
      {
        url: "https://drl5d07sf56ow.cloudfront.net/assets/travel/bed7cd53-7394-44bc-a848-e73c54fd2b0b/MP4/Echor.mp4",
        id: "travel-video-three",
        classes: "video-js vjs-default-skin travel-video3",
        parentId: "travel",
        poster: "https://drl5d07sf56ow.cloudfront.net/assets/travel/bed7cd53-7394-44bc-a848-e73c54fd2b0b/Thumbnails/4 Echor@.webp",
        brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/travel/bed7cd53-7394-44bc-a848-e73c54fd2b0b/brand-logo/4 Echor-.webp"
      },
      {
        url: "https://drl5d07sf56ow.cloudfront.net/assets/travel/6c28bda3-11c6-4f17-9284-39906846d08d/MP4/Saidengresort.mp4",
        id: "travel-video-four",
        classes: "video-js vjs-default-skin travel-video4",
        parentId: "travel",
        poster: "https://drl5d07sf56ow.cloudfront.net/assets/travel/6c28bda3-11c6-4f17-9284-39906846d08d/Thumbnails/5 Saidengresort@.webp",
        brandLogoSrc: "https://drl5d07sf56ow.cloudfront.net/assets/travel/6c28bda3-11c6-4f17-9284-39906846d08d/brand-logo/5 Saidengresort-.webp"
      },
  ],
  "videoads": [
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/1afb25a2-dd4a-4e38-b60f-99a57a57c623/MP4/Screen_Recording_20220729-021304_Instagram.mp4",
      id: "video-ads-one",
      classes: "video-js vjs-default-skin video-ads1",
      parentId: "videoads",
      poster: "",
      brandLogoSrc: ""
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/2876bf75-2426-4e5b-9f83-932b551ca1dd/MP4/RPReplay_Final1658308193.mp4",
      id: "video-ads-two",
      classes: "video-js vjs-default-skin video-ads2",
      parentId: "videoads",
      poster: "",
      brandLogoSrc: ""
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/43973e98-c37c-4e0a-8318-73b5363bb11c/MP4/Screen_Recording_20220729-015525_Instagram.mp4",
      id: "video-ads-three",
      classes: "video-js vjs-default-skin video-ads3",
      parentId: "videoads",
      poster: "",
      brandLogoSrc: ""
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/749e3d89-acb6-43f8-b68e-89addd219cfd/MP4/Screen_Recording_20220729-020823_Instagram.mp4",
      id: "video-ads-four",
      classes: "video-js vjs-default-skin video-ads4",
      parentId: "videoads",
      poster: "",
      brandLogoSrc: ""
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/76675154-3339-4b8e-b9bf-8f8de75c852e/MP4/Plumco.mp4",
      id: "video-ads-five",
      classes: "video-js vjs-default-skin video-ads5",
      parentId: "videoads",
      poster: "",
      brandLogoSrc: ""
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/af7118d7-0933-47af-a9d3-74b955d59f5c/MP4/RPReplay_Final1658315697.mp4",
      id: "video-ads-six",
      classes: "video-js vjs-default-skin video-ads6",
      parentId: "videoads",
      poster: "",
      brandLogoSrc: ""
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/c763a9ba-8e8f-4ff5-83ef-e8dc9e769fef/MP4/RPReplay_Final1658313690.mp4",
      id: "video-ads-seven",
      classes: "video-js vjs-default-skin video-ads7",
      parentId: "videoads",
      poster: "",
      brandLogoSrc: ""
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/dd205989-3bcd-4c7d-8665-5d94f7a8e8eb/MP4/RPReplay_Final1658311494.mp4",
      id: "video-ads-eight",
      classes: "video-js vjs-default-skin video-ads8",
      parentId: "videoads",
      poster: "",
      brandLogoSrc: ""
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/assets/f826ee45-3a27-42b0-af47-4487c51acaa0/MP4/Screenrecorder-2022-07-26-18-01-45-938.mp4",
      id: "video-ads-nine",
      classes: "video-js vjs-default-skin video-ads9",
      parentId: "videoads",
      poster: "",
      brandLogoSrc: ""
    },
  ],
  "homegif": [
    {
      url: "https://drl5d07sf56ow.cloudfront.net/gif/review-rating.mp4",
      id: "gif-video-one",
      classes: "gif-video review-rating-gif",
      parentId: "gif-wraper",
      // poster: "https://drl5d07sf56ow.cloudfront.net/gif/poster/review-rating.webp",
      poster: "",
      brandLogoSrc: ""
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/gif/social-media-organic-video.mp4",
      id: "gif-video-two",
      classes: "gif-video social-media-gif",
      parentId: "gif-wraper",
      // poster: "https://drl5d07sf56ow.cloudfront.net/gif/poster/social-media-organic-page.webp",
      poster: "",
      brandLogoSrc: ""
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/gif/testimonials.mp4",
      id: "gif-video-three",
      classes: "gif-video testimonials-gif",
      parentId: "gif-wraper",
      // poster: "https://drl5d07sf56ow.cloudfront.net/gif/poster/testimonials.webp",
      poster: "",
      brandLogoSrc: ""
    },
    {
      url: "https://drl5d07sf56ow.cloudfront.net/gif/video-ads-gif.mp4",
      id: "gif-video-four",
      classes: "gif-video video-ads-gif",
      parentId: "gif-wraper",
      // poster: "https://drl5d07sf56ow.cloudfront.net/gif/poster/video-ads-gif.webp",
      poster: "",
      brandLogoSrc: ""
    },
  ]
    };
  
    const resolveGifVideo = async (videos, key) => {
      const createGifVideo = vid => {
      return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      const source = document.createElement('source');
      video.id = vid.id
      video.className = vid.classes
      video.autoplay = true
      video.muted = true
      video.loop = true
      video.poster = vid.poster
      source.src = vid.url
      source.type = "video/mp4"
      video.appendChild(source)
      resolve(video)
        })
      }
      return new Promise((resolve, reject) => {
        const worker = new Worker("/js/worker.js");
        worker.postMessage(videos[key]);
        
        worker.addEventListener(
          "message",
          async function(event) {
            console.log("event ", event.data);
            const imagePromises = event.data.map(async vid => {
              console.log("vid ", vid);
              if (vid.url) {
                const response = await createGifVideo(vid);
                return response;
              }
            });
            const vidElements = await Promise.all(imagePromises);
            vidElements.map(ve => {
            const gifWrapper = document.getElementById(ve.classList[1]);
            gifWrapper.appendChild(ve);
        })
    })
  })  
    }
  
  const resolveImages = async (videos, key) => {
    const createVideo = vid => {
      return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        const source = document.createElement('source');
        video.id = vid.id;
        video.className = vid.classes;
        video.preload = "none";
        video.width = "100%";
        video.height = "100%";
        video.setAttribute("controls","controls");
        video.setAttribute("data-setup", '{"userActions": {"doubleClick": false }}');  
        video.poster = vid.poster;
        video.brand = vid.brandLogoSrc;
        video["data-setup"] = '{"userActions": {"doubleClick": false }}';
        source.src = vid.url;
        source.type = "video/mp4";
        video.appendChild(source);
        resolve(video);
      });
    };
    const createGifVideo = vid => {
      return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      const source = document.createElement('source');
      video.id = vid.id
      video.className = vid.classes
      video.autoplay = true
      video.muted = true
      video.loop = true
      video.poster = vid.poster
      source.src = vid.url
      source.type = "video/mp4"
      video.appendChild(source)
      resolve(video)
        })
      }
  
    return new Promise((resolve, reject) => {
      const worker = new Worker("/js/worker.js");
      worker.postMessage(videos[key]);
      
      worker.addEventListener(
        "message",
        async function(event) {
          console.log("event ", event.data);
          const imagePromises = event.data.map(async vid => {
            if (vid.url) {
              let response = '';
              if (key == "homegif") {
                response = await createGifVideo(vid);
              } else {
                response = await createVideo(vid);
              }
              return response;
            }
          });
          if (key == 'homegif') {
            const vidElements = await Promise.all(imagePromises);
            vidElements.map(ve => {
            const gifWrapper = document.getElementById(ve.classList[1]);
            gifWrapper.appendChild(ve);
            })
            resolve(vidElements.filter(Boolean));
          } else {
          if (event.data.length >= 4) {
            document.getElementById(`${key}-skeleton`).style.display = "none";
          }
          const imageElements = await Promise.all(imagePromises);
          const fashionSwiper = document.getElementById(key);
          const fashionSwiperChild = fashionSwiper.childNodes[2].children[0]
          imageElements.map(ie => {
            const vidClass = ie.classList[2];
            const div = document.createElement("div");
            const play_btn_div = document.createElement("div");
            const brand_logo_div = document.createElement("div");
            const img = document.createElement("img");
            const play_btn_img = document.createElement("img");
            img.src = ie.brand;
            
            play_btn_img.src = "./assets/images/play.png";
            // play_btn_img.style.width = "50px";
            brand_logo_div.className = "brand-logo";
            play_btn_div.className = "play-video";
            play_btn_div.setAttribute("onclick", `playVideo('${vidClass}')`);
            play_btn_div.appendChild(play_btn_img);
            if (img.src !== "") {
            brand_logo_div.appendChild(img);
            }
            div.className = "swiper-slide swiper-slide-with-logo";
            fashionSwiperChild.appendChild(div);
            div.appendChild(brand_logo_div);
            div.appendChild(ie);
            div.appendChild(play_btn_div);
            videojs(ie.id, {}, function () {
              this.preload = "auto";
              this.on("touchend", (e) => handleTouchEvent(e));
              this.on("playing", function () { return onPlaying(this)});
              this.on("pause", function () { return onPause(this)});
              this.on("play", function () { return onPlay(this)});
            });
          })
          resolve(imageElements.filter(Boolean));
        }
        },
        false
      );
    });
  };
  
  document.addEventListener('readystatechange', async (event) => {
    console.log("page loaded...")
    // console.log("page loaded... ", videos)
    // let arr = ["fitness", "finance", "fashion", "beauty", "tech", "edtech", "food", "funny", "travel"]
    // for (let j = 0; j < 3; j++) {
    // for (let i = 0; i < arr.length; i++) {
    //   resolveImages({[arr[i]]: [videos[arr[i]][j]]}, arr[i])
    //   }
    // }
    if (event.target.readyState === "complete") {
      console.log("complete page loaded")
    if (window.location.href.includes("video-ads") || window.location.href.includes("shopify-stores")) {
    await resolveImages(videos, "videoads");
    }
  }
  })
  
  
  function handleTouchEvent(e) {
    if (e.target.nodeName === "DIV") {
      const video = e.target.previousSibling;
      if (!video.paused) {
        video.play();
      } else {
        video.pause();
      }
    } else {
      const video = e.target;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  }
  
  function onPause(context) {
    console.log("context ", context)
    const playBtn = context.children_[0].parentElement.nextSibling;
    playBtn.style.visibility = "visible";
  }
  
  function onPlaying(context) {
    const playBtn = context.children_[0].parentElement.nextSibling;
    playBtn.style.visibility = "hidden";
  }
  
  function toggle_read_more(className) {
    const readMore = document.getElementById(className);
    readMore.parentElement.classList.toggle('active');
    if (readMore.textContent ===  'Less More') {
      readMore.innerText = 'See More'
    } else {
      readMore.innerText = 'Less More'
    }
  }
  
  function sendEmail() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const company = document.getElementById("company").value
    const contact = document.getElementById("contact").value
    if (!name || !email || !company || !contact) {
      alert("Please fill all the fields carefully");
      return;
  }
    var form = document.getElementsByName('contact-form')[0];
    document.getElementById("mail-btn").disabled = true
    document.getElementById("btn-spinner").style.display = "inline-block"
    const endpoint = 'https://videaze-server.onrender.com/v1/user/sendEmail'
    const request = {
      name,
      email,
      company,
      contact
    }
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    }).then((res) => {
      form.reset()
      document.getElementById("mail-btn").disabled = false
      document.getElementById("btn-spinner").style.display = "none"
      if (res.status == 200) {
        window.location.href = '/thank-you.html';
        return;
      }
      alert("Something went wrong, please try again later");
      console.log("res ", res)
    }).catch((error) => {
      document.getElementById("mail-btn").disabled = false
      document.getElementById("btn-spinner").style.display = "none"
      alert("Something went wrong, please try again later");
      console.error("error ", error);
    })
  }
  
  function onPlay(context) {
    const playBtn = context.children_[0].parentElement.nextSibling;
    const video = context.children_[0]
    document.querySelectorAll("video").forEach((vid) => {
      if (!vid.paused && vid.id !== video.id) {
        vid.pause();
        vid.currentTime = 0
      }
    });
    playBtn.style.visibility = "hidden";
  }
  