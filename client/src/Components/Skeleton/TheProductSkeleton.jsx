import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0px 45px;
  position: relative;

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

const LeftDiv = styled.div`
  width: 50%;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const Img = styled.div`
  width: 80%;
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

const Properties = styled.div`
  width: 50%;
`;
const Button = styled.div`
  width: 65%;
`;

const TheProductSkeleton = () => {
  return (
    <Container>
      <Wrapper>
        <LeftDiv>
          <Img>
            <Skeleton height={250} />
          </Img>
        </LeftDiv>
        <RightDiv>
          <TextHolder>
            <Skeleton height={35} />
            <Skeleton height={80} />
          </TextHolder>
          <Properties>
            <Skeleton count={3} height={25} />
          </Properties>
          <Button>
            <Skeleton height={45} />
          </Button>
        </RightDiv>
      </Wrapper>
    </Container>
  );
};

export default TheProductSkeleton;
