import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductContainer = styled.div`
  background: ${(props) => props.theme.colors.mid_white};
  width: 250px;
  height: 325px;
  overflow: hidden;
  border-radius: 12px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    height: auto;
  }
`;

const ProductImgHolder = styled.div`
  width: 100%;
  height: 220px;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  cursor: pointer;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    height: auto;
    justify-content: center;
  }
`;

const ProductImg = styled.img`
  width: 300px;
  height: 200px;
  object-fit: contain;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    max-width: 90%;
    justify-content: center;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    max-width: 80%;
  }
`;

const ProductNameHolder = styled.div`
  width: 100%;
  padding: 10px 0 0 15px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 5px 0 0 10px;
  }
`;

const ProductName = styled.p`
  text-transform: capitalize;
  font-weight: 500;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 0.9rem;
  }
`;

const ProductPriceHolder = styled.div`
  width: 100%;
  padding: 0 0 0 15px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding-left: 10px;
  }
`;

const ProductPrice = styled.h2`
  font-size: 1.3rem;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 1rem;
  }
`;

const ProductSoldNSave = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 0 6px 5px 10px;
  }
`;

const ProductSold = styled.p`
  width: 50%;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.dark_grey};
  font-weight: 300;

  svg {
    fill: ${(props) => props.theme.colors.danger};
    margin-right: 10px;
  }
`;

const ProductSave = styled.div`
  width: 50%;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: right;

  svg {
    cursor: pointer;
  }
`;

const Product = ({ items }) => {
  return (
    <ProductContainer>
      <Link to={`/product/${items._id}`}>
      <ProductImgHolder>
        <ProductImg src={items.img} />
      </ProductImgHolder>
      <ProductNameHolder>
        <ProductName>{items.title}</ProductName>
      </ProductNameHolder>
      <ProductPriceHolder>
        <ProductPrice>NGN {items.price}</ProductPrice>
      </ProductPriceHolder>
      <ProductSoldNSave>
        <ProductSold>
          <BsStarFill />
          {items.sold} sold
        </ProductSold>
        <ProductSave>{/* <AiFillHeart /> */}</ProductSave>
      </ProductSoldNSave>
      </Link>
    </ProductContainer>
  );
};

export default Product;
