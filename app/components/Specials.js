import { MenuCard } from "../client/AllClientComponents";

function Specials() {
  return (
    <div>
      <div className="flex mx-auto w-11/12 xl:w-[1200px]">
        <div className="w-full">
          <div>
            <h2 className="font-bold text-center text-reds text-xl xl:text-3xl uppercase">
              specials
            </h2>
            <h3 className="text-colors text-3xl font-bold text-center xl:text-4xl text-h">
              Check out our menu
            </h3>
            <p className=" text-center text-colors font-medium text-xs xl:text-base text-h">
              Demoralized by the charms of pleasure of the moment so blinded
              except to some advantage.
            </p>
          </div>
          <div className="mt-10">
            <div>
              <MenuCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specials;
