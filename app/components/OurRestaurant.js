// const { default: cn } = require("../lib/cn");
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "../client/Button";
import cn from "../lib/cn";

function OurRestaurant() {
  return (
    <div className="pb-10 xl:pb-20">
      <div className="mx-auto flex w-11/12 xl:w-[1200px]">
        <div className="w-full">
          <div className="w-full mb-10">
            <h2
              className={cn(
                "text-reds text-center font-bold text-xl xl:text-3xl"
              )}
            >
              OUR RESTAURANT
            </h2>
          </div>

          <div className="">
            <div className="">
              <div className="w-full grid gap-5 xl:grid-cols-2 xl:gap-10">
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-2 w-full gap-2">
                    <div>
                      <Image
                        src={"/image9.png"}
                        width={400}
                        height={200}
                        alt="restaurant image"
                      />
                    </div>
                    <div>
                      <Image
                        src={"/image10.png"}
                        width={200}
                        height={200}
                        alt="restaurant image"
                        className="xl:w-full"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <Image
                      src={"/image11.png"}
                      width={200}
                      height={200}
                      alt="restaurant image"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="w-full flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <h3 className=" font-bold text-h text-2xl xl:text-5xl">
                        For every specialoccasion there{"’"}s heritaste
                      </h3>
                      <p className={cn("xl:text-[18px]")}>
                        Indignation and dislike men who are so beguiled
                        demoralized by the charms of pleasure of the moment.
                        Success Story.
                      </p>
                    </div>

                    <div className="w-full">
                      <div className="w-full flex flex-col gap-6">
                        <div className="grid grid-cols-4 xl:grid xl:gap-0">
                          <div
                            className="flex rounded-full items-center justify-center border-reds border-2 size-20 order-1 p-3 xl:size-28 xl:border-4"
                            style={{
                              gridColumn: "1/2",
                            }}
                          >
                            <div className="">
                              <Image
                                src={"/success.svg"}
                                width={30}
                                height={10}
                                className="size-14"
                                alt="success logo"
                              />
                            </div>
                          </div>
                          <div
                            className="order-2"
                            style={{
                              gridColumn: "2/-1",
                            }}
                          >
                            <div>
                              <span className="text-reds font-bold text-xl xl:text-3xl">
                                Success Story
                              </span>
                              <p className="text-sm text-h xl:text-[18px]">
                                Certain circumstances and owing to the claims of
                                duty obligations of business it will frequently.
                              </p>
                            </div>
                            <div className="mt-2 xl:mt-5">
                              <Button
                                name={"Read More"}
                                RightIcons={CircleArrowRight}
                                size={20}
                                iclass={"size-7"}
                                className={
                                  "flex gap-5 rounded-full text-sm items-center xl:text-xl px-8 xl:py-3"
                                }
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-4">
                          <div
                            className="flex rounded-full items-center justify-center border-reds border-2 size-20 order-2 p-3 xl:size-28 xl:border-4"
                            style={{
                              gridColumn: "1/2",
                            }}
                          >
                            <div className="">
                              <Image
                                src={"/chefs.svg"}
                                width={30}
                                height={10}
                                className="size-14"
                                alt="success logo"
                              />
                            </div>
                          </div>
                          <div
                            className="order-2"
                            style={{
                              gridColumn: "2/-1",
                            }}
                          >
                            <div>
                              <span className="text-reds font-bold text-xl xl:text-3xl">
                                Passionate Chefs{" "}
                              </span>
                              <p className="text-sm text-h xl:text-[18px]">
                                Duty or the obligations of business it
                                frequently occur pleasures have to be
                                repudiated.
                              </p>
                            </div>
                            <div className="mt-2 xl:mt-5">
                              <Button
                                name={"Read More"}
                                RightIcons={CircleArrowRight}
                                iclass={"size-7"}
                                className={
                                  "flex gap-5 bg-transparent text-reds xl:text-xl px-8 xl:py-3"
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default OurRestaurant;
