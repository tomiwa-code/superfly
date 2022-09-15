import styled from "styled-components";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { GiCube } from "react-icons/gi";
import { useState } from "react";

const ButtonDesign = styled.button`
  width: 150px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  text-transform: capitalize;
  background: transparent;
  font-size: 0.9rem;
  background: ${(props) =>
    props.btnType === "full" && props.theme.colors.secondary};
  border: ${(props) =>
    props.btnType === "border" && `1px solid ${props.theme.colors.secondary}`};
  margin-left: ${(props) => props.ml};
  pointer-events: none;
  pointer-events: ${(props) => props.spamClick === "" && "auto"};

  p {
    color: ${(props) => props.btnType === "full" && props.theme.colors.white};
    color: ${(props) =>
      props.btnType === "border" && props.theme.colors.secondary};
    color: ${(props) =>
      props.btnType === "link" && props.theme.colors.secondary};
    text-decoration: ${(props) => props.btnType === "link" && "underline"};
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 120px;
    font-size: .8rem;
  }
`;

const Text = styled.p`
  opacity: 0;
  opacity: ${(props) => props.hide === "" && "1"};
  transition: 0.3s ease-out;
`;

const Added = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  opacity: ${(props) => props.added === "added" && "1"};
  transition: 0.3s ease-out;
`;

const Cart = styled.div`
  position: absolute;
  top: 55%;
  left: -50%;
  animation: ${(props) =>
    props.animate === "animate" && "cart 1.5s ease-in-out forwards"};
  transform: translate(-50%, -50%);
  transition: 0.3s ease-out;
  z-index: 2;

  svg {
    fill: ${(props) => props.theme.colors.white};
    font-size: 1.3rem !important;
  }
`;

const Box = styled.div`
  position: absolute;
  top: -50%;
  left: 46%;
  transform: translate(-50%, -50%);
  animation: ${(props) =>
    props.animate === "animate" && "cube 1.5s ease-in-out forwards"};
  z-index: 1;

  svg {
    fill: ${(props) => props.theme.colors.white};
    font-size: 0.9rem !important;
  }
`;

const Button = ({ btnType, btnText, ml, clicked }) => {
  const [cartAnime, setCartAnime] = useState("");

  const handleCartAnime = () => {
    clicked === "clicked" && setCartAnime("animate");

    setTimeout(() => {
      setCartAnime("added");
    }, 1500);

    setTimeout(() => {
      setCartAnime("");
    }, 2300);
  };

  return (
    <ButtonDesign
      style={{ cursor: "pointer" }}
      btnType={btnType}
      ml={ml}
      spamClick={cartAnime}
      onClick={() => handleCartAnime()}
    >
      <Text hide={cartAnime}>{btnText}</Text>
      <Added added={cartAnime}>Added</Added>
      <Cart animate={cartAnime}>
        <RiShoppingCart2Fill />
      </Cart>
      <Box animate={cartAnime}>
        <GiCube />
      </Box>
    </ButtonDesign>
  );
};

export default Button;
