import Image from "next/image";
import Button from "../client/Button";
import cn from "../lib/cn";

function TheBest() {
  return (
    <div className="pb-10 lg:py-20">
      <div className="flex mx-auto w-11/12 xl:w-[1200px]">
        <div className="w-full">
          <div className="">
            <div className="">
              <h2 className="text-reds font-bold text-center text-xl lg:text-3xl">
                Why We are the best
              </h2>
            </div>

            <div className={cn("w-full mt-10")}>
              <div>
                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
                  {list.map((items, index) => {
                    return (
                      <div
                        key={index}
                        className={cn(
                          "w-full flex flex-col items-center p-8 text-center gap-4 select-none",
                          {
                            "bg-reds text-white": index === 1,
                          }
                        )}
                      >
                        <div className="relative flex">
                          <div className="z-20">
                            <Image
                              src={`${items?.url}.svg`}
                              width={100}
                              height={100}
                              alt="image"
                            />
                          </div>
                          <div
                            className={cn(
                              "absolute size-20 rounded-full bg-reds text-white flex items-center justify-center text-lg font-bold -top-3 z-10 -right-16 xl:size-24 xl:text-3xl",
                              {
                                "bg-white text-reds": index === 1,
                              }
                            )}
                          >
                            {index + 1}
                          </div>
                        </div>

                        <div
                          className={cn("flex flex-col gap-2 text-h", {
                            "text-white": index === 1,
                          })}
                        >
                          <h3 className="font-bold text-xl">{items?.name}</h3>
                          <p className={cn("font-medium xl:text-[18px]")}>
                            {items?.des}
                          </p>
                        </div>

                        <div className="w-full flex justify-end">
                          <Button
                            name={"Read More"}
                            className={cn("font-normal rounded-md", {
                              "text-reds bg-white": index === 1,
                            })}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheBest;

let list = [
  {
    name: "Passionate Chefs",
    des: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
    url: "/chefs",
  },
  {
    name: "100 % Fresh Foods",
    des: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
    url: "/diet",
  },
  {
    name: "Memorable Ambience",
    des: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
    url: "/candle",
  },
];
