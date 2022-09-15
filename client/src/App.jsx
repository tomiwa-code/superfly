import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Faqs from "./Pages/Faq";
import Faq from "./Pages/Faqs";
import UserProfile from "./Pages/UserProfile";
import EditProfile from "./Pages/EditProfile";
import About from "./Pages/About";
import Theme from "./Theme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Theme>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to={"/"} /> : <Login />}
          />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:cat" element={<Products />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
          <Route exact path="/faqs" element={<Faqs />} />
          <Route exact path="/faqs/:cat" element={<Faq />} />
        </Routes>
      </Router>
    </Theme>
  );
};

export default App;
