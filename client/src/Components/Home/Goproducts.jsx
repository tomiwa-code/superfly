import styled from "styled-components";
import Button from "../Button";
import foldedTshirt from "../../Assets/foldedTshirt.jpg";
import Short from "../../Assets/short.jpg";
import hotelTshirt from "../../Assets/hotelTshirt2.jpg";
import superfly from "../../Assets/superfly.png";
import { Link } from "react-router-dom";

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
  display: flex;
  align-items: center;
  padding: 50px 0;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

const LeftDiv = styled.div`
  width: 50%;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ImageHolder = styled.div``;

const Image = styled.img`
  width: 190px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    max-width: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    max-width: 100%;
  }
`;

const BriefTalk = styled.p`
  width: 550px;
  margin-bottom: 30px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const RightDiv = styled.div`
  width: 50%;
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    margin-bottom: 80px;
  }
`;

const Superfly = styled.img`
  max-width: 80%;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    max-width: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    max-width: 100%;
  }
`;

const Goproducts = () => {
  return (
    <Container>
      <Wrapper>
        <LeftDiv>
          <ImageContainer>
            <ImageHolder>
              <Image src={foldedTshirt} />
            </ImageHolder>
            <ImageHolder>
              <Image src={Short} />
            </ImageHolder>
            <ImageHolder>
              <Image src={hotelTshirt} />
            </ImageHolder>
          </ImageContainer>
          <BriefTalk>
            Superfly is a brand with a store of various products and items like
            pullovers, shorts, sweatshirts, joggers with the brand name on it.
            All wears is available for couples (identical pants). They are lot
            more available in store that are not mentioned here here dig in now
            and find out what awesome product your money can get and trust me
            you it can get you more than you imagined
          </BriefTalk>
          <Link to={"/about"}>
            <Button btnText={"about"} btnType={"border"} />
          </Link>
          <Link to={"/products"}>
            <Button ml={"30px"} btnText={"go to products"} btnType={"full"} />
          </Link>
        </LeftDiv>
        <RightDiv>
          <Superfly src={superfly} />
        </RightDiv>
      </Wrapper>
    </Container>
  );
};

export default Goproducts;
