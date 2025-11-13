import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ v10+ import
import "swiper/css";

export default function Hero() {
  const slides = [
    "https://media.istockphoto.com/id/2180753870/photo/one-red-cat-sleeps-on-a-womans-lap-relax.jpg?s=1024x1024&w=is&k=20&c=iZUacCS5KztSa2dXG4PZ851C3DZ3D8vDllteHbyT7XE=",
    "https://media.istockphoto.com/id/2245851041/photo/playful-cat-expressing-surprise-with-open-mouth-and-playful-energy-in-a-cozy-setting.jpg?s=1024x1024&w=is&k=20&c=Yf6zGXmYW45fvmU21bAKDS3CYEfRSeZUmofb76GCOoI=",
    "https://plus.unsplash.com/premium_photo-1661676172038-377ab3d82a18?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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