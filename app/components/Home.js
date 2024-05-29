import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../client/Button";

function Home() {
  return (
    <div className="py-10">
      <div className="flex mx-auto w-11/12 xl:w-[1200px]">
        <div className="w-full flex">
          <div className="xl:grid xl:grid-cols-10 xl:w-full xl:justify-between">
            <div className="xl:flex xl:flex-col xl:col-span-5 xl:relative xl:justify-between">
              <div>
                <div className="">
                  <span className="text-[#CC3333] text-xl font-bold sm:text-2xl">
                    Best In Town
                  </span>
                </div>
                <div className="mt-2">
                  <h1 className="uppercase flex flex-col text-[#2a435d] italic text-3xl font-bold sm:text-5xl">
                    <span>ENJOY OUR CHICKEN</span>
                    <p>
                      <span className="text-[#CC3333]"> BURGER </span> FAST FOOD
                    </p>
                  </h1>
                </div>
              </div>

              <div className="w-full flex items-center justify-center py-10 xl:hidden">
                <Image
                  src={"/image1.png"}
                  width={350}
                  height={200}
                  alt="cover photo"
                  className=" sm:w-96"
                />
              </div>

              <div className="flex items-center gap-6 xl:absolute xl:bottom-20 xl:left-64">
                <Button
                  className={"text-xl px-6 sm:px-10 sm:py-4"}
                  name={"Order Now"}
                />
                <p className="text-xl font-medium sm:text-2xl">Price: $10.50</p>
              </div>

              <div className="mt-6">
                <SocialLink />
              </div>
            </div>

            <div className="w-full flex items-center justify-center py-10 xl:block hidden xl:col-span-5">
              <Image
                src={"/image1.png"}
                width={350}
                height={200}
                alt="cover photo"
                className=" sm:w-96 xl:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

export function SocialLink() {
  return (
    <div className="flex gap-5">
      {social.map((value, index) => {
        return (
          <Link href={"/"} key={index}>
            <value.url
              fill={index === 2 ? "none" : "#CC3333"}
              strokeWidth={index === 2 ? 2 : 0}
              color="#CC3333"
              className="sm:size-10"
            />
          </Link>
        );
      })}
    </div>
  );
}

const social = [
  {
    url: Twitter,
  },
  {
    url: Facebook,
  },
  {
    url: Instagram,
  },
  {
    url: Linkedin,
  },
];
