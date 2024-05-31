import { SpecialsManuForAllTime } from "../client/AllClientComponents";

function SpecialsMenu() {
  return (
    <div className="py-10 xl:py-20">
      <div className="flex mx-auto w-11/12 xl:w-[1200px]">
        <div className="w-full">
          <div className="flex flex-col w-full gap-10">
            <div className="w-full flex items-center justify-center">
              <h2 className=" text-reds font-bold text-xl text-center xl:text-3xl">
                SPECIALS MANU FOR ALL TIME
              </h2>
            </div>
            <div>
              <div>
                <SpecialsManuForAllTime props={menuList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialsMenu;

const menuList = [
  {
    name: "Burger",
    url: "/image.png",
  },
  {
    name: "Fried chicked",
    url: "/image.png",
  },
  {
    name: "Doner with Grilled Chicken",
    url: "/image.png",
  },
  {
    name: "Pizza",
    url: "/image.png",
  },
  {
    name: "Hot Dogs",
    url: "/image.png",
  },
  {
    name: "Chicken Skewers",
    url: "/image.png",
  },
  {
    name: "Greek Salad",
    url: "/image.png",
  },
  {
    name: "Dahi Puri",
    url: "/image.png",
  },
  {
    name: "Ice cream with Chocolate",
    url: "/image.png",
  },
  {
    name: "Cocktail Glasses",
    url: "/image.png",
  },
];
