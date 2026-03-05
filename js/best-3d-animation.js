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
        spaceBetween:20,
      },    
    },
  });
  
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
  
  
  function toggle_read_more(className) {
    const readMore = document.getElementById(className);
    readMore.parentElement.classList.toggle('active');
    if (readMore.textContent ===  'Less More') {
      readMore.innerText = 'See More'
    } else {
      readMore.innerText = 'Less More'
    }
  }