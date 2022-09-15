import AccountDetails from "../Components/EditProfile/AccountDetails";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const UserProfile = () => {
  return (
    <>
      <Navbar linkActive='Profile' />
      <AccountDetails />
      <Footer />
    </>
  );
};

export default UserProfile;
