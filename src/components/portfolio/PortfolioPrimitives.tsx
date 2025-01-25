import { EffectCards, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import { Image } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";

export function Carousel({ items }: { items: { src: string; alt: string }[] }) {
  return (
    <div className="relative left-0">
      <Swiper
        effect={"cards"}
        className="w-[300px] md:w-[600px]"
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        grabCursor={true}
        modules={[EffectCards, Keyboard]}
        cardsEffect={{
          slideShadows: false,
          perSlideRotate: -5,
          perSlideOffset: -40,
        }}
        loop={true}
        initialSlide={1}
        centeredSlides={true} // This property ensures the slides are centered
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <Image src={item.src} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
