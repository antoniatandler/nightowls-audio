import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Navigation from "@/components/Navbar";
import styled from "styled-components";

const RentailContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: absolute;
  top: 20%;
  color: white;
  width: 100%;
  justify-content: space-around;
`;

const RentailSection = styled.section`
  width: 25%;
  border: 3px solid green;
  text-align: center;
  padding: 20px;
  margin: 10px;
  height: 450px;
`;

const RentailHeading = styled.h4`
  font-size: 20px;
  letter-spacing: 2px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  margin: 15px;
`;

export default function Rentail() {
  return (
    <>
      <Heading />
      <Navigation />
      <RentailContainer>
        <RentailSection>
          <RentailHeading>LIGHTSHOW</RentailHeading>
          <article>Füllhaltertext</article>
        </RentailSection>
        <RentailSection>
          <RentailHeading>DECORATION</RentailHeading>
          <article>Füllhaltertext</article>
        </RentailSection>
        <RentailSection>
          <RentailHeading>EQUIPMENT</RentailHeading>
          <article>Füllhaltertext</article>
        </RentailSection>
        <RentailSection>
          <RentailHeading>EVENTSERVICE</RentailHeading>
          <article>Füllhaltertext</article>
        </RentailSection>
      </RentailContainer>
      <Footer />
    </>
  );
}
