import { LogoSlider } from "../client/AllClientComponents";

function FoodItems() {
  return (
    <div className="py-10">
      <div className="flex mx-auto w-11/12 xl:w-[1200px]">
        <div className="w-full flex flex-col">
          <div className=" text-center w-full">
            <h2 className="font-semibold text-xl text-[#2a435d]">Food Items</h2>
            <h3 className="text-[#2a435d] text-3xl font-bold">
              Popular Dishesv
            </h3>
          </div>

          <div className="mt-10">
            <LogoSlider params={logoSlider} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItems;

const logoSlider = [
  {
    url: "/image2.png",
  },
  {
    url: "/image2.png",
  },
  {
    url: "/image2.png",
  },
  {
    url: "/image2.png",
  },
  {
    url: "/image2.png",
  },
  {
    url: "/image2.png",
  },
];
