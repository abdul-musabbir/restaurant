import Footer from "../components/Footer";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import OurBranch from "../components/OurBranch";
import cn from "../lib/cn";

export default function page() {
  return (
    <div>
      <MainHeader />
      <Header />

      <div className="w-full bg-[url('/image_items_bg.jpg')] text-white flex flex-col items-center justify-center bg-cover bg-center px-10 h-40 gap-4">
        <h2 className="uppercase text-center font-bold text-2xl">items</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          mod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      <div className="flex mx-auto w-11/12 py-10 xl:w-[1200px]">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center gap-5">
            <div>
              <h2 className="text-center text-xl text-h font-bold">
                It’s the food and groceries you Love, delivered
              </h2>
            </div>
            <div>
              <form className="flex gap-5">
                <div className="bg-reds rounded-lg h-16 flex items-center justify-center px-4">
                  <input
                    type="text"
                    className="rounded-md bg-grays p-2 outline-none"
                    placeholder="Search your Items"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-reds size-16 text-white font-bold px-5 rounded-lg text-xl"
                >
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 flex mx-auto lg:w-[1010px] xl:w-[950px] py-10">
        <div>
          <div>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
              {items.map((items, index) => {
                return (
                  <div
                    key={index}
                    className={cn(
                      "rounded-2xl pl-3 p-2 h-32 shadow-box",
                      {
                        " shadow-none p-0 rounded-none h-full":
                          index === 5 || index === 8,
                      },
                      {
                        " md:row-start-1 md:col-start-2 md:col-end-3 xl:row-end-4 ":
                          index === 5,
                        " md:col-span-2 xl:row-start-6": index === 8,
                      }
                    )}
                  >
                    <div
                      className={cn("flex justify-between h-full", {
                        " static justify-normal": index === 5,
                      })}
                    >
                      {items?.name && items.des && items.price && (
                        <div
                          className={cn(
                            "w-full pr-3 py-3 flex flex-col justify-between",
                            {
                              " hidden ":
                                !items?.name || !items.des || !items.price,
                            }
                          )}
                        >
                          <h3 className="font-bold">{items?.name}</h3>
                          <p className="line-clamp-2 text-h text-sm">
                            {items?.des}
                          </p>
                          <span className=" font-medium text-h">
                            From ${items?.price}
                          </span>
                        </div>
                      )}

                      {items.url && (
                        <div
                          className={cn("", {
                            " w-full h-full ": index === 5 || index === 8,
                          })}
                        >
                          <img
                            src={items.url}
                            alt="image"
                            className={cn(
                              "w-48 h-full rounded-2xl object-cover object-center",
                              {
                                " w-full rounded-none":
                                  index === 5 || index === 8,
                              }
                            )}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <OurBranch />
      <Footer />
    </div>
  );
}

const items = [
  {
    name: "Chicken Supreme Pizza",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    name: "Hamburger Burger with Beef",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    name: "Belgium waffles with strawberries",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    name: "Chicken skewers",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    name: "Delicious food on a white plate",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    url: "/image_itemsList_ooffer.jpg",
  },
  {
    name: "Delicious food on a white plate",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    name: "Delicious food on a white plate",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    url: "/image_itemsList_ooffer_2.jpg",
  },
  {
    name: "Delicious food on a white plate",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    name: "Delicious food on a white plate",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    name: "Delicious food on a white plate",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    name: "Delicious food on a white plate",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    name: "Delicious food on a white plate",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    name: "Delicious food on a white plate",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    name: "Delicious food on a white plate",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
  {
    name: "Delicious food on a white plate",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/image11.png",
  },
];
