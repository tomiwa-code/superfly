import styled from "styled-components";
import HeroImage from "../../Assets/heroImg.jpg";
import ProductImage from "../../Assets/hotelTshirt.jpg";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  padding: 40px 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    flex-wrap: wrap;
    padding: 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    flex-wrap: wrap;
    padding: 20px 15px;
  }
`;

const LeftDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  min-height: 500px;
  
  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 90%;
    flex-wrap: wrap;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    flex-wrap: wrap;
  } 
`;

const Texts = styled.div`
  z-index: 2;
`;

const HeroText = styled.h1`
  font-size: 5rem;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 4rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 3rem;
  }
`;

const HeroColorText = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

const HeroSubText = styled.p`
  font-family: "dancing script";
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  margin-top: -30px;
  font-weight: 500;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 2rem;
  }
`;

const HeroImg = styled.img`
  position: absolute;
  max-width: 40%;
  right: 20%;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    max-width: 50%;
    right: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    max-width: 70%;
    right: 0;
  }
`;

const RightDiv = styled.div`
  width: 50%;
  position: relative;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 90%;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const ProductContainer = styled.div`
  margin-top: 100px;
`;

const ProductImgHolder = styled.div`
  width: 250px;
`;

const ProductImg = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const ProductTextHolder = styled.div`
  margin-bottom: 15px;
`;

const ProductName = styled.h3`
  text-transform: capitalize;
  margin: 5px 0;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 1.1rem;
  }
`;

const ProductDesc = styled.p`
  width: 350px;
  font-size: 1rem;
  line-height: 1.7;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 0.9rem;
    width: 100%;
  }
`;

const RoundButtonsContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    display: none;
  }
`;

const RoundButtonsLayer = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const RoundButton = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary};

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Hero = () => {
  return (
    <Container>
      <LeftDiv>
        <Texts>
          <HeroText>
            Cre<HeroColorText>8</HeroColorText>tive
          </HeroText>
          <HeroSubText>Fashion sale</HeroSubText>
        </Texts>
        <HeroImg src={HeroImage} />
      </LeftDiv>
      <RightDiv>
        <ProductContainer>
          <ProductImgHolder>
            <ProductImg src={ProductImage} />
          </ProductImgHolder>
          <ProductTextHolder>
            <ProductName>hotel t-shirt</ProductName>
            <ProductDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              laboriosam, Dolores nobis sunt rem porro officia esse et illo.
            </ProductDesc>
          </ProductTextHolder>
          <Button btnType={"full"} btnText={"shop now"} />
        </ProductContainer>
        <RoundButtonsContainer>
          <RoundButtonsLayer>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
          </RoundButtonsLayer>
          <RoundButtonsLayer>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
          </RoundButtonsLayer>
          <RoundButtonsLayer>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
          </RoundButtonsLayer>
          <RoundButtonsLayer>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
          </RoundButtonsLayer>
        </RoundButtonsContainer>
      </RightDiv>
    </Container>
  );
};

export default Hero;
