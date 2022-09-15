import Explain from "../Components/Faq/Explain";
import FaqCat from "../Components/Faq/FaqCat";
import Heading from "../Components/Faq/Heading";
import Footer from "../Components/Footer";
import InstantChat from "../Components/InstantChat";
import Navbar from "../Components/Navbar";

const Faq = () => {
  return (
    <>
      <Navbar linkActive='Faq' />
      <Heading />
      <Explain />
      <FaqCat />
      <Footer />
      <InstantChat />
    </>
  );
};

export default Faq;
