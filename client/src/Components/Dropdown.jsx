import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.colors.lighter_secondary};
  z-index: 99;
  padding: 40px 45px;
  transform: translateY(-110%);
  transform: translateY(
    ${(props) => (props.dropdownStatus === 1 ? "0" : "-110%")}
  );
  transition: 0.5s ease-out;
`;

const Close = styled.div`
  width: 100%;
  font-size: 1.7rem;
  text-align: right;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    font-size: 1.3rem;
  }
`;

const NavLinks = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NavLink = styled.div`
  width: auto;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  a {
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: ${(props) => props.activeLink === "changed" && "600"};
    cursor: pointer;

    &:not(:last-child) {
      @media screen and (max-width: ${(props) => props.theme.devices.small}) {
        margin-bottom: 35px;
      }
    }

    @media screen and (max-width: ${(props) => props.theme.devices.small}) {
      font-size: 1.2rem;
    }
  }
`;

const Buttons = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  width: 120px;
  padding: 10px 0;
  margin: 0 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  background: transparent;
  cursor: pointer;
  background: ${(props) =>
    props.btnStyle === "full" && props.theme.colors.dark};
  color: ${(props) => props.btnStyle === "full" && props.theme.colors.white};
  border: ${(props) =>
    props.btnStyle === "border" && `1px solid ${props.theme.colors.dark}`};
  font-weight: 500;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

const Dropdown = ({ linkActive, handleClick, showDropdownState }) => {
  const [page, setPage] = useState("");
  const user = true;
  useEffect(() => {
    setPage(linkActive);
  }, [linkActive]);

  return (
    <Wrapper dropdownStatus={showDropdownState}>
      <Close>
        <GrClose onClick={() => handleClick(0)} style={{ cursor: "pointer" }} />
      </Close>
      <NavLinks>
        <NavLink activeLink={page === "Home" && "changed"}>
          <Link to={"/"}>home</Link>
        </NavLink>

        <NavLink activeLink={page === "Products" && "changed"}>
          <Link to={"/products"}>products</Link>
        </NavLink>

        <NavLink activeLink={page === "About" && "changed"}>
          <Link to={"/about"}>about</Link>
        </NavLink>

        <NavLink activeLink={page === "Faq" && "changed"}>
          <Link to={"/faqs"}>Faq</Link>
        </NavLink>

        {!user && (
          <Buttons>
            <Link to={"/login"}>
              <Button btnStyle={"full"}>Sign In</Button>
            </Link>

            <Button btnStyle={"border"}>Sign Up</Button>
          </Buttons>
        )}
      </NavLinks>
    </Wrapper>
  );
};

export default Dropdown;
