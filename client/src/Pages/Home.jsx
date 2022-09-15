import Categories from "../Components/Home/Categories";
import Footer from "../Components/Footer";
import Goproducts from "../Components/Home/Goproducts";
import Help from "../Components/Home/Help";
import Hero from "../Components/Home/Hero";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Home/Newsletter";

const Home = () => {
  return (
    <>
      <Navbar linkActive='Home' />
      <Hero />
      <Categories />
      <Goproducts />
      <Help />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
