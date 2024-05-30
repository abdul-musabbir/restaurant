import { LogoSlider } from "../client/AllClientComponents";

function BigOffer() {
  return (
    <div className="py-10 xl:py-20">
      <div className="flex w-11/12 mx-auto xl:w-[1200px] ">
        <div className="w-full">
          <div className="flex flex-col">
            <h2 className="text-3xl text-[#CC3333] text-center font-bold italic xl:text-5xl">
              Bigg Offer
            </h2>
            <p className="font-medium text-[#2A435D] xl:text-xl xl:text-center xl:font-bold xl:mt-2">
              For in this week, take your food, buy your best one.
            </p>
          </div>

          <div className="mt-8">
            <div className=" before:w-20 before:h-full before:bg-reds before:z-50 before:contents">
              <LogoSlider params={logoSlider} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigOffer;

const logoSlider = [
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
  {
    url: "/image5.png",
  },
];
