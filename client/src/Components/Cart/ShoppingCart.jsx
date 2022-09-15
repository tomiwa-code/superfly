import styled from "styled-components";
import FireSweatshirt from "../../Assets/fireSweatshirt.png";
import SuaveHoodie from "../../Assets/suaveHoodie.png";

const Container = styled.div`
  width: 100%;
  padding: 10px 45px;
  margin-bottom: 20px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    padding: 0 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 0 15px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 700px;
`;

const CartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px 0;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 25px 0;
  }
`;

const CartImgHolder = styled.div`
  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 30%;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const CartImg = styled.img`
  max-width: 70%;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    max-width: 60%;
  }
`;

const CartProperties = styled.div`
  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 35%;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 90%;
    margin: 0 auto;
  }
`;

const CartDetail = styled.div`
  text-transform: capitalize;
  display: flex;
  align-content: center;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;

const CartDetailText = styled.p`
  font-weight: 600;
  margin-right: 15px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    margin-right: 10px;
  }
`;

const CartDetailColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin-right: 10px;
`;

const ProductQtyPrice = styled.div`
  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 20%;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 90%;
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    margin: 0 auto;
  }
`;

const ProductQty = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const ProductQtyText = styled.p`
  width: 60px;
  text-align: center;
  font-weight: 600;
  font-size: 1.3rem;
`;

const ProductQtyBtn = styled.button`
  width: 50px;
  height: 35px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.dark};
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 45px;
    line-height: 1;
  }
`;

const ProductPrice = styled.div`
  margin-top: 20px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    margin: 5px 0;
  }
`;

const ProductPriceText = styled.h3`
  text-align: center;
`;

const RemoveProduct = styled.div`
  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 15%;
    text-align: right;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 90%;
    margin: 0 auto;
    padding-top: 10px;
    text-align: left;
  }
`;

const RemoveProductBtn = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.danger};
  cursor: pointer;
  font-weight: 600;
  text-decoration: underline;
`;

const tempData = [
  {
    id: 2100008,
    name: "sweatshirt lit as fire",
    price: 3375.25,
    sold: 37,
    img: FireSweatshirt,
    cat: "sweatshirts",
    color: "grey",
    size: "l",
  },
  {
    id: 2100001,
    name: "suave hoodie",
    price: 5680.2,
    sold: 21,
    img: SuaveHoodie,
    cat: "hoodies",
    color: "orange",
    size: "l",
  },
];

const ShoppingCart = () => {
  return (
    <Container>
      <Wrapper>
        {tempData.map(({ id, name, price, color, size, img }) => {
          return (
            <CartContainer key={id}>
              <CartImgHolder>
                <CartImg src={img} />
              </CartImgHolder>
              <CartProperties>
                <CartDetail>
                  <CartDetailText>product: </CartDetailText>
                  {name}
                </CartDetail>
                <CartDetail>
                  <CartDetailText>id: </CartDetailText>
                  {id}
                </CartDetail>
                <CartDetail>
                  <CartDetailText>color: </CartDetailText>
                  <CartDetailColor color={color}></CartDetailColor>
                  {color}
                </CartDetail>
                <CartDetail>
                  <CartDetailText>Size: </CartDetailText>
                  {size}
                </CartDetail>
              </CartProperties>
              <ProductQtyPrice>
                <ProductQty>
                  <ProductQtyBtn>{"-"}</ProductQtyBtn>
                  <ProductQtyText>1</ProductQtyText>
                  <ProductQtyBtn>{"+"}</ProductQtyBtn>
                </ProductQty>
                <ProductPrice>
                  <ProductPriceText>NGN {price}</ProductPriceText>
                </ProductPrice>
              </ProductQtyPrice>
              <RemoveProduct>
                <RemoveProductBtn>Remove</RemoveProductBtn>
              </RemoveProduct>
            </CartContainer>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default ShoppingCart;
