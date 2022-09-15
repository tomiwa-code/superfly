import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  padding: 10px 45px;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    padding: 0 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 20px 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const CartHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CartIconHolder = styled.div`
  cursor: pointer;

  svg {
    font-size: 1.7rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    line-height: 1;

    svg {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    line-height: 1;
    
    svg {
      font-size: 1.3rem;
    }
  }
`;

const CartTitleHolder = styled.div``;

const CartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 1rem;
  }
`;

const CartRemoveAllHolder = styled.div``;

const CartRemoveAllBtn = styled.button`
  background: transparent;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => props.theme.colors.danger};

  @media screen and (max-width: ${(props) => props.theme.devices.medium}) {
    font-size: 1rem;
  }
`;

const CartHeader = () => {
  return (
    <Container>
      <Wrapper>
        <CartHeading>
          <CartIconHolder>
            <BsArrowLeft />
          </CartIconHolder>
          <CartTitleHolder>
            <CartTitle>shopping cart</CartTitle>
          </CartTitleHolder>
          <CartRemoveAllHolder>
            <CartRemoveAllBtn>Remove all</CartRemoveAllBtn>
          </CartRemoveAllHolder>
        </CartHeading>
      </Wrapper>
    </Container>
  );
};

export default CartHeader;
