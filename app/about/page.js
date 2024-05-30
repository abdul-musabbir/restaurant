import Image from "next/image";
import MainHeader from "../components/MainHeader";
import cn from "../lib/cn";

function page() {
  return (
    <div>
      <MainHeader />

      <div className="w-full bg-[url('/image14.svg')] object-contain h-48 object-center flex items-center">
        <div className="text-center w-full text-white">
          <div>
            <h2 className="font-bold text-2xl">About Us</h2>
            <p>Read our Story, How we started and about the Team</p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-11/12 py-10">
        <div className="">
          <div className="">
            <div className="border-reds border-4 rounded-2xl">
              <div className="py-8 px-5 flex flex-col gap-5">
                <div className="">
                  <Image
                    src={"/image15.jpg"}
                    width={100}
                    height={100}
                    alt="image"
                    className="w-full"
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

            <div className="mt-8">
              <div className="">
                <div className="">
                  <h2 className="text-center font-bold uppercase text-reds text-2xl">
                    our story
                  </h2>
                </div>

                <div className="mt-8">
                  <div className="flex flex-col gap-5">
                    <div className="order-2">
                      <p className="text-h font-medium">
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

                    <div className="w-full order-1">
                      <Image
                        src={"/image16.jpg"}
                        width={100}
                        height={100}
                        alt="image"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-pink">
        <div className="flex mx-auto w-11/12 py-8">
          <div className="">
            <div className="">
              <span className="text-xl text-reds">TASTY AND CRUNCHY</span>
              <h2 className="text-2xl text-h font-bold">Our Chef</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea
                commodo condor consectetur adipiscing elit, sed do eiusmod
                tempor incidition ullam.
              </p>
            </div>

            <div className="">
              <Image
                src={"/image_ourChef.png"}
                width={100}
                height={100}
                alt="image"
                className={cn("w-full")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
