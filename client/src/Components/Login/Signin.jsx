import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import {
  AccContainer,
  AccLink,
  AccText,
  BottomAction,
  ForgotPassword,
  ForgotPassWordContainer,
  Input,
  InputContainer,
  InputHolder,
  InputPass,
  OrContainer,
  OrLine,
  OrText,
  ShowPasswordOrNot,
  SignInOptions,
  SignOption,
  SubmitBtn,
  Title,
} from "./FormComponents";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 40px;
  height: auto;
  position: absolute;
  right: 20%;
  right: ${(props) => props.trueSlide === "left" && "0"};
  opacity: 0;
  opacity: ${(props) => props.trueSlide === "left" && "1"};
  z-index: -1;
  z-index: ${(props) => props.trueSlide === "left" && "1"};
  transition: 0.3s ease-out;
`;

const Signin = ({ Slides, switchPage }) => {
  const [typeVal, setTypeVal] = useState("password");

  const showPassword = () => {
    setTypeVal("text");
  };

  const hidePassword = () => {
    setTypeVal("password");
  };

  return (
    <Container trueSlide={Slides}>
      <Title>Sign in to Superfly</Title>
      <SignInOptions>
        <SignOption>
          <FcGoogle /> Sign in with Google
        </SignOption>
        <SignOption>
          <BsFacebook /> Sign in with Facebook
        </SignOption>
      </SignInOptions>
      <OrContainer>
        <OrLine></OrLine>
        <OrText>or</OrText>
        <OrLine></OrLine>
      </OrContainer>
      <InputContainer>
        <InputHolder>
          <Input type="text" placeholder="example@gmail.com" />
        </InputHolder>
        {/* <Error>Email is not recognized sign up</Error> */}
        <InputHolder>
          <InputPass>
            <Input type={typeVal} placeholder="password123" />
            {typeVal === "password" && (
              <ShowPasswordOrNot onClick={showPassword}>Show</ShowPasswordOrNot>
            )}
            {typeVal === "text" && (
              <ShowPasswordOrNot onClick={hidePassword}>Hide</ShowPasswordOrNot>
            )}
          </InputPass>
        </InputHolder>
        {/* <Error>Incorrect password check and retry</Error> */}
      </InputContainer>
      <SubmitBtn>sign in</SubmitBtn>
      <BottomAction>
        <ForgotPassWordContainer>
          <ForgotPassword href="#">Forgot password?</ForgotPassword>
        </ForgotPassWordContainer>
        <AccContainer>
          <AccText>Don't have an account?</AccText>
          <AccLink
            onClick={() =>
              switchPage({ signIn: "", signUp: "signUp" }, "right")
            }
          >
            sign up
          </AccLink>
        </AccContainer>
      </BottomAction>
    </Container>
  );
};

export default Signin;
