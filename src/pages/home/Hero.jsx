import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import "swiper/css";

export default function Hero() {
  const slides = [
    {
      img: "https://media.istockphoto.com/id/2180753870/photo/one-red-cat-sleeps-on-a-womans-lap-relax.jpg?s=1024x1024&w=is&k=20&c=iZUacCS5KztSa2dXG4PZ851C3DZ3D8vDllteHbyT7XE=",
      title: "Cozy Winter Pet Care",
      subtitle: "Keep your pets warm and healthy this winter",
    },
    {
      img: "https://media.istockphoto.com/id/2245851041/photo/playful-cat-expressing-surprise-with-open-mouth-and-playful-energy-in-a-cozy-setting.jpg?s=1024x1024&w=is&k=20&c=Yf6zGXmYW45fvmU21bAKDS3CYEfRSeZUmofb76GCOoI=",
      title: "Playful Cats, Happy Homes",
      subtitle: "Fun activities for your furry friends",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661676172038-377ab3d82a18?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pamper Your Pets this Winter",
      subtitle: "Special care services for your beloved pets",
    },
  ];

  return (
    <div className="w-full rounded-lg mb-10">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="relative"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="relative">
           
            <img
              src={slide.img}
              alt={`Slide ${i}`}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
            />

           
            <div className="absolute inset-0 bg-black/30 z-10 rounded-lg"></div>

           
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
              <h2 className="text-white text-2xl md:text-5xl font-bold drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-white text-sm md:text-lg drop-shadow-md mt-2">
                {slide.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
