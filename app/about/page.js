import Button from "../client/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import OurBranch from "../components/OurBranch";
import cn from "../lib/cn";
import OurTeam from "./abcomp/OurTeam";
import SpecialSevice from "./abcomp/SpecialSevice";
function page() {
  return (
    <div className="flex flex-col w-full">
      <MainHeader />
      <Header />

      <div className="flex items-center bg-no-repeat bg-reds w-full h-60 bg-cover bg-center bg-[url('/image14.svg')]">
        <div className="text-center w-full text-white">
          <div>
            <h2 className="font-bold text-2xl xl:text-5xl">About Us</h2>
            <p className=" xl:text-xl xl:mt-2">
              Read our Story, How we started and about the Team
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-11/12 py-10 xl:w-[1200px]">
        <div className="">
          <div className="">
            <div className="border-reds border-4 rounded-2xl">
              <div className="py-8 px-5 flex flex-col gap-5 xl:grid xl:grid-cols-2">
                <div className="">
                  <img
                    src="https://raw.githubusercontent.com/abdul-musabbir/cloud/master/image_about_1%20(2)%20(1).jpg"
                    alt="image"
                    className="w-full xl:h-64 xl:object-cover xl:object-center rounded-2xl"
                  />
                </div>

                <div className="">
                  <h3 className="text-xl font-bold text-h">
                    Opaleye yellowtail snapper, velvet catfish, graveldiver
                    banded killifish, Old World rivuline catalufa eagle ray
                    Moorish idol. Herring smelt barbeled dragonfish, tommy ruff.
                  </h3>

                  <p className="mt-5 text-[18px] font-normal text-h">
                    Queen danio velvet catfish Sacramento blackfish, bullhead
                    shark, Colorado squawfish Russian sturgeon clown triggerfish
                    swamp-eel paradise fish. Hake cookie-cutter shark silver
                    carp hawkfish snipe eel armorhead catfish, moray eel
                    silverside! Bluegill toadfish, orangespine unicorn fish.
                    Manta Ray Moorish idol
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 xl:py-20">
              <div className="">
                <div className="">
                  <h2 className="text-center font-bold uppercase text-reds text-2xl xl:text-4xl">
                    our story
                  </h2>
                </div>

                <div className="mt-8">
                  <div className="flex flex-col gap-5 xl:grid xl:grid-cols-2">
                    <div className="order-2 xl:order-1">
                      <p className="text-h font-medium xl:text-xl opacity-80">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passage
                      </p>
                    </div>

                    <div className="w-full order-1 xl:order-2">
                      <img
                        src={"/image16.jpg"}
                        alt="image"
                        className="w-full xl:rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-pink xl:my-20">
        <div className="flex mx-auto w-11/12 py-8 xl:p-0 xl:w-[1200px]">
          <div className="flex flex-col xl:grid xl:grid-cols-2 relative xl:w-full">
            <div className="flex gap-2 flex-col xl:py-4">
              <span className="text-xl text-reds uppercase xl:text-2xl">
                TASTY AND CRUNCHY
              </span>
              <h2 className="text-2xl text-h font-bold xl:text-4xl">
                Our Chef
              </h2>
              <p className="xl:text-xl text-h xl:opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea
                commodo condor consectetur adipiscing elit, sed do eiusmod
                tempor incidition ullam.
              </p>
            </div>

            <div className="py-5 xl:flex xl:items-end xl:p-0 xl:justify-center bottom-0">
              <img
                src={"/image_ourChef.png"}
                width={100}
                height={100}
                alt="image"
                className={cn("w-full xl:w-96")}
              />
            </div>

            <div className="mt-5 mx-auto xl:absolute xl:left-60 xl:bottom-10">
              <Button name={"VIEW OUR ALL MANU"} className={"py-3 px-8"} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex mx-auto w-11/12 mt-10 xl:py-20 xl:w-[1200px]">
        <div className="w-full">
          <div>
            <div>
              <SpecialSevice />
            </div>
          </div>
        </div>
      </div>

      <OurTeam />
      <OurBranch />
      <Footer />
    </div>
  );
}

export default page;
