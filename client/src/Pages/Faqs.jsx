import Body from "../Components/faqCat/Body";
import Heading from "../Components/faqCat/Heading";
import InstantChat from '../Components/InstantChat'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Faqs = () => {
  return (
    <>
      <Navbar linkActive='Faq' />
      <Heading />
      <Body />
      <Footer />
      <InstantChat />
    </>
  );
};

export default Faqs;
