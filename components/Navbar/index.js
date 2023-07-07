import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const NavContainer = styled.div`
  background-color: rgb(255, 255, 255, 0.5);
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 3px;
  text-align: center;
  z-index: +4;
`;

const NavBar = styled.ul`
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
    width: max-content;
  }
`;

const SubNavItemListAgency = styled.ul`
  display: ${({ AgencyIsOpen }) => (AgencyIsOpen ? "block" : "none")};
  z-index: +2;
  padding: 5px;
  margin-top: 6px;
`;

const SubNavItemListEvents = styled.ul`
  display: ${({ EventsIsOpen }) => (EventsIsOpen ? "block" : "none")};
  z-index: +2;
  padding: 5px;
  margin-top: 6px;
`;

const SubNavItem = styled.li`
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
`;

const SubNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 5px;

  &:hover,
  &:focus {
    color: rgb(139, 0, 0);
  }
`;

const SubNavItemListRentailAndService = styled.ul`
  display: ${({ RentailAndServiceIsOpen }) =>
    RentailAndServiceIsOpen ? "block" : "none"};
  z-index: 2;
  padding: 5px;
  margin-top: 6px;
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
        <NavBar>
          <NavItem>
            <NavLink href="/">HOME</NavLink>
          </NavItem>
          <NavItem AgencyIsOpen={AgencyIsOpen}>
            <NavLink href="/booking" onMouseOver={toggleAgencyMenu}>
              NIGHTOWLS AGENCY
            </NavLink>
            <SubNavItemListAgency
              AgencyIsOpen={AgencyIsOpen}
              onMouseLeave={toggleAgencyMenu}
            >
              <SubNavItem>
                <SubNavLink href="/booking/">ANNÂR</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">BJARNE</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">CYBERTRON</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">FRANK CZER</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">GANDAALV</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">INFECTED</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">JANOSCH</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">JOHANNA MEMMLER</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">KLEX GEIST</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">PSYLENCE</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/booking/">SON OF SCOBA</SubNavLink>
              </SubNavItem>
            </SubNavItemListAgency>
          </NavItem>
          <NavItem EventsIsOpen={EventsIsOpen}>
            <NavLink href="/events" onMouseOver={toggleEventsMenu}>
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
            <NavLink href="/rentail" onMouseOver={toggleRentailAndServiceMenu}>
              RENTAIL & SERVICE
            </NavLink>
            <SubNavItemListRentailAndService
              RentailAndServiceIsOpen={RentailAndServiceIsOpen}
              onMouseLeave={toggleRentailAndServiceMenu}
            >
              <SubNavItem>
                <SubNavLink href="/rentail/">LIGHT SHOW</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/rentail/">DECORATION</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/rentail/">EQUIPMENT</SubNavLink>
              </SubNavItem>
              <SubNavItem>
                <SubNavLink href="/rentail/">EVENTSERVICE</SubNavLink>
              </SubNavItem>
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
