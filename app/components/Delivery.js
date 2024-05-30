import Image from "next/image";
import Button from "../client/Button";
import cn from "../lib/cn";

function Delivery() {
  return (
    <div className="pb-10 lg:py-20">
      <div className="flex w-11/12 mx-auto xl:w-[1200px]">
        <div className="w-full flex flex-col gap-8 lg:flex-row">
          <div className="">
            <div className="pr-5">
              <div className="text-center">
                <h2 className=" font-bold text-xl text-reds lg:text-3xl">
                  Delivery
                </h2>
              </div>

              <div className="mt-10 flex flex-col gap-5">
                <div className="">
                  <h3 className="text-h font-extrabold text-2xl lg:text-4xl">
                    A Moments Of
                  </h3>
                  <h4 className="text-reds text-2xl font-extrabold lg:text-4xl">
                    Delivered On Right Time & Place
                  </h4>
                  <p className="text-h mt-5 font-medium xl:text-[18px]">
                    Food Khan is a restaurant, bar and coffee roastery located
                    on a busy corner site in Farringdon's Exmouth Market. With
                    glazed frontage on two sides of the building, overlooking
                    the market and a bustling London inteon.
                  </p>
                </div>

                <div className="flex gap-8 xl:items-center items-center">
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

                  <div>
                    <Button
                      name={"Order Now"}
                      className={
                        "font-normal rounded-md xl:px-6 py-3 xl:font-medium"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Image
              src={"/image_delivery.png"}
              width={100}
              height={100}
              alt="image_delivery image"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
