import styled from "styled-components";
import Button from "../Button";
import { BsPencilSquare } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 20px 45px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    padding: 0 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 10px 15px;
  }
`;

const AccountDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const FDiv = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 1.7rem;
    margin-right: 20px;
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

const SDiv = styled.div``;

const AccountDetailsText = styled.p`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.4rem;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 1.1rem;
  }
`;

const EDText = styled.button`
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  background: transparent;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: .9rem;
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    column-gap: 15px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const InputHolder = styled.div`
  width: 400px;
  position: relative;
  margin-bottom: 30px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 95%;
  }

  svg {
    position: absolute;
    right: 0;
    fill: ${(props) => props.theme.colors.dark_grey};
    bottom: 10px;
  }
`;

const PlaceHolder = styled.p`
  text-transform: capitalize;
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark};
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.light_grey};
  font-size: 0.9rem;
  padding: 5px 0;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const AccountDetails = () => {
  return (
    <Container>
      <Wrapper>
        <AccountDetail>
          <FDiv>
            <BsArrowLeft />
            <AccountDetailsText>profile edit</AccountDetailsText>
          </FDiv>
          <SDiv>
            <EDText>Save changes</EDText>
          </SDiv>
        </AccountDetail>
        <Details>
          <InputHolder>
            <PlaceHolder>first name</PlaceHolder>
            <Input type={"text"} value={"Jane"} required />
            <BsPencilSquare />
          </InputHolder>

          <InputHolder>
            <PlaceHolder>last name</PlaceHolder>
            <Input type={"text"} value={"Doe"} required />
            <BsPencilSquare />
          </InputHolder>

          <InputHolder>
            <PlaceHolder>email</PlaceHolder>
            <Input
              type={"email"}
              value={"Janedoe@gmail.com"}
              pattern={"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$"}
              required
            />
          </InputHolder>

          <InputHolder>
            <PlaceHolder>phone number</PlaceHolder>
            <Input type={"text"} value={"+2349087645639"} required />
            <BsPencilSquare />
          </InputHolder>

          <InputHolder>
            <PlaceHolder>alternate phone number</PlaceHolder>
            <Input type={"text"} value={"+2349087645639"} required />
            <BsPencilSquare />
          </InputHolder>

          <InputHolder>
            <PlaceHolder>state</PlaceHolder>
            <Input type={"text"} value={"Ogun State"} required />
            <BsPencilSquare />
          </InputHolder>

          <InputHolder>
            <PlaceHolder>address</PlaceHolder>
            <Input type={"text"} value={"JavaScript Crescent Road"} required />
            <BsPencilSquare />
          </InputHolder>

          <InputHolder>
            <PlaceHolder>postal code</PlaceHolder>
            <Input type={"text"} value={"110111"} required />
            <BsPencilSquare />
          </InputHolder>
        </Details>
        <BtnContainer>
          <Button btnType={"border"} btnText={"discard changes"} />
          <Button btnType={"full"} btnText={"save changes"} ml={"20px"} />
        </BtnContainer>
      </Wrapper>
    </Container>
  );
};

export default AccountDetails;
