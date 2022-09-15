import styled from "styled-components";
import Collage from "../../Assets/collage.png";

const Container = styled.div`
  width: 100%;
  min-height: 600px;
  padding: 40px 45px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    padding: 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 20px 15px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    flex-direction: column-reverse;
  }
`;

const LeftDiv = styled.div`
  width: 50%;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 100%;
    margin-top: 25px;
  }
`;

const TextHolder = styled.div`
  width: 500px;
  margin: 0 auto;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const Title = styled.h3`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 1rem;
  }
`;

const Para = styled.p`
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: .95rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 0.9rem;
  }
`;

const RightDiv = styled.div`
  width: 50%;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    display: block;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Img = styled.img`
  max-width: 80%;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    max-width: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    max-width: 90%;
  }
`;

const HeroSec = () => {
  return (
    <Container>
      <Wrapper>
        <LeftDiv>
          <TextHolder>
            <Title> superfly wears</Title>
            <Para>
              Each items in the store has at least one different color from the
              one shown. Just click the product that interest you and select a
              color you'll like to order then add to cart and checkout. Go
              Shopping.
            </Para>
          </TextHolder>
        </LeftDiv>
        <RightDiv>
          <Img src={Collage} />
        </RightDiv>
      </Wrapper>
    </Container>
  );
};

export default HeroSec;
