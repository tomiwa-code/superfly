import styled from "styled-components";

const Checkout = styled.div`
  width: 280px;
  height: 60px;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 9;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.secondary};
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalPrice = styled.div``;

const TotalPriceText = styled.p`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.lighter_secondary};
  font-weight: 600;
  font-size: 1.1rem;
`;

const CheckoutBtnHolder = styled.div``;

const CheckoutBtn = styled.button`
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  text-transform: capitalize;
  font-size: 1rem;
`;

const CartCheckout = () => {
  return (
    <Checkout>
      <TotalPrice>
        <TotalPriceText>NGN 9380.20</TotalPriceText>
      </TotalPrice>
      <CheckoutBtnHolder>
        <CheckoutBtn>checkout</CheckoutBtn>
      </CheckoutBtnHolder>
    </Checkout>
  );
};

export default CartCheckout;
