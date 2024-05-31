import BigOffer from "./components/BiggOffer";
import Delivery from "./components/Delivery";
import FoodItems from "./components/FoodItems";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MainHeader from "./components/MainHeader";
import OurBranch from "./components/OurBranch";
import OurRestaurant from "./components/OurRestaurant";
import Review from "./components/Review";
import RichHealthy from "./components/Rich&Healthy";
import Specials from "./components/Specials";
import SpecialsMenu from "./components/SpecialsMenu";
import TheBest from "./components/TheBest";
export default function page() {
  return (
    <main>
      <MainHeader />
      <Header />
      <Home />
      <FoodItems />
      <RichHealthy />
      <BigOffer />
      <Specials />
      <SpecialsMenu />
      <OurRestaurant />
      <Delivery />
      <TheBest />
      <Review />
      <OurBranch />
      <Footer />
    </main>
  );
}
