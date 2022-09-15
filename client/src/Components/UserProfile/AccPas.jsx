import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  padding: 0 45px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    padding: 0 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 0 15px;
  }
`;

const APContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const APTitle = styled.h4`
  text-transform: capitalize;
  font-weight: 700;
  margin-bottom: 20px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    margin-bottom: 5px;
  }
`;

const InputHolder = styled.div`
  width: 350px;
  position: relative;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.light_grey};
`;

const ShowBtn = styled.button`
  position: absolute;
  background: transparent;
  cursor: pointer;
  right: 0;
  color: ${(props) => props.theme.colors.dark_grey};
  font-weight: 500;
`;

const AccPas = () => {
  const [passState, setPassState] = useState({
    cp: "password",
    np: "password",
    rnp: "password",
  });

  return (
    <Container>
      <Wrapper>
        <APTitle>change password</APTitle>
        <APContainer>
          <InputHolder>
            <Input
              type={passState.cp}
              placeholder={"Current Password"}
              required
            />
            {passState.cp === "password" && (
              <ShowBtn
                onClick={() =>
                  setPassState({
                    cp: "text",
                    np: "password",
                    rnp: "password",
                  })
                }
              >
                Show
              </ShowBtn>
            )}
            {passState.cp === "text" && (
              <ShowBtn
                onClick={() =>
                  setPassState({
                    cp: "password",
                    np: "password",
                    rnp: "password",
                  })
                }
              >
                Hide
              </ShowBtn>
            )}
          </InputHolder>
          <InputHolder>
            <Input
              type={passState.np}
              placeholder={"New Password"}
              required
            />
            {passState.np === "password" && (
              <ShowBtn
                onClick={() =>
                  setPassState({
                    cp: "password",
                    np: "text",
                    rnp: "password",
                  })
                }
              >
                Show
              </ShowBtn>
            )}
            {passState.np === "text" && (
              <ShowBtn
                onClick={() =>
                  setPassState({
                    cp: "password",
                    np: "password",
                    rnp: "password",
                  })
                }
              >
                Hide
              </ShowBtn>
            )}
          </InputHolder>
          <InputHolder>
            <Input
              type={passState.rnp}
              placeholder={"Re-type New Password"}
              required
            />
            {passState.rnp === "password" && (
              <ShowBtn
                onClick={() =>
                  setPassState({
                    cp: "password",
                    np: "password",
                    rnp: "text",
                  })
                }
              >
                Show
              </ShowBtn>
            )}
            {passState.rnp === "text" && (
              <ShowBtn
                onClick={() =>
                  setPassState({
                    cp: "password",
                    np: "password",
                    rnp: "password",
                  })
                }
              >
                Hide
              </ShowBtn>
            )}
          </InputHolder>
        </APContainer>
        <Button btnType={"full"} btnText={"change password"} />
      </Wrapper>
    </Container>
  );
};

export default AccPas;
