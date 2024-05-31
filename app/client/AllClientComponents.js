"use client";
import { Menu, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CheckOutMenu from "../components/CheckOutMenu";
import cn from "../lib/cn";
export function DropDownMenu() {
  const [drop, setDrop] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setDrop(!drop)} className="md:hidden">
          {drop ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      <div
        className={cn(
          "absolute bg-[#fff8ee] left-0 flex w-full top-24 text-center py-10 shadow-xl hidden md:block md:static md:bg-transparent md:shadow-none md:p-0 items-center",
          {
            " block ": drop,
          }
        )}
      >
        <div className="flex items-center w-full justify-center">
          <ul className="flex flex-col gap-8 md:flex-row xl:items-center">
            <li>
              <Link href={"/"} className="uppercase  font-bold text-lg">
                home
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="uppercase  font-bold text-lg">
                about
              </Link>
            </li>
            <li>
              <Link href={"/items"} className="uppercase  font-bold text-lg">
                items
              </Link>
            </li>
            <li>
              <Link href={"/pages"} className="uppercase  font-bold text-lg">
                pages
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="uppercase  font-bold text-lg">
                contact
              </Link>
            </li>
            <div className="hidden xl:block ">
              <div className="flex items-center gap-3">
                <div className={cn("flex flex-col")}>
                  <span className="font-bold text-h leading-3 xl:text-lg">
                    Delivery Order
                  </span>
                  <p className="text-h text-sm font-medium xl:text-base leading-3">
                    +880 123 456 789
                  </p>
                </div>
                <div>
                  <Image
                    src={"/delivery.svg"}
                    width={200}
                    height={200}
                    alt="delivery"
                    className="w-8 xl:w-10"
                  />
                </div>
              </div>
            </div>
            <li>
              <Link
                href={"/login"}
                className="uppercase font-bold bg-red-600 px-14 py-4 rounded-2xl text-white"
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function LogoSlider({ params }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
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
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {params.map((res, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={res.url}
                width={200}
                height={200}
                alt="logo slider"
                className="xl:w-[200px] xl:h-[200px]"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export function MenuCard({ className }) {
  const [breakfast, setBreakfast] = useState(true);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [starters, setStarters] = useState(false);
  const [beverages, setBeverages] = useState(false);

  const MenuActiveHandler = (type) => {
    setBreakfast(type === "breakfast");
    setLunch(type === "lunch");
    setDinner(type === "dinner");
    setStarters(type === "starters");
    setBeverages(type === "beverages");
  };
  return (
    <div className={cn(className)}>
      <div>
        <div className=" flex gap-2 flex-wrap">
          <button
            onClick={() => MenuActiveHandler("breakfast")}
            className={cn(
              "uppercase text-black px-6 py-2 rounded-md xl:text-xl xl:rounded",
              {
                "bg-reds text-white": breakfast,
              }
            )}
          >
            breakfast
          </button>

          <button
            onClick={() => MenuActiveHandler("lunch")}
            className={cn(
              "uppercase text-black px-6 py-2 rounded-md xl:text-xl xl:rounded",
              {
                "bg-reds text-white": lunch,
              }
            )}
          >
            lunch
          </button>
          <button
            onClick={() => MenuActiveHandler("dinner")}
            className={cn(
              "uppercase text-black px-6 py-2 rounded-md xl:text-xl xl:rounded",
              {
                "bg-reds text-white": dinner,
              }
            )}
          >
            dinner
          </button>
          <button
            onClick={() => MenuActiveHandler("starters")}
            className={cn(
              "uppercase text-black  px-6 py-2 rounded-md xl:text-xl xl:rounded",
              {
                "bg-reds text-white": starters,
              }
            )}
          >
            starters
          </button>
          <button
            onClick={() => MenuActiveHandler("beverages")}
            className={cn(
              "uppercase text-black px-6 py-2 rounded-md xl:text-xl xl:rounded",
              {
                "bg-reds text-white": beverages,
              }
            )}
          >
            beverages
          </button>
        </div>

        <div className="mt-10">
          <CheckOutMenu />
        </div>
      </div>
    </div>
  );
}

export function SpecialsManuForAllTime({ props }) {
  const [menu, setMenu] = useState(0);
  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 items-center w-full justify-center place-content-center place-items-center transition-all duration-300">
      {props.map((items, index) => {
        return (
          <div key={index} onClick={() => setMenu(index)}>
            <div
              className={cn(
                "flex items-center flex-col size-44 rounded-lg justify-center gap-2 text-center py-2 transition-all duration-300 cursor-pointer",
                {
                  "bg-reds text-white": menu === index,
                }
              )}
            >
              <img
                src={items.url}
                alt="SPECIALS MANU FOR ALL TIME"
                width={140}
                height={100}
                className={cn("w-32")}
              />
              <span className="font-bold">{items?.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Review from our guests section
export function TestimonialSlider() {
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
                  <img
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
