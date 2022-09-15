import styled from "styled-components";
import SuperflyImg from "../../Assets/superfly.png";
import { FaTiktok, FaTwitter, FaInstagram } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 45px 0 45px;
  margin-bottom: 50px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 10px;
  }
`;

const LR = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    flex-wrap: wrap-reverse;
    width: 100%;
  }
`;

const Left = styled.div`
  width: 50%;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Img = styled.img`
  max-width: 80%;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    max-width: 60%;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    max-width: 100%;
    margin-top: 10px;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 100%;
  }
`;

const TextHolder = styled.div`
  width: 500px;
  position: relative;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const Title = styled.h4`
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
`;

const SubTitle = styled.p`
  text-transform: capitalize;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.light_grey};
  font-weight: 500;
  text-align: center;
  margin-bottom: 5px;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: ${(props) => props.theme.colors.secondary};
`;

const RightText = styled.p`
  margin-top: 20px;
  text-align: justify;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 0.9rem;
  }
`;

const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Socials = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 90%;
  }
`;

const Social = styled.div`
  text-align: center;
  cursor: pointer;

  svg {
    font-size: 1.7rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    svg {
      font-size: 1.3rem;
    }
  }
`;

const SocialMedia = styled.p`
  font-size: 0.9rem;
  font-weight: 500;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: .85rem;
  }
`;

const Superfly = () => {
  return (
    <Container>
      <Wrapper>
        <LR>
          <Left>
            <Img src={SuperflyImg} />
          </Left>
          <Right>
            <TextHolder>
              <Title>superfly</Title>
              <SubTitle>brief history on superfly</SubTitle>
              <Line />
              <RightText>
                Pellentesque ipsum augue, tincidunt a commodo a, venenatis vel
                mi. Nulla libero metus, suscipit quis elit malesuada, suscipit
                mollis lectus. Aliquam erat volutpat. Ut ut malesuada mi.
                Aliquam erat volutpat. Maecenas odio felis, condimentum in
                tincidunt rhoncus, tempor a dolor.
              </RightText>
            </TextHolder>
          </Right>
        </LR>
        <SocialWrapper>
          <Socials>
            <Social>
              <FaTiktok />
              <SocialMedia>Superflyng</SocialMedia>
            </Social>
            <Social>
              <FaTwitter />
              <SocialMedia>Superfly</SocialMedia>
            </Social>
            <Social>
              <FaInstagram />
              <SocialMedia>Superflyfits</SocialMedia>
            </Social>
          </Socials>
        </SocialWrapper>
      </Wrapper>
    </Container>
  );
};

export default Superfly;
