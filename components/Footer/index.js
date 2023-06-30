import styled from "styled-components";
import Link from "next/link";

const FootBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  padding: auto;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  width: 100%;
`;

const FootBar = styled.ul`
  display: flex;
  justify-content: flex-end;
  //   padding: 10px;
  //   margin: 10px;
`;

const FootBarItem = styled.li`
  list-style: none;
  font-size: 12px;
  margin: 0;
  padding: 0;
`;

const FootBarLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 10px;
  padding: 10px;
`;

export default function Footer() {
  return (
    <>
      <FootBarContainer>
        <FootBar>
          <FootBarItem>
            <FootBarLink href="/">Impressum</FootBarLink>
          </FootBarItem>
        </FootBar>
      </FootBarContainer>
    </>
  );
}