import styled from "styled-components";
import AboutImg from "../../Assets/about.jpg";
import { FaEnvelope } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 600px;
  padding-top: 50px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding-top: 70px;
  }
`;

const Inform = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    display: block;
  }
`;

const ImgBorder = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 180px;
    height: 180px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
`;

const ImgHolder = styled.div`
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 50%;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 160px;
    height: 160px;
  }
`;

const Img = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
`;

const MoreInfo = styled.div`
  width: 300px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const Name = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.1rem;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 1rem;
  }
`;

const Post = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.dark_grey};
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 10px;
`;

const QuickAction = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Action = styled.div`
  width: 80px;
  height: 50px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.mid_white};
  -webkit-box-shadow: 13px 13px 25px -11px rgba(216, 221, 230, 0.67);
  -moz-box-shadow: 13px 13px 25px -11px rgba(216, 221, 230, 0.67);
  box-shadow: 13px 13px 25px -11px rgba(216, 221, 230, 0.67);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.colors.dark_grey};
    font-size: 1.5rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 70px;
    height: 45px;

    svg {
      font-size: 1.3rem;
    }
  }
`;

const AboutMe = styled.div`
  width: 500px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    padding: 0 15px;
  }
`;

const AboutMeInfo = styled.p`
  text-align: justify;
  font-size: 0.9rem;
`;

const Info = () => {
  return (
    <Container>
      <Wrapper>
        <Inform>
          <ImgBorder>
            <ImgHolder>
              <Img src={AboutImg} />
            </ImgHolder>
          </ImgBorder>
          <MoreInfo>
            <Name>olalekan quadri saheeb</Name>
            <Post>ceo</Post>
            <QuickAction>
              <Action>
                <FaEnvelope />
              </Action>
              <Action>
                <BsPhoneFill />
              </Action>
              <Action>
                <BsWhatsapp />
              </Action>
            </QuickAction>
          </MoreInfo>
          <AboutMe>
            <AboutMeInfo>
              I'm a graphics designer, UI/UX designer and the owner of SUPERFLY
              and QUAVOL. I have been a designing for over 12 years now and with
              a lot experience by now which is obvious, and have worked for and
              with several companies over the years.
            </AboutMeInfo>
          </AboutMe>
        </Inform>
      </Wrapper>
    </Container>
  );
};

export default Info;
