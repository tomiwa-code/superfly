import styled from "styled-components";
import { useState, useEffect } from "react";
import Product from "./Product";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import { publicRequest } from "../../requestMethod";

const Container = styled.div`
  width: 100%;
  padding: 40px 45px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    padding: 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 20px 15px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 90px;
  row-gap: 80px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 25px;
    row-gap: 25px;
  }
`;

// const tempData = [
//   {
//     id: 2100001,
//     name: "suave hoodie",
//     price: 5680.2,
//     sold: 21,
//     img: SuaveHoodie,
//     cat: "hoodies",
//   }
// ];

const Shop = ({ categories, sort }) => {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get product by category or just get product
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("http://localhost:7000/api/products");
        setProducts(res.data);
        setIsLoading(false);
      } catch (err) {}
    };
    getProduct();
  }, [categories]);

  // set filtered product
  useEffect(() => {
    products &&
      setFilteredProducts(
        products.filter((item) => item.categories.includes(categories))
      );
  }, [categories, products]);

  // sort product for all categories
  const sortProduct = () => {
    if (sort === "priceDesc") {
      products.sort((a, b) => b.price - a.price);
    } else if (sort === "priceAsc") {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === "new") {
      products.sort(
        (a, b) =>
          Number(a.createdAt.split("T")[0].split("-").join("")) -
          Number(b.createdAt.split("T")[0].split("-").join(""))
      );
    } else {
      products.sort(
        (a, b) =>
          Number(b.createdAt.split("T")[0].split("-").join("")) -
          Number(a.createdAt.split("T")[0].split("-").join(""))
      );
    }
  };
  products && sortProduct();

  // sort remaining products
  const sortFilteredProduct = () => {
    if (sort === "priceDesc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "priceAsc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "new") {
      filteredProducts.sort(
        (a, b) =>
          Number(a.createdAt.split("T")[0].split("-").join("")) -
          Number(b.createdAt.split("T")[0].split("-").join(""))
      );
    } else {
      filteredProducts.sort(
        (a, b) =>
          Number(b.createdAt.split("T")[0].split("-").join("")) -
          Number(a.createdAt.split("T")[0].split("-").join(""))
      );
    }
  };
  filteredProducts && sortFilteredProduct();

  return (
    <Container>
      <Wrapper>
        {categories === "all" && products
          ? products.map((items) => <Product items={items} key={items._id} loading={isLoading} />)
          : filteredProducts.map((items) => (
              <Product items={items} key={items._id}/>
            ))}

        {isLoading &&  <ProductSkeleton cards={8} />}
        
      </Wrapper>
    </Container>
  );
};

export default Shop;
