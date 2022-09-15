import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 20px 45px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    padding: 0 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 10px 15px 0 15px;
  }
`;

const AccountDetail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const FDiv = styled.div``;
const SDiv = styled.div``;

const AccountDetailsText = styled.p`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.5rem;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 1.3rem;
    font-weight: 600;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const EDText = styled.button`
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  background: transparent;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Holder = styled.div`
  width: 400px;
  margin-bottom: 20px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 90%;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const TextHeader = styled.h4`
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const TheText = styled.p`
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.light_grey};
  font-size: 0.9rem;
`;

const AccountDetails = () => {
  return (
    <Container>
      <Wrapper>
        <AccountDetail>
          <FDiv>
            <AccountDetailsText>account details</AccountDetailsText>
          </FDiv>
          <SDiv>
            <EDText>Edit profile</EDText>
          </SDiv>
        </AccountDetail>
        <Details>
          <Holder>
            <TextHeader>First Name</TextHeader>
            <TheText>Jane</TheText>
          </Holder>
          <Holder>
            <TextHeader>Last Name</TextHeader>
            <TheText>Doe</TheText>
          </Holder>
          <Holder>
            <TextHeader>Email</TextHeader>
            <TheText>Janedoe@gmail.com</TheText>
          </Holder>
          <Holder>
            <TextHeader>Phone Number</TextHeader>
            <TheText>+2349058419659</TheText>
          </Holder>
          <Holder>
            <TextHeader>Alternate Phone Number</TextHeader>
            <TheText>+2349065412390</TheText>
          </Holder>
          <Holder>
            <TextHeader>State</TextHeader>
            <TheText>Ogun State</TheText>
          </Holder>
          <Holder>
            <TextHeader>Address</TextHeader>
            <TheText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
              facilis.
            </TheText>
          </Holder>
          <Holder>
            <TextHeader>Postal Code</TextHeader>
            <TheText>111011</TheText>
          </Holder>
        </Details>
      </Wrapper>
    </Container>
  );
};

export default AccountDetails;
