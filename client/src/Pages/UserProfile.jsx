import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AccountDetails from "../Components/UserProfile/AccountDetails";
import AccPas from "../Components/UserProfile/AccPas";
import OrderDetails from "../Components/UserProfile/OrderDetails";

const UserProfile = () => {
  return (
    <>
      <Navbar linkActive='Profile' />
      <AccountDetails />
      <OrderDetails />
      <AccPas />
      <Footer />
    </>
  );
};

export default UserProfile;
