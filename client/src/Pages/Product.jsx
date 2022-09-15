import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import TheProduct from "../Components/Product/TheProduct"

const Product = () => {
  return (
    <>
        <Navbar linkActive='Products' />
        <TheProduct />
        <Footer />
    </>
  )
}

export default Product