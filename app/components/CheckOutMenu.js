import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "../client/Button";

function CheckOutMenu() {
  return (
    <div>
      <div>
        <div>
          <div className="grid gap-8 xl:grid-cols-2">
            <div className="flex flex-col items-center">
              <div className="w-full md:w-fit">
                <Image
                  src="/image8.png"
                  width={200}
                  height={200}
                  className="w-full xl:w-[450px]"
                  alt="menu image"
                />

                <Button
                  name={"view all menu"}
                  className={
                    "font-bold uppercase rounded-none flex text-center items-center justify-center relative w-full xl:py-4"
                  }
                  Icons={CircleArrowRight}
                  iclass={" right-10 size-20"}
                />
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-5">
                {arr.map((items, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-end gap-1 justify-between w-full "
                    >
                      <div className="border-b-2 border-reds border-dotted">
                        <span className=" text-reds font-medium text-xl xl:text-2xl">
                          {items?.name}
                        </span>
                        <p className="text-h xl:text-xl">{items?.des}</p>
                      </div>
                      <div>
                        <span className="text-reds font-semibold xl:text-xl">
                          {items.price}
                        </span>
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
  );
}

export default CheckOutMenu;

let arr = [
  {
    name: "Gazpacho Garlic",
    des: "Chilled tomato, cucumber, garlic, red pepper soup.",
    price: "$55",
  },
  {
    name: "Pan Con Berenjina Frita",
    des: "Marinated seabass with sour sauce, dill & coriander on bread.",
    price: "$40",
  },
  {
    name: "New Lubina Marinada",
    des: "Fried aubergine with almond on bread (2 pieces).",
    price: "$45",
  },
  {
    name: "Gazpacho",
    des: "Atlantic cod fillet, chips, salad, tartare, lemon.",
    price: "$35",
  },
  {
    name: "Coconut Chia Bowl",
    des: "Marinated seabass with sour saucel & coriander on bread.",
    price: "$95",
  },
  {
    name: "New Lubina Marinada",
    des: "Atlantic cod fillet, chips, salad, tartare, lemon.",
    price: "$120",
  },
  {
    name: "Gazpacho Garlic",
    des: "Chilled tomato, cucumber, garlic, red pepper soup.",
    price: "$29",
  },
];
