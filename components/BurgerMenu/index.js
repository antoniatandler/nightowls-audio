import styled from "styled-components";
import { useState } from "react";
import {
  NavItem,
  NavLink,
  SubNavItemListRentailAndService,
  SubNavItem,
  SubNavLink,
  SubNavItemListAgency,
} from "../Navbar";

const HeadingContainer = styled.header`
  @media (max-width: 500px) {
    display: flexbox;
    background-color: rgba(255, 255, 255, 0.5);
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
  height: 3px;
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
  text-align: left;
  background-color: black;
  font-size: 25px;
`;

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [RentailAndServiceIsOpen, setRentailAndServiceIsOpen] = useState(false);
  const [AgencyIsOpen, setAgencyIsOpen] = useState(false);

  const toggleAgencyMenu = () => {
    setAgencyIsOpen(!AgencyIsOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleRentailAndServiceMenu = () => {
    setRentailAndServiceIsOpen(!RentailAndServiceIsOpen);
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
        <MenuItem onMouseEnter={toggleAgencyMenu}>
          <NavLink href="/bookings/bookings">NIGHTOWLS AGENCY</NavLink>
        </MenuItem>
        <SubNavItemListAgency AgencyIsOpen={AgencyIsOpen}>
          <SubNavItem>
            <SubNavLink href="/bookings/annar">ANNÅR</SubNavLink>
          </SubNavItem>
          <SubNavItem>
            <SubNavLink href="/bookings/bjarne">BJARNE</SubNavLink>
          </SubNavItem>
          <SubNavItem>
            <SubNavLink href="/bookings/cybertron">CYBERTRON</SubNavLink>
          </SubNavItem>
          <SubNavItem>
            <SubNavLink href="/bookings/frankczer">FRANK CZER</SubNavLink>
          </SubNavItem>
          <SubNavItem>
            <SubNavLink href="/bookings/gandaalv">GANDAALV</SubNavLink>
          </SubNavItem>
          <SubNavItem>
            <SubNavLink href="/bookings/infected">INFECTED</SubNavLink>
          </SubNavItem>
          <SubNavItem>
            <SubNavLink href="/bookings/janosch">JANOSCH</SubNavLink>
          </SubNavItem>
          <SubNavItem>
            <SubNavLink href="/bookings/klexgeist">KLEX-GEIST</SubNavLink>
          </SubNavItem>
          <SubNavItem>
            <SubNavLink href="/bookings/psylence">PSYLENCE</SubNavLink>
          </SubNavItem>
          <SubNavItem>
            <SubNavLink href="/bookings/vanta">VANTA</SubNavLink>
          </SubNavItem>
        </SubNavItemListAgency>
        <MenuItem>
          <NavLink href="/events">EVENTS</NavLink>
        </MenuItem>
        <MenuItem onMouseEnter={toggleRentailAndServiceMenu}>
          <NavLink href="/rentail">RENTAIL</NavLink>
        </MenuItem>
        <SubNavItemListRentailAndService
          RentailAndServiceIsOpen={RentailAndServiceIsOpen}
        >
          <SubNavItem>
            <SubNavLink href="/rentail/#equipment">EQUIPMENT</SubNavLink>
          </SubNavItem>
          <SubNavItem>
            <SubNavLink href="/rentail/#lightshow">LIGHT SHOW</SubNavLink>
          </SubNavItem>
          <SubNavItem>
            <SubNavLink href="/rentail/#decoration">DECORATION</SubNavLink>
          </SubNavItem>
        </SubNavItemListRentailAndService>
        <MenuItem>
          <NavLink href="/contact">CONTACT</NavLink>
        </MenuItem>
      </DropdownMenu>
    </>
  );
}
