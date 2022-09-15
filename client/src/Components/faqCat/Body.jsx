import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

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
  width: 100%;
  min-height: 500px;
  margin-bottom: 40px;
`;

const FaqsHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FaqCont = styled.div`
  width: 400px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  position: relative;
  margin-bottom: 50px;
`;

const FaqQuest = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  background: ${(props) => props.theme.colors.lighter_secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  cursor: pointer;
  transition: 0.3s ease-out;
  border-radius: ${(props) => props.collapseState === "hide" && "0 0 8px 8px"};
  border-radius: ${(props) => props.collapseState === "show" && "0px"};
  box-shadow: ${(props) =>
    props.collapseState === "show" && "0px 0px 18px 0px rgba(0, 0, 0, 0.6)"};
`;

const TextHolder = styled.div``;

const Text = styled.p`
  text-transform: capitalize;
  font-weight: 500;
`;

const IconHolder = styled.div`
  &:last-child {
    display: none;
    display: ${(props) => props.arrowDownUp === "up" && "block"};

    svg {
      display: ${(props) => props.arrowDownUp === "up" && "block"};
    }
  }

  svg {
    font-size: 2rem;
    fill: ${(props) => props.theme.colors.primary};
    display: ${(props) => props.arrowDownUp === "down" && "none"};
  }
`;

const FaqAns = styled.div`
  width: 100%;
  padding: 25px 20px 15px 20px;
  margin-top: -10px;
  background: ${(props) => props.theme.colors.lighter_secondary};
  border-radius: 0 0 8px 8px;
  position: absolute;
  transform: translateY(-20px);
  z-index: -1;
  opacity: 0;
  position: ${(props) => props.collapseState === "show" && "relative"};
  opacity: ${(props) => props.collapseState === "show" && "1"};
  transform: ${(props) => props.collapseState === "show" && "translateY(0)"};
  transition: 0.3s ease-out;
`;

const FaqAnsText = styled.p``;

const FaqData = [
  {
    id: 1,
    question: "Can I make a pre order?",
    answer:
      "Quisque a mauris molestie urna ornare blandit et vel arcu. In hac habitasse platea porttitor in ultricies sed, finibus amauris molest.",
  },
  {
    id: 2,
    question: "Can I pay on delivery?",
    answer:
      "Quisque a mauris molestie urna ornare blandit et vel arcu. In hac habitasse platea porttitor in ultricies sed, finibus amauris molest.",
  },
  {
    id: 3,
    question: "How do I make a pre order?",
    answer:
      "Quisque a mauris molestie urna ornare blandit et vel arcu. In hac habitasse platea porttitor in ultricies sed, finibus amauris molest.",
  },
  {
    id: 4,
    question: "I can't find the product I want",
    answer:
      "Quisque a mauris molestie urna ornare blandit et vel arcu. In hac habitasse platea porttitor in ultricies sed, finibus amauris molest.",
  },
];

const Body = () => {
  const [Collapse, setCollapse] = useState("hide");
  console.log(Collapse);
  return (
    <Container>
      <Wrapper>
        <FaqsHolder>
          {FaqData.map(({ id, question, answer }) => {
            return (
              <FaqCont key={id}>
                <FaqQuest
                  onClick={() =>
                    Collapse === id ? setCollapse("hide") : setCollapse(id)
                  }
                  collapseState={Collapse === id ? "show" : "hide"}
                >
                  <TextHolder>
                    <Text>{question}</Text>
                  </TextHolder>
                  <IconHolder arrowDownUp={Collapse === id && "down"}>
                    <MdKeyboardArrowDown />
                  </IconHolder>
                  <IconHolder arrowDownUp={Collapse === id && "up"}>
                    <MdKeyboardArrowUp />
                  </IconHolder>
                </FaqQuest>
                <FaqAns collapseState={Collapse === id ? "show" : "hide"}>
                  <FaqAnsText>{answer}</FaqAnsText>
                </FaqAns>
              </FaqCont>
            );
          })}
        </FaqsHolder>
      </Wrapper>
    </Container>
  );
};

export default Body;
