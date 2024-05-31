import cn from "@/app/lib/cn";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function OurTeam() {
  return (
    <div className="py-10">
      <div className="flex mx-auto w-11/12">
        <div className="w-full">
          <div className="text-center">
            <h2 className="font-bold text-2xl uppercase">our team</h2>
            <p className="text-h">The Hardworking Team behind the restaurant</p>
          </div>
          <div className="mt-16 flex flex-col gap-28">
            {team.map((items, index) => (
              <div key={index}>
                <div className=" relative border-4 border-reds rounded-full size-96 flex items-center justify-center px-8">
                  <div className=" absolute -top-10 right-0">
                    <Image
                      src={"/R.avif"}
                      width={100}
                      height={100}
                      className="size-40 object-cover object-center rounded-full border-4 border-reds"
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
