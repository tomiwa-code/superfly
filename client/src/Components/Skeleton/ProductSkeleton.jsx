import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductContainer = styled.div`
  background: ${(props) => props.theme.colors.mid_white};
  width: 250px;
  height: 325px;
  overflow: hidden;
  border-radius: 12px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    height: auto;
  }
`;

const ProductImgHolder = styled.div`
  width: 100%;
  height: 220px;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    height: 150px;
    justify-content: center;
  }
`;

const ProductNameHolder = styled.div`
  width: 100%;
  padding: 10px 0 0 0;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 5px 0 0 0;
  }
`;

const ProductPriceHolder = styled.div`
  width: 100%;
`;

const ProductSoldNSave = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <ProductContainer key={i}>
        <ProductImgHolder>
          <Skeleton width={250} height={200} />
        </ProductImgHolder>
        <ProductNameHolder>
          <Skeleton />
        </ProductNameHolder>
        <ProductPriceHolder>
          <Skeleton />
        </ProductPriceHolder>
        <ProductSoldNSave>
          <Skeleton width={100} />
        </ProductSoldNSave>
      </ProductContainer>
    ));
};

export default ProductSkeleton;
