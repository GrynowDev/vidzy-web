const template = document.createElement("template");

template.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="preload" as="style" onload="this.rel='stylesheet'" >
<link href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" rel="preload" as="style" onload="this.rel='stylesheet'"/>
<link href="./css/main.css" rel="preload" as="style" onload="this.rel='stylesheet'">
`;

class FruitList extends HTMLElement {
  div = document.createElement("div");
  fruits = ["Apple", "Banana", "Strawberry", "Ananas", "Cherry"];
  fashionVideo = [
    {
      videoSrc: 'https://drl5d07sf56ow.cloudfront.net/assets/8dbefc6f-2268-4c59-a3f0-efe07f04f744/HLS/jewel-kart_720.m3u8',
      brandImgSrc: 'https://drl5d07sf56ow.cloudfront.net/assets/59e2313a-2acb-42da-90e9-89015b903111/brand-logo/Filo.png'
    },
    {
      videoSrc: 'https://drl5d07sf56ow.cloudfront.net/assets/0bb5bb9a-577f-46a5-a7bc-ed3eef650e72/HLS/FabAlley_720.m3u8',
      brandImgSrc: 'https://drl5d07sf56ow.cloudfront.net/assets/b8298c19-f4e7-43b1-aa56-bc84a263509d/brand-logo/4 Zivame--.png'
    }
  ]

  constructor() {
    super().attachShadow({ mode: "open" }).append(this.div);
    this.shadowRoot.appendChild(template.content);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.div.id = 'fashion'
    this.div.className = 'container tab-pane active'
    while (this.div.firstChild) this.div.firstChild.remove();
    this.div.append(...this.fashionVideo.map(fv => {
      const influencers_video_swiper_div = document.createElement('div');
      const swiper_wrapper = document.createElement('div');
      const swiper_slide = document.createElement('div');
      const brand_logo = document.createElement('div');
      const img = document.createElement('img');
      const video = document.createElement('video');
      
      swiper_wrapper.className = 'swiper-wrapper'
      swiper_slide.className = 'swiper-slide swiper-slide-with-logo'
      influencers_video_swiper_div.className = "swiper influencers-video-swiper"
      brand_logo.className = "brand-logo"
      video.className = "video-js vjs-default-skin"
      video.id = "fashion-video-one"
        
      img.src = fv.brandImgSrc
      video.src = fv.videoSrc

      brand_logo.appendChild(img)
      swiper_slide.appendChild(brand_logo);
      swiper_slide.appendChild(video);
      swiper_wrapper.appendChild(swiper_slide);
      influencers_video_swiper_div.appendChild(swiper_wrapper)

      return influencers_video_swiper_div;

    }));

  }
}

customElements.define("fruit-list", FruitList);
