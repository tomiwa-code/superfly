import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import pullImg1 from "../../Assets/pullover-1.jpg";
import pullImg2 from "../../Assets/pullover-2.jpg";
import tShirt1 from "../../Assets/tshirt-1.jpg";
import tShirt2 from "../../Assets/heroImg.jpg";
import sweatShirt1 from "../../Assets/sweatshirt-1.jpg";
import sweatShirt2 from "../../Assets/sweatshirt-2.jpg";
import JandS from "../../Assets/JandS.png";
import { Link } from "react-router-dom";

const CategoriesData = [
  {
    id: 1,
    title: "collections on hoodies",
    para: "Request or make an order for adults and couples hoodies",
    pos: "left",
    fImg: pullImg1,
    sImg: pullImg2,
    cat: "hoodies",
  },
  {
    id: 2,
    title: "collections on t-shirts",
    para: "Request or make an order for adults and couples t-shirts",
    pos: "right",
    fImg: tShirt1,
    sImg: tShirt2,
    cat: "t-shirts",
  },
  {
    id: 3,
    title: "collections on sweat shirts",
    para: "Request or make an order for adults and couples sweatshirts",
    pos: "left",
    fImg: sweatShirt1,
    sImg: sweatShirt2,
    cat: "sweatshirts",
  },
];

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
  display: flex;
  align-items: center;
  margin-bottom: 70px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    flex-wrap: wrap;
  }
`;

const LeftDiv = styled.div`
  width: 50%;
  padding: 100px 0;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const DivHolder = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.pos === "right" && "right"};
`;

const ShadowDiv = styled.div`
  width: 250px;
  height: 250px;
  background: ${(props) =>
    props.pos === "left"
      ? props.theme.colors.primary
      : props.theme.colors.lighter_secondary};
  position: absolute;
  right: ${(props) => props.pos === "right" && "0"};
  z-index: -1;

  /* @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 200px;
    height: 200px;
  } */

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 200px;
    height: 200px;
  }
`;

const MainDiv = styled.div`
  width: 400px;
  height: 300px;
  background: ${(props) =>
    props.pos === "left"
      ? props.theme.colors.lighter_secondary
      : props.theme.colors.primary};
  margin-left: ${(props) => props.pos === "left" && "5%"};
  margin-right: ${(props) => props.pos === "right" && "5%"};

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: 250px;
    height: 230px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 270px;
    height: 250px;
  }
`;

const TextHolder = styled.div`
  position: absolute;
  width: 350px;
  left: ${(props) => props.pos === "left" && "30%"};
  right: ${(props) => props.pos === "right" && "30%"};
  text-align: ${(props) => props.pos === "right" && "right"};

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: auto;
    left: ${(props) => props.pos === "left" && "20%"};
    right: ${(props) => props.pos === "right" && "20%"};
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: auto;
    left: ${(props) => props.pos === "left" && "25%"};
    right: ${(props) => props.pos === "right" && "25%"};
  }
`;

const Tittle = styled.h1`
  text-transform: capitalize;
  font-size: 3rem;
  line-height: 1.2;
  color: ${(props) => props.pos === "right" && props.theme.colors.secondary};
  width: ${(props) => props.lastCat === "JandS" && "350px"};
  margin-bottom: ${(props) => props.lastCat === "JandS" && "20px"};

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 2rem;
    width: ${(props) => props.lastCat === "JandS" && "auto"};
  }
`;

const Paragraph = styled.p`
  width: ${(props) => props.lastCat === "JandS" && "450px"};

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    width: auto;
    font-size: 0.9rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: ${(props) => props.lastCat === "JandS" && "auto"};
    font-size: ${(props) => props.lastCat === "JandS" && ".9rem"};
  }
`;

const LinkHolder = styled.div`
  margin-left: ${(props) => props.pos === "left" && "30%"};
  margin-right: ${(props) => props.pos === "right" && "30%"};
  padding: 20px 0;
  width: 90px;
  float: ${(props) => props.pos === "right" && "right"};

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    margin-left: ${(props) => props.pos === "left" && "20%"};
    margin-right: ${(props) => props.pos === "right" && "20%"};
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    margin-left: ${(props) => props.pos === "left" && "25%"};
    margin-right: ${(props) => props.pos === "right" && "25%"};
  }

  a {
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 600;
    line-height: 1;
    display: flex;
    align-items: center;

    svg {
      fill: ${(props) => props.theme.colors.primary};
      margin-left: 10px;
    }
  }
`;

const RightDiv = styled.div`
  width: 50%;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

const ImageHolder = styled.div`
  position: relative;
`;

const FirstImg = styled.img`
  max-width: 40%;
  margin-top: 50px;
  max-width: ${(props) => props.lastCat === "JandS" && "80%"};

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    max-width: 45%;
    max-width: ${(props) => props.lastCat === "JandS" && "100%"};
  }
`;

const SecondImg = styled.img`
  position: absolute;
  max-width: 40%;
  right: 0;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    max-width: 45%;
  }
`;

const Categories = () => {
  return (
    <Container>
      {CategoriesData.map(({ id, title, para, pos, fImg, sImg, cat }) => {
        return (
          <Wrapper key={id}>
            <LeftDiv>
              <DivHolder pos={pos}>
                <ShadowDiv pos={pos}></ShadowDiv>
                <MainDiv pos={pos}></MainDiv>
                <TextHolder pos={pos}>
                  <Tittle pos={pos}>{title}</Tittle>
                  <Paragraph>{para}</Paragraph>
                </TextHolder>
              </DivHolder>
              <LinkHolder pos={pos}>
                <Link to={`/products/${cat}`}>
                  see all <BsArrowRight />
                </Link>
              </LinkHolder>
            </LeftDiv>
            <RightDiv>
              <ImageHolder>
                <FirstImg src={fImg} />
                <SecondImg src={sImg} />
              </ImageHolder>
            </RightDiv>
          </Wrapper>
        );
      })}
      <Wrapper>
        <LeftDiv>
          <Tittle lastCat={"JandS"}>joggers {"&"} shorts</Tittle>
          <Paragraph lastCat={"JandS"}>
            Joggers, shorts, joggers(top only), joggers(pants only), couple
            wears and all women and men shorts for comfortability are available
            in store. Place request or orders now.
          </Paragraph>
          <LinkHolder>
            <Link to={"/products/joggers"}>
              see all <BsArrowRight />
            </Link>
          </LinkHolder>
        </LeftDiv>
        <RightDiv>
          <FirstImg lastCat={"JandS"} src={JandS} />
        </RightDiv>
      </Wrapper>
    </Container>
  );
};

export default Categories;
