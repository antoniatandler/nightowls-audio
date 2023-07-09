import Heading from "@/components/Heading";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import styled from "styled-components";

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-around;
  position: absolute;
  top: 20%;
  width: 100%;
  height: 500px;
  text-align: center;
`;

const StrictlyTechnoSection = styled.section`
  width: 50%;
  margin: 15px;
  border: 3px solid green;
  flex-direction: column;
`;

const NightowlsGoaSection = styled.section`
  width: 50%;
  margin: 15px;
  border: 3px solid green;
  flex-direction: column;
`;

const EventsHeading = styled.h4`
  color: white;
  font-size: 30px;
  margin-top: 70%;
`;

export default function Events() {
  return (
    <>
      <Heading />
      <Navigation />
      <EventContainer>
        <StrictlyTechnoSection>
          <EventsHeading>STRICTLY TECHNO</EventsHeading>
        </StrictlyTechnoSection>

        <NightowlsGoaSection>
          <EventsHeading>NACHTEULEN GOA</EventsHeading>
        </NightowlsGoaSection>
      </EventContainer>
      <Footer />
    </>
  );
}
