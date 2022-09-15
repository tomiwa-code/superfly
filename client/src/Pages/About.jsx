import Info from "../Components/About/Info";
import Superfly from "../Components/About/Superfly";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
      <Navbar linkActive='About' />
      <Info />
      <Superfly />
      <Footer />
    </>
  );
};

export default About;
