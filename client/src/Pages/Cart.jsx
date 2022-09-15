import CartCheckout from "../Components/Cart/CartCheckout";
import CartHeader from "../Components/Cart/CartHeader";
import ShoppingCart from "../Components/Cart/ShoppingCart";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Cart = () => {
  return (
    <>
      <Navbar linkActive='Cart' />
      <CartHeader />
      <ShoppingCart />
      <CartCheckout />
      <Footer />
    </>
  );
};

export default Cart;
