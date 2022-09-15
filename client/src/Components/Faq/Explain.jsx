import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 45px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    padding: 0 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 0 15px;
  }
`;

const Wrapper = styled.div`
  width: 200px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const Brief = styled.div`
  margin-bottom: 20px;
`;

const BriefText = styled.p`
  color: ${(props) => props.theme.colors.dark_grey};

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 1rem;
  }
`;

const Desc = styled.div`
    margin-bottom: 20px;
`;

const DescText = styled.h2`
  font-size: 1.1rem;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Explain = () => {
  return (
    <Container>
      <Wrapper>
        <Brief>
          <BriefText>Maybe we've already answered your question</BriefText>
        </Brief>
        <Desc>
          <DescText>Find by category</DescText>
        </Desc>
      </Wrapper>
    </Container>
  );
};

export default Explain;
