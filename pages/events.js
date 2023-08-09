import Heading from "@/components/Heading";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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

  @media (max-width: 500px) {
    flex-direction: column;
    height: fit-content;
    margin: auto;
    padding-bottom: 50px;
  }
`;

const StrictlyTechnoSection = styled.section`
  width: 50%;
  margin: 15px;
  // border: 3px solid green;
  flex-direction: column;
  margin-top: 40px;
  @media (max-width: 500px) {
    font-size: 20px;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
  }
`;

const NightowlsGoaSection = styled.section`
  width: 50%;
  margin: 15px;
  // border: 3px solid green;
  flex-direction: column;
  margin-top: 40px;
  @media (max-width: 500px) {
    font-size: 20px;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
  }
`;

const EventsSubHeading = styled.h4`
  color: white;
  font-size: 30px;

  @media (max-width: 500px) {
    font-size: 20px;
    justify-content: center;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const StrictlyTechnoFlyer = styled(Image)`
  margin: auto;
  height: 100%;
  width: auto;

  @media (max-width: 500px) {
    height: 300px;
  }
`;

const NightowlsGoaFlyer = styled(Image)`
  margin: auto;
  height: 100%;
  width: auto;

  @media (max-width: 500px) {
    height: 300px;
  }
`;

const EventsMainHeading = styled.h2`
  text-align: center;
  letter-spacing: 2px;
  color: white;
  font-size: 30px;
  margin-top: 10%;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  margin-left: 33%;
  width: 33%;

  @media (max-width: 500px) {
    margin-top: 70px;
    margin-left: 0;
    width: 100%;
  }
`;

const EventLink = styled(Link)``;

export default function Events() {
  return (
    <>
      <Heading />
      <Navigation />
      <EventsMainHeading>NEXT EVENTS</EventsMainHeading>
      <EventContainer>
        <StrictlyTechnoSection>
          <EventLink
            href="https://www.instagram.com/p/CvGBSXzA0na/"
            target="_blank"
          >
            <StrictlyTechnoFlyer
              src="/events/bunker-august.jpg"
              height={450}
              width={450}
              alt="strictly techno flyer"
            />
          </EventLink>
          <EventsSubHeading>STRICTLY TECHNO</EventsSubHeading>
        </StrictlyTechnoSection>

        <NightowlsGoaSection>
          <EventLink
            href="https://www.instagram.com/p/Cuj_l0Nt7aD/?img_index=1"
            target="_blank"
          >
            <NightowlsGoaFlyer
              src="/events/zwischenbau-juli/insta-story1.jpg"
              height={450}
              width={450}
              alt="nachteulen goa flyer"
            />
          </EventLink>
          <EventsSubHeading>NACHTEULEN GOA</EventsSubHeading>
        </NightowlsGoaSection>
      </EventContainer>
      <Footer />
    </>
  );
}
