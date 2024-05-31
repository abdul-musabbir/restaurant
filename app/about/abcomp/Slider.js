"use client";
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
            slidesPerView: 2,
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
                <div className="flex flex-col gap-5">
                  <h3 className="font-bold text-2xl text-reds">{res?.name}</h3>
                  <p className=" line-clamp-3 xl:text-h opacity-80">
                    {res?.des}
                  </p>
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
    name: "Birthday Party",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Wedding Party",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Birthday Party",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Wedding Party",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Birthday Party",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Wedding Party",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Birthday Party",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Wedding Party",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];
