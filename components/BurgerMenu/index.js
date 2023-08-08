import styled from "styled-components";
import { useState } from "react";
import { NavItem, NavLink } from "../Navbar";

const HeadingContainer = styled.header`
  @media (max-width: 500px) {
    display: flexbox;
  }
  position: fixed;
  display: none;
  justify-content: space-between;
  top: 15px;
  margin-top: -15px;
  padding-top: 10px;
  padding-bottom: 10px;
  right: 0;
  left: 15px;
  height: 50px;
  margin-left: -15px;
  z-index: 1;
`;

const HamburgerModel = styled.button`
  display: flex;
  flex-direction: column;
  width: 25px;
  height: 20px;
  cursor: pointer;
  justify-content: flex-start;
  margin-top: 10px;
  padding: 0;
  background: none;
  border: 0;
  margin-left: 15px;
`;

const Line = styled.div`
  width: 98%;
  height: 2px;
  background-color: rgb(43, 24, 15);
  margin: 2px;
`;

const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  margin-left: -45px;
  position: fixed;
  top: 35px;
  z-index: +1;
`;

const MenuItem = styled.li`
  list-style: none;
  background-color: green;
`;

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeadingContainer>
        <HamburgerModel onClick={toggleMenu}>
          <Line />
          <Line />
          <Line />
        </HamburgerModel>
      </HeadingContainer>
      <DropdownMenu isOpen={isOpen}>
        <MenuItem>
          <NavLink href="/">HOME</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="/bookings/bookings">NIGHTOWLS AGENCY</NavLink>
        </MenuItem>
        {/* <FeatureButton variant="secondary" href="/">
            <BiHomeHeart size={16} />
          </FeatureButton> */}
        <MenuItem>
          {/* <FeatureButton variant="secondary" href="/poses">
            <TbYoga size={16} />
          </FeatureButton> */}
        </MenuItem>
        <MenuItem>
          {/* <FeatureButton variant="secondary" href="/poses/bookmarks" size={16}>
            ♥️
          </FeatureButton> */}
        </MenuItem>
      </DropdownMenu>
    </>
  );
}
