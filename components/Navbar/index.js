import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled.div`
  background-color: rgb(255, 255, 255, 0.5);
  color: white;
  position: fixed;
  top: 90px;
  width: 100%;
`;

const NavBar = styled.ul`
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
`;

const NavItem = styled.li`
  list-style: none;
  border-radius: 50px;
  padding: 10px;
  width: 180px;
  text-align: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function Navigation() {
  return (
    <>
      <NavContainer>
        <NavBar>
          <NavItem>
            <NavLink href="/booking">Bookings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/rentail">Rentail</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/deco">Deco</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </NavBar>
      </NavContainer>
    </>
  );
}
