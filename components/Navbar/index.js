import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu";

const NavContainer = styled.div`
  background-color: rgb(255, 255, 255, 0.5);
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 3px;
  text-align: center;
  z-index: +4;
  @media (max-width: 500px) {
    background-color: transparent;
  }
`;

const NavBar = styled.ul`
  @media (max-width: 500px) {
    display: none;
  }
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  padding: auto;
  letter-spacing: 1px;
  height: 30px;
  font-size: larger;
`;

const NavItem = styled.li`
  list-style: none;
  padding: 5px;
  width: 20%;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding-left: 5px;
  padding-right: 5px;

  &:hover,
  &:focus {
    color: rgb(139, 0, 0);
    border-left: 5px solid rgb(139, 0, 0);
    border-right: 5px solid rgb(139, 0, 0);
    width: max-content;
  }

  @media (max-width: 500px) {
    color: whitesmoke;
    margin: 10px;
    // margin-left: 10px;
    text-align: left;
    padding: 0;

    &:hover,
    &:focus {
      border-left: 0;
      border-right: 0;
    }
  }
`;

export const SubNavItemListAgency = styled.ul`
  display: ${({ AgencyIsOpen }) => (AgencyIsOpen ? "block" : "none")};
  z-index: +2;
  padding: 5px;
  margin-top: 0px;
`;

const SubNavItemListEvents = styled.ul`
  display: ${({ EventsIsOpen }) => (EventsIsOpen ? "block" : "none")};
  z-index: +2;
  padding: 5px;
  margin-top: 0px;
`;

export const SubNavItem = styled.li`
  list-style: none;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  letter-spacing: 1px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin: 3px;

  &:hover,
  &:focus {
    color: rgb(139, 0, 0);
    border-left: 5px solid rgb(139, 0, 0);
    border-right: 5px solid rgb(139, 0, 0);
  }

  @media (max-width: 500px) {
    &:hover,
    &:focus {
      border-left: 0;
      border-right: 0;
    }
  }
`;

const SubNavItemInProg = styled.button`
  list-style: none;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  letter-spacing: 1px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin: 3px;
  color: darkgrey;
  option: disabled;
  border: none;
  width: 100%;
  font-family: Blippo;
`;

export const SubNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 5px;

  &:hover,
  &:focus {
    color: rgb(139, 0, 0);
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const SubNavLinkInProg = styled.li`
  text-decoration: none;
  color: white;
  padding: 5px;
`;

export const SubNavItemListRentailAndService = styled.ul`
  display: ${({ RentailAndServiceIsOpen }) =>
    RentailAndServiceIsOpen ? "block" : "none"};
  z-index: 2;
  padding: 5px;
  margin-top: 0px;
`;

export default function Navigation() {
  const [EventsIsOpen, setEventsIsOpen] = useState(false);
  const [AgencyIsOpen, setAgencyIsOpen] = useState(false);

  const [RentailAndServiceIsOpen, setRentailAndServiceIsOpen] = useState(false);

  const toggleEventsMenu = () => {
    setEventsIsOpen(!EventsIsOpen);
  };

  const toggleAgencyMenu = () => {
    setAgencyIsOpen(!AgencyIsOpen);
  };

  const toggleRentailAndServiceMenu = () => {
    setRentailAndServiceIsOpen(!RentailAndServiceIsOpen);
  };

  return (
    <>
      <NavContainer>
        <BurgerMenu />
        <NavBar>
          <NavItem>
            <NavLink href="/">HOME</NavLink>
          </NavItem>
          <NavItem AgencyIsOpen={AgencyIsOpen}>
            <NavLink
              href="/bookings/bookings"
              onMouseOver={toggleAgencyMenu}
              onMouseLeave={toggleAgencyMenu}
            >
              NIGHTOWLS AGENCY
            </NavLink>
            <SubNavItemListAgency
              AgencyIsOpen={AgencyIsOpen}
              onMouseLeave={toggleAgencyMenu}
            >
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
          </NavItem>
          <NavItem EventsIsOpen={EventsIsOpen}>
            <NavLink
              href="/events"
              onMouseOver={toggleEventsMenu}
              onMouseLeave={toggleEventsMenu}
            >
              EVENTS
            </NavLink>
            <SubNavItemListEvents
              EventsIsOpen={EventsIsOpen}
              onMouseLeave={toggleEventsMenu}
            >
              <SubNavItem>
                <SubNavLink href="/events">STRICTLY TECHNO</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/events">NACHTEULEN GOA</SubNavLink>
              </SubNavItem>
            </SubNavItemListEvents>
          </NavItem>
          <NavItem RentailAndServiceIsOpen={RentailAndServiceIsOpen}>
            <NavLink
              href="/rentail"
              onMouseOver={toggleRentailAndServiceMenu}
              onMouseLeave={toggleRentailAndServiceMenu}
            >
              RENTAIL & SERVICE
            </NavLink>
            <SubNavItemListRentailAndService
              RentailAndServiceIsOpen={RentailAndServiceIsOpen}
              onMouseLeave={toggleRentailAndServiceMenu}
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
              <hr />
              <SubNavItemInProg>
                <SubNavLinkInProg href="/rentail/">
                  EVENTSERVICE (soon)
                </SubNavLinkInProg>
              </SubNavItemInProg>
            </SubNavItemListRentailAndService>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">CONTACT</NavLink>
          </NavItem>
        </NavBar>
      </NavContainer>
    </>
  );
}
