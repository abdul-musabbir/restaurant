import cn from "@/app/lib/cn";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function OurTeam() {
  return (
    <div className="py-10 xl:py-20">
      <div className="flex mx-auto w-11/12 xl:w-[1200px]">
        <div className="w-full">
          <div className="text-center">
            <h2 className="font-bold text-2xl uppercase xl:text-3xl text-h">
              our team
            </h2>
            <p className="text-h xl:text-lg">
              The Hardworking Team behind the restaurant
            </p>
          </div>
          <div className="mt-20 xl:mt-20 flex flex-col gap-28 xl:flex-row xl:flex-wrap xl:items-center xl:justify-center items-center">
            {team.map((items, index) => (
              <div key={index}>
                <div className=" relative border-4 border-reds rounded-full size-80 flex items-center justify-center px-8 xl:size-80">
                  <div className=" absolute -top-14 right-0">
                    <Image
                      src={"/R.avif"}
                      width={100}
                      height={100}
                      className="size-36 object-cover object-center rounded-full border-4 border-reds xl:size-32"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-2xl text-reds">
                      {items?.name}
                    </h3>
                    <p className={cn("text-h", { " text-reds ": index === 0 })}>
                      {items?.des}
                    </p>
                  </div>
                </div>
                <div className="flex w-56 justify-between mx-auto mt-5">
                  <Link href={"/"}>
                    <Twitter color="#CC3333" />
                  </Link>
                  <Link href={"/"}>
                    <Facebook color="#CC3333" />
                  </Link>
                  <Link href={"/"}>
                    <Instagram color="#CC3333" />
                  </Link>
                  <Link href={"/"}>
                    <Linkedin color="#CC3333" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const team = [
  {
    url: "/R.jpg",
    name: "Brain Adams",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet",
    tw: "",
    fb: "",
    ins: "",
    in: "",
  },
  {
    url: "/R.avir",
    name: "Jhon Khan",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet",
    tw: "",
    fb: "",
    ins: "",
    in: "",
  },
  {
    url: "/R.avir",
    name: "Jessica biel",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor  sit amet",
    tw: "",
    fb: "",
    ins: "",
    in: "",
  },
];
