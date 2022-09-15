import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Shop from "./Shop";

const Container = styled.div`
  width: 100%;
  padding: 40px 45px;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    padding: 0 15px;
  }
`;

const Wrapper = styled.div`
  padding: 20px 0;
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

const TitleText = styled.h3`
  text-transform: capitalize;
`;

const FilterCat = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Category = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify && "right"};

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    justify-content: left;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const CatTitle = styled.p`
  text-transform: capitalize;
  font-weight: 500;
  margin-right: 15px;
`;

const Categories = styled.select`
  text-transform: capitalize;
  font-weight: 500;
  background: ${(props) => props.theme.colors.lighter_grey};
  width: 100px;
  width: ${(props) => props.ex && "130px"};
  padding: 10px 0;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const CatOptions = styled.option`
  text-transform: capitalize;
`;

const Filter = () => {
  // get the address
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [categories, setCategories] = useState(cat ? cat : 'all');
  const [sort, setSort] = useState("new");
  return (
    <>
      <Container>
        <Wrapper>
          <Title>
            <TitleText>filter</TitleText>
          </Title>
          <FilterCat>
            <Category>
              <CatTitle>categories:</CatTitle>
              <Categories
                name="category"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
              >
                <CatOptions>all</CatOptions>
                <CatOptions>hoodies</CatOptions>
                <CatOptions>sweatshirts</CatOptions>
                <CatOptions>joggers</CatOptions>
                <CatOptions>t-shirts</CatOptions>
                <CatOptions>shorts</CatOptions>
              </Categories>
            </Category>
            <Category justify={true}>
              <CatTitle>sort product:</CatTitle>
              <Categories name="sort" onChange={(e) => setSort(e.target.value)}>
                <CatOptions value={"new"}>newest</CatOptions>
                <CatOptions value={"old"}>oldest</CatOptions>
                <CatOptions value={"priceAsc"}>price (asc)</CatOptions>
                <CatOptions value={"priceDesc"}>price (desc)</CatOptions>
              </Categories>
            </Category>
          </FilterCat>
        </Wrapper>
      </Container>
      <Shop categories={categories} sort={sort} />
    </>
  );
};

export default Filter;
