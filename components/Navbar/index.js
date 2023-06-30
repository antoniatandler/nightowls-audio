import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const NavContainer = styled.div`
  background-color: rgb(255, 255, 255, 0.5);
  position: fixed;
  top: 90px;
  width: 100%;
  padding: 5px;
`;

const NavBar = styled.ul`
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: auto;
  letter-spacing: 1px;
  height: 30px;
`;

const NavItem = styled.li`
  list-style: none;
  padding: 5px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding-left: 5px;
  padding-right: 5px;

  &:hover,
  &:focus {
    color: rgb(139, 0, 0);
    border-left: 5px solid rgb(139, 0, 0);
    border-right: 5px solid rgb(139, 0, 0);
    margin-left: -5px;
    margin-right: -5px;
    display: fixed;
  }
`;

const SubNavItemList = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 2;
  padding: 0;
`;

const SubNavItem = styled.li`
  list-style: none;
  margin: 3px;
  padding: 3px;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 10px;
  text-align: center;
  letter-spacing: 1px;

  &:hover,
  &:focus {
    color: rgb(139, 0, 0);
    border-bottom: 3px solid rgb(139, 0, 0);
    padding-bottom: 3px;
  }
`;

const SubNavLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover,
  &:focus {
    color: rgb(139, 0, 0);
    border-bottom: 3px solid rgb(139, 0, 0);
    padding-bottom: 3px;
  }
`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavContainer>
        <NavBar>
          <NavItem>
            <NavLink href="/">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/booking" onMouseOver={toggleMenu}>
              NIGHTOWLS AGENCY
            </NavLink>
            <SubNavItemList isOpen={isOpen} onMouseLeave={toggleMenu}>
              <SubNavItem>
                <SubNavLink href="/booking/">BJARNE</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">BJARNE</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">BJARNE</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">BJARNE</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">BJARNE</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">BJARNE</SubNavLink>
              </SubNavItem>
            </SubNavItemList>
          </NavItem>
          <NavItem>
            <NavLink href="/events">EVENTS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/rentail">RENTAIL & SERVICE </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">CONTACT</NavLink>
          </NavItem>
        </NavBar>
      </NavContainer>
    </>
  );
}
