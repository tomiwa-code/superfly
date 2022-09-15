import styled from "styled-components";
import Button from "../Button";
import { BsArrowLeft } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import FireSweatshirt from "../../Assets/fireSweatshirt.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { publicRequest } from "../../requestMethod";
import TheProductSkeleton from "../Skeleton/TheProductSkeleton";

const Container = styled.div`
  width: 100%;
  padding: 0px 45px;
  position: relative;

  svg {
    cursor: pointer;
    font-size: 1.7rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    padding: 0 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 10px 15px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 40px 0;
  flex-wrap: wrap;
`;

const IconHolder = styled.div`
  width: 100%;
`;

const LeftDiv = styled.div`
  width: 50%;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const ImgHolder = styled.div`
  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Image = styled.img`
  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    max-width: 80%;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    max-width: 70%;
  }
`;

const RightDiv = styled.div`
  width: 50%;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const TextHolder = styled.div`
  width: 400px;
  margin-bottom: 10px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 100%;
  }
`;

const Title = styled.h1`
  text-transform: capitalize;
  margin-bottom: 5px;
  font-weight: 500;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 1.3rem;
    font-weight: 600;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    margin-top: 15px;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
  }
`;

const Desc = styled.p`
  width: 100%;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 0.9rem;
  }
`;

const Properties = styled.div`
  width: 100%;
  padding: 10px 0;
`;

const Colors = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const ColorsTitle = styled.p`
  text-transform: capitalize;
  font-weight: 600;
  margin-right: 20px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 0.9rem;
  }
`;

const ColorsHolder = styled.div`
  display: flex;
  align-items: center;
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 17px;
    height: 17px;
  }
`;

const Sizes = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SizesTitle = styled.p`
  text-transform: capitalize;
  font-weight: 600;
  margin-right: 20px;
`;

const SizesHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SizeHolder = styled.div`
  width: 30px;
  text-align: center;
  border-radius: 4px;
  background: ${(props) => props.sized === "active" && props.theme.colors.dark};
  transition: 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: 10px;
  }

  h3 {
    color: ${(props) => props.sized === "active" && props.theme.colors.white};
  }
`;

const Size = styled.h3`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const PriceHolder = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 80%;
  }
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: none;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 1.3rem;
  }
`;

const ProductSold = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: ${(props) => props.theme.colors.dark_grey};

  svg {
    font-size: 1rem;
    margin-right: 10px;
    fill: ${(props) => props.theme.colors.danger};
  }
`;

const Actions = styled.div`
  width: 400px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const CartDetailsContainer = styled.div`
  width: 100%;
  margin: 30px 0 70px 0;
`;

const CartDetails = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  margin: 0 auto;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.secondary};
`;

const CartDetail = styled.p`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.lighter_secondary};
  font-weight: 500;
`;

const CartView = styled.p`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
`;

const TheProduct = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${productId}`);
        setProduct(res.data);
      } catch (err) {}
    };
    fetchProduct();
  }, [productId]);

  const [size, setSize] = useState("");
  const [colorPicked, setColorPicked] = useState("");

  return (
    <Container>
      <IconHolder>
        <Link to={"/products"}>
          <BsArrowLeft />
        </Link>
      </IconHolder>
      <Wrapper>
        {product ? (
          <>
            <LeftDiv>
              <ImgHolder>
                <Image src={FireSweatshirt} />
              </ImgHolder>
            </LeftDiv>
            <RightDiv>
              <TextHolder>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
              </TextHolder>
              <Properties>
                <Colors>
                  <ColorsTitle>colors:</ColorsTitle>
                  <ColorsHolder>
                    {product.color.map((c) => (
                      <Color
                        onClick={() => setColorPicked(c)}
                        color={c}
                        key={c}
                      ></Color>
                    ))}
                  </ColorsHolder>
                </Colors>
                <Sizes>
                  <SizesTitle>sizes:</SizesTitle>
                  <SizesHolder>
                    {product.size.map((s) => (
                      <SizeHolder
                        onClick={() => setSize(s)}
                        sized={size === s && "active"}
                        key={s}
                      >
                        <Size>{s}</Size>
                      </SizeHolder>
                    ))}
                  </SizesHolder>
                </Sizes>
              </Properties>
              <PriceHolder>
                <Price>NGN {product.price}</Price>
                <ProductSold>
                  <BsStarFill />
                  {product.sold} sold
                </ProductSold>
              </PriceHolder>
              <Actions>
                <Button
                  btnType={"full"}
                  btnText={"add to cart"}
                  clicked={"clicked"}
                />
                <Button btnType={"link"} btnText={"go to shop"} ml={"20px"} />
              </Actions>
            </RightDiv>
          </>
        ) : (
          <TheProductSkeleton />
        )}
      </Wrapper>
      <CartDetailsContainer>
        <CartDetails>
          <CartDetail>cart item: 0</CartDetail>
          <CartView>view</CartView>
        </CartDetails>
      </CartDetailsContainer>
    </Container>
  );
};

export default TheProduct;
