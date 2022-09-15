import styled from "styled-components";
import ChatUs from "../Assets/chatus.jpg";

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  position: fixed;
  width: 300px;
  height: 50px;
  bottom: 40px;
  right: 45px;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 90;
  cursor: pointer;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    right: 10px;
    width: 240px;
    padding: 10px 15px;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 0.8rem;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 80%;
    line-height: 1.2;
  }
`;

const ImgHolder = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  right: 0;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

const InstantChat = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Hello, how may I be of help? </Text>
        <ImgHolder>
          <Img src={ChatUs} />
        </ImgHolder>
      </Wrapper>
    </Container>
  );
};

export default InstantChat;
