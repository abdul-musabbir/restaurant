import Header from "../components/Header";
import MainHeader from "../components/MainHeader";

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

      <div className="flex mx-auto w-11/12 py-10">
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

      <div className="w-11/12 flex mx-auto">
        <div>
          <div>
            <div>
              {items.map((items, index) => {
                return (
                  <div key={index}>
                    <div>
                      <div>
                        <h3>{items?.name}</h3>
                        <p>{items?.des}</p>
                        <span>From ${items?.price}</span>
                      </div>
                      <div>
                        <img src={items.url} alt="image" />
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

const items = [
  {
    name: "Chicken Supreme Pizza",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/",
  },
  {
    name: "Hamburger Burger with Beef",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/",
  },
  {
    name: "Belgium waffles with strawberries",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/",
  },
  {
    name: "Chicken skewers",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/",
  },
  {
    name: "Delicious food on a white plate",
    des: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    url: "/",
  },
];
