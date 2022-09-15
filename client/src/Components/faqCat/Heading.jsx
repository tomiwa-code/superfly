import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

const Container = styled.div`
  width: 100px;
  padding: 20px 45px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    padding: 0 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 15px;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const IconHolder = styled.div`
  svg {
    font-size: 1.7rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    svg {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    svg {
      font-size: 1.3rem;
    }
  }
`;

const TitleHolder = styled.div``;

const Title = styled.p`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.3rem;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 1.1rem;
  }
`;

const Heading = () => {
  return (
    <Container>
      <Wrapper>
        <IconHolder>
          <BsArrowLeft />
        </IconHolder>
        <TitleHolder>
          <Title>general</Title>
        </TitleHolder>
      </Wrapper>
    </Container>
  );
};

export default Heading;
