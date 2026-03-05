var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween:40,
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
        slidesPerView:1.2,
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
        slidesPerView: 3,
        spaceBetween:40,
      },
      1200: {
        slidesPerView:3,
        spaceBetween:40,
      },    
    },
  });