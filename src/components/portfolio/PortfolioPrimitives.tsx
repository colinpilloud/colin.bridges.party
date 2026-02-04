import { EffectCards, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import { Swiper, SwiperSlide } from "swiper/react";

export function Carousel({ items }: { items: { src: string; alt: string }[] }) {
  return (
    <div>
      <Swiper
        threshold={5}
        longSwipesMs={200}
        longSwipesRatio={0.4}
        effect={"cards"}
        className="w-[70vw] sm:w-[400px]"
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        grabCursor={true}
        modules={[EffectCards, Keyboard]}
        cardsEffect={{
          slideShadows: false,
          perSlideRotate: 5,
          perSlideOffset: 40,
        }}
        initialSlide={1}
        slideToClickedSlide={true}
        centeredSlides={true} // This property ensures the slides are centered
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item.src} alt={item.alt} className="rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
