import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ v10+ import
import "swiper/css";

export default function Hero() {
  const slides = [
    "https://i.postimg.cc/3R1gX0x0/hero1.jpg",
    "https://i.postimg.cc/2yVbXwYp/hero2.jpg",
    "https://i.postimg.cc/y6JwY0bD/hero3.jpg",
  ];

  return (
    <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg mb-10">
      <Swiper
        modules={[Autoplay]}            // ✅ add modules here
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            {/* 👇 This is the line to replace (originally line 21) */}
            <img
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
              data-aos="fade-up" // Added the data-aos attribute
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}