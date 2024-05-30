import { Clock, Phone } from "lucide-react";
import Button from "../client/Button";
import cn from "../lib/cn";

function OurBranch() {
  return (
    <div className="xl:pt-20">
      <div className="w-full">
        <div className="w-full flex flex-col">
          <div>
            <h2 className="text-xl text-h font-bold text-center md:text-2xl lg:text-3xl">
              Our Branch
            </h2>
          </div>

          <div className="bg-reds text-white mt-10 w-full">
            <div className="flex flex-col mx-auto w-11/12 lg:w-[1200px] items-center justify-center gap-5 md:flex-row md:flex-wrap lg:gap-8">
              {list.map((res, index) => {
                return (
                  <div key={index} className="text-center py-10">
                    <div className="w-full flex flex-col items-center gap-3">
                      <div className="flex flex-col gap-3">
                        <span className="font-bold text-2xl">{res.name}</span>
                        <p className="font-bold text-lg">{res.des}</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex">
                          <Clock />
                          {res.time}
                        </span>
                        <span className="flex">
                          <Phone />
                          {res.number}
                        </span>
                      </div>

                      <div>
                        <Button
                          name={"CLick to View Google Map"}
                          className={cn("text-green-500 bg-transparent")}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBranch;

const list = [
  {
    name: "Robert Food",
    des: "1986 Hilltop DriveBorget, TX 79007",
    time: "7:30 AM - 9:30 PM",
    number: "+880 123 456 789",
  },
  {
    name: "Mark A. Reed Food",
    des: "4877 Rose AvenueNew Orleans, LA 70112",
    time: "7:30 AM - 9:30 PM",
    number: "+880 123 456 789",
  },
  {
    name: "Karie K. Hill Food",
    des: "1509 Peaceful LaneCleveland, OH 44115",
    time: "7:30 AM - 9:30 PM",
    number: "+880 123 456 789",
  },
];
