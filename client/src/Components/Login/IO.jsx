import { useState } from "react";
import styled from "styled-components";
import Signin from "./Signin";
import Signup from "./Signup";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.white};
  opacity: ${(props) => props.type === "signUp" && "0"};
`;

export const Form = styled.form`
  width: 400px;
  height: 520px;
  padding: 30px 40px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  -webkit-box-shadow: 0px 10px 22px 4px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 10px 22px 4px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 10px 22px 4px rgba(0, 0, 0, 0.09);

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    box-shadow: none;
  }
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

export const Action = styled.div`
  width: 50%;
  text-transform: capitalize;
  color: ${(props) =>
    props.type === "signIn"
      ? props.theme.colors.secondary
      : props.type === "signUp"
      ? props.theme.colors.secondary
      : props.theme.colors.dark_grey};
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  padding: 5px 0;
  position: relative;
`;

const Slider = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: ${(props) => (props.slide === "right" ? "50%" : "0")};
    right: ${(props) => (props.slide === "left" ? "50%" : "0")};
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    transition: 0.3s ease-out;
  }
`;

const IO = () => {
  const [IOState, setIOState] = useState({
    signIn: "signIn",
    signUp: "",
  });

  const [Slide, setSlide] = useState("left");

  const Switch = (param, switchSlide) => {
    setIOState(param);
    setSlide(switchSlide)
  };

  return (
    <Container>
      <Form action="#">
        <Actions>
          <Slider slide={Slide} />
          <Action
            type={IOState.signIn}
            onClick={() => {
              Switch({ signIn: "signIn", signUp: "" });
              setSlide("left");
            }}
          >
            sign in
          </Action>
          <Action
            type={IOState.signUp}
            onClick={() => {
              Switch({ signIn: "", signUp: "signUp" });
              setSlide("right");
            }}
          >
            sign up
          </Action>
        </Actions>
        <Signin Slides={Slide} switchPage={Switch} />
        <Signup Slides={Slide} switchPage={Switch} />
      </Form>
    </Container>
  );
};

export default IO;
