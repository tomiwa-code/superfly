import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.dark};
  background-position: center;
  display: flex;
  justify-content: space-between;
  padding: 130px 45px 80px 45px;
  position: relative;
  overflow-x: hidden;
  z-index: 1;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    flex-wrap: wrap;
    padding: 50px 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 50px 15px 20px 15px;
    flex-wrap: wrap;
  }

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 30%;
    box-sizing: border-box;
    left: 0;
    top: 0;
    z-index: 0;
    border-top: 40px solid ${(props) => props.theme.colors.white};
    border-left: 675px solid transparent;
    border-right: 675px solid transparent;

    @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
      border-top: 0;
    }
  }
`;

const DivSec = styled.div`
  display: ${(props) => props.df === "allow" && "flex"};
  flex-direction: ${(props) => props.df === "allow" && "column"};
  justify-content: ${(props) => props.df === "allow" && "center"};

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    margin-top: ${(props) => props.df === "add" && "20px"};
    display: ${(props) => props.df === "add" && "flex"};
    align-items: ${(props) => props.df === "add" && "center"};

    h3 {
      margin-right: ${(props) => props.df === "add" && "20px"};
    }
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    flex-wrap: ${(props) => props.df === "allow" && "wrap"};
    margin-bottom: 50px;
    text-align: center;

    margin-top: ${(props) => props.df === "add" && "0"};
    display: ${(props) => props.df === "add" && "block"};

    h3 {
      margin-right: ${(props) => props.df === "add" && "0"};
    }
  }
`;

const BrandName = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  text-align: center;
`;

const BrandMotto = styled.p`
  color: ${(props) => props.theme.colors.light_grey};
  margin-top: -10px;
  font-size: 0.7rem;
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonsHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    justify-content: center;
  }
`;

const Buttons = styled.button`
  padding: 10px 0;
  width: 110px;
  text-transform: capitalize;
  font-weight: 500;
  border-radius: 4px;
  background: transparent;
  background: ${(props) =>
    props.btnType === "fill" && props.theme.colors.lighter_secondary};
  border: ${(props) =>
    props.btnType === "border" &&
    `1px solid ${props.theme.colors.lighter_secondary}`};
  color: ${(props) =>
    props.btnType === "border" && props.theme.colors.lighter_secondary};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 15px;
`;

const List = styled.li`
  color: ${(props) => props.theme.colors.lighter_secondary};
  font-weight: 300;
  width: ${(props) => props.type === "address" && "350px"};
  display: flex;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    justify-content: center;
  }

  &:not(:last-child) {
    margin-bottom: ${(props) => props.ml};
  }

  svg {
    stroke: ${(props) => props.type === "stroke" && props.theme.colors.primary};
    fill: ${(props) => props.type === "fill" && props.theme.colors.primary};
    font-size: 1.5rem;
    margin-right: 15px;
  }
`;

const Social = styled.div`
  margin-top: 10px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    margin-left: 50px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    margin-left: 0;
  }
`;

const SocialTitle = styled.h3`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.lighter_secondary};
  font-weight: 600;
  margin-bottom: 10px;
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};

  svg {
    fill: ${(props) => props.theme.colors.primary};
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    justify-content: center;
  }
`;

const Footer = () => {
  const user = true;
  return (
    <Container>
      <Wrapper>
        <DivSec df={"allow"}>
          <BrandName>superfly</BrandName>
          <BrandMotto>... Wears that are fly</BrandMotto>
          {!user && (
            <ButtonsHolder>
              <Buttons btnType={"border"}>sign in</Buttons>
              <Buttons btnType={"fill"}>sign up</Buttons>
            </ButtonsHolder>
          )}
        </DivSec>
        <DivSec>
          <Title>products</Title>
          <List ml={"5px"}>Pullovers</List>
          <List ml={"5px"}>T-Shirts</List>
          <List ml={"5px"}>Sweatshirts</List>
          <List ml={"5px"}>Shorts</List>
          <List ml={"5px"}>Joggers</List>
        </DivSec>
        <DivSec>
          <Title>Contact</Title>
          <List ml={"25px"} type={"stroke"}>
            <HiOutlineMail />
            Superfly@gmail.com
          </List>
          <List ml={"25px"} type={"fill"}>
            <BsPhone /> +2340971401036
          </List>
          <List ml={"25px"} type={"fill"}>
            <BsWhatsapp /> +2348065665649
          </List>
        </DivSec>
        <DivSec df={"add"}>
          <Title>Address</Title>
          <List type={"address"}>
            21 Ikotun Quisque a mauris molestie urna ornare blandit et vel,
            Lagos State.
          </List>
          <Social>
            <SocialTitle>follow us</SocialTitle>
            <SocialIcons>
              <SocialLink href="#">
                <BsInstagram />
              </SocialLink>
              <SocialLink href="#">
                <GrFacebookOption />
              </SocialLink>
              <SocialLink href="#">
                <BsTwitter />
              </SocialLink>
            </SocialIcons>
          </Social>
        </DivSec>
      </Wrapper>
    </Container>
  );
};

export default Footer;
