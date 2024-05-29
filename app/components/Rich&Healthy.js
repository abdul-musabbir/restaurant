import { Star } from "lucide-react";
import Image from "next/image";
import Button from "../client/Button";

function RichHealthy() {
  return (
    <div>
      <div className="mx-auto flex w-11/12 xl:w-[1200px]">
        <div>
          <div>
            <h2 className="uppercase text-center text-xl font-semibold text-[#2a435d] xl:text-2xl">
              rich & healthy
            </h2>
            <div className=" mt-8">
              <div className="flex flex-col xl:grid xl:grid-cols-8 xl:gap-10">
                <div className="mx-auto xl:mx-0 xl:w-full xl:col-span-3">
                  <Image
                    src={"/image3.png"}
                    width={200}
                    height={200}
                    alt="Highest quality"
                    className="xl:w-full"
                  />
                </div>

                <div className="flex flex-col gap-4 mt-4 colaps xl:w-full">
                  <h3 className="text-[#CC3333] font-bold text-2xl flex flex-col xl:text-4xl xl:font-extrabold">
                    <span>Highest quality artisangrains,</span>
                    <span> proteins & seasonal ingredients</span>
                  </h3>

                  <span className="text-[#2A435D] font-semibold xl:mt-10 xl:text-xl">
                    Righteous indignation and dislike men who are so beguiled
                    and demoralized by the charms of pleasure of the moment, so
                    blinded by desires, that they cannot foresee.
                  </span>

                  <div className="flex flex-col gap-3 xl:w-full xl:grid xl:grid-cols-6 xl:mt-10">
                    <div className="xl:col-span-3">
                      <div className="xl:flex xl:flex-col xl:gap-10">
                        {stat.map((res, index) => {
                          return (
                            <span
                              key={index}
                              className="flex gap-1 font-medium text-[#2A435D] xl:text-[18px]"
                            >
                              <Star strokeWidth={0} fill="#CC3333" />
                              {res.txt}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mx-auto xl:w-full xl:span-4-to-end xl:grid xl:place-items-center context">
                      <Image
                        src={"/image4.png"}
                        width={200}
                        height={200}
                        alt=""
                        className="xl:w-full xl:rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button
                      name={"Reade More"}
                      className={"px-8 text-xl xl:px-10 xl:py-4 xl:text-2xl"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RichHealthy;

const stat = [
  {
    txt: "Simple and easy to distinguish",
  },
  {
    txt: "Pleasure of the momentblinded desire",
  },
  {
    txt: "Able to do what we like best",
  },
];
