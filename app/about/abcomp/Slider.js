"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Review from our guests section
export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {logoSlideList.map((res, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center px-4 py-10 bg-transparent gap-5 cursor-pointer">
                <div className="size-20 flex items-start justify-center overflow-hidden bg-reds border-reds border-4 rounded-full">
                  <Image
                    src={`${res.url}.avif`}
                    width={100}
                    height={100}
                    alt="logo slider"
                    priority={index === 0}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-2xl">{res?.name}</h3>
                  <p className=" line-clamp-3 xl:text-h">{res?.des}</p>
                </div>

                <div className="w-full flex justify-end">
                  <div className="flex items-center">
                    <Star fill="#CC3333" strokeWidth={0} />
                    <Star fill="#CC3333" strokeWidth={0} />
                    <Star fill="#CC3333" strokeWidth={0} />
                    <Star fill="#CC3333" strokeWidth={0} />
                    <Star color="#cc3333" size={20} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

let logoSlideList = [
  {
    url: "/R",
    name: "Robert M. Bixon",
    des: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome My wife had a burger over greens",
  },
  {
    url: "/R",
    name: "Bernadette R. Martin",
    des: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome My wife had a burger over greens",
  },
  {
    url: "/R",
    name: "Regina D. Leonard",
    des: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome My wife had a burger over greens",
  },
  {
    url: "/R",
    name: "Robert M. Bixon",
    des: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome My wife had a burger over greens",
  },
  {
    url: "/R",
    name: "Bernadette R. Martin",
    des: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome My wife had a burger over greens",
  },
  {
    url: "/R",
    name: "Regina D. Leonard",
    des: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome My wife had a burger over greens",
  },
];
