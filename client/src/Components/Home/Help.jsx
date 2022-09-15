import { Link } from "react-router-dom";
import styled from "styled-components";
import faq from "../../Assets/faq.jpg";
import Button from "../Button";

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
  position: relative;
  display: flex;
  align-items: center;
  padding: 50px 0;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    flex-wrap: wrap;
  }
`;

const LeftDiv = styled.div`
  width: 50%;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const Img = styled.img`
  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    max-width: 100%;
  }
`;

const RightDiv = styled.div`
  width: 50%;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const TextHolder = styled.div`
  width: 500px;
  margin-bottom: 20px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 100%;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.light_secondary};
  font-weight: 500;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  margin-top: 10px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 0.9rem;
  }
`;

const Help = () => {
  return (
    <Container>
      <Wrapper>
        <LeftDiv>
          <Img src={faq} />
        </LeftDiv>
        <RightDiv>
          <TextHolder>
            <Title>Need help?</Title>
            <Text>
              Finding it hard to navigate through the site, couldn't find what
              you looking for, need to make a request or could not make an order
              or any other problems. We are sorry for the inconvenience and we
              are here to help. You can check out the frequently ask question
              (FAQ) for answers or chat live with one of our representative.
            </Text>
          </TextHolder>
          <Link to={"/faqs"}>
            <Button btnType={"border"} btnText={"FAQ"} />
          </Link>
        </RightDiv>
      </Wrapper>
    </Container>
  );
};

export default Help;
