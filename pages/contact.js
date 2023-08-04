import Heading from "@/components/Heading";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImpressumContainer } from "./impressum";
import styled from "styled-components";

const ContactHeading = styled.h2`
  text-align: center;
  margin: 0;
  border-bottom: 2px solid darkred;
  font-size: 40px;
`;

const ContactValues = styled.p`
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: larger;
`;

export default function Contact() {
  return (
    <>
      <Heading />
      <Navigation />
      <ImpressumContainer>
        <ContactHeading>Contact</ContactHeading>
        <ContactValues>
          Phone: +49 0 178 6775776
          <br />
          E-Mail: frank@nightowls-audio.de
        </ContactValues>
      </ImpressumContainer>
      <Footer />
    </>
  );
}
