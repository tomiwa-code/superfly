import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Filter from "../Components/Products/Filter";
import HeroSec from "../Components/Products/HeroSec";

const Products = () => {
  return (
    <>
      <Navbar linkActive='Products' />
      <HeroSec />
      <Filter />
      <Footer />
    </>
  );
};

export default Products;
