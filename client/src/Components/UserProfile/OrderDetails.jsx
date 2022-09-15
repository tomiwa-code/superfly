import styled from "styled-components";

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

const Title = styled.h4`
  text-transform: capitalize;
  font-weight: 700;
  margin-bottom: 5px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-weight: 600;
  }
`;

const ODContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const OD = styled.div`
  width: auto;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 150px;
    /* text-align: center; */
    /* background: red; */

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const ODTitle = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;
  text-transform: capitalize;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    text-align: center;
    font-size: .9rem;
  }
`;

const ODValue = styled.p`
  font-weight: 700;
  font-size: 1.3rem;
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 1.2rem;
  }
`;

const OrderData = [
  {
    id: 1,
    title: "ordered item",
    value: 15,
  },
  {
    id: 2,
    title: "pending order",
    value: 5,
  },
  {
    id: 3,
    title: "close orders",
    value: 8,
  },
  {
    id: 4,
    title: "canceled orders",
    value: 2,
  },
];

const OrderDetails = () => {
  return (
    <Container>
      <Wrapper>
        <Title>order details</Title>
        <ODContainer>
          {OrderData.map(({ id, title, value }) => {
            return (
              <OD key={id}>
                <ODTitle>{title}</ODTitle>
                <ODValue>{value}</ODValue>
              </OD>
            );
          })}
        </ODContainer>
      </Wrapper>
    </Container>
  );
};

export default OrderDetails;
