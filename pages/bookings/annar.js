import Heading from "@/components/Heading";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const MainContainer = styled.div`
  width: 100%;
  height: 550px;
  margin-top: 170px;
  display: flex;
  color: rgba(255, 255, 255, 0.75);

  @media (max-width: 500px) {
    justify-content: center;
    height: fit-content;
    flex-direction: column;
  }
`;

export const SingleArtistImage = styled(Image)`
  position: absolute;
  right: 3%;
  height: 300px;
  width: 300px;
  // border: 3px solid green;
  margin-top: 30px;

  @media (max-width: 500px) {
    left: 50%;
    transform: translate(-50%);
    top: 5%;
  }
`;

export const HeadingSection = styled.section`
  height: fit-content;
  flex-direction: column;
  display: flex;
  margin: auto;
  margin-top: 0;
  width: 70%;
  text-align: center;
  // margin-left: 5%;
  justify-content: space-around;
  @media (max-width: 500px) {
    position: absolute;

    padding-top: 300px;
    z-index: 1;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const Name = styled.h2`
  font-size: 40px;
  color: white;
  margin: auto;
  margin-top: 0;
  // letter-spacing: 25px;
  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

export const Genre = styled.h3`
  font-size: 30px;
  color: white;
  // margin: auto;
  margin-top: 5px;
  letter-spacing: 2px;
  @media (max-width: 500px) {
    font-size: 20px;
    justify-content: center;
    margin: 0;
    padding: 0;
    letter-spacing: 0;
  }
`;

export const Bio = styled.text`
  border: 10px double rgba(255, 255, 255, 0.5);
  font-size: 25px;
  margin: auto;
  height: max-content;
  width: 70%;
  height: fit-content;
  position: absolute;
  margin-top: 110px;
  margin-left: 3%;
  font-size: 20px;
  letter-spacing: 1px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;

  @media (max-width: 500px) {
    left: 50%;
    transform: translate(-50%);
    margin: 0;
    position: absolute;
    top: 70%;
    font-size: 16px;
    width: 90%;
    height: fit-content;
    // text-align: block;
    padding: 10px;
    padding-bottom: 50px;
    border-bottom: 0;
  }
`;

export const Links = styled.section`
  // border: 1px solid white;
  margin: auto;
  margin-bottom: 20px;
  height: fit-content;
  margin-left: 15%;
  display: flex;
  flex-wrap: no-wrap;
  padding: auto;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 70%;
  margin-left: 5%;
  bottom: 50px;

  @media (max-width: 500px) {
    margin: 0;
    position: absolute;
    margin-left: 0;
    flex-direction: column;
    // top: 130%;
    right: -5px;
    // transform: translate(-5%);
    width: auto;
    bottom: auto;
    top: 50px;
    // width: 90%;
  }
`;

export const BookingButton = styled(Link)`
  border: 3px groove white;
  border-radius: 50px;
  margin: auto;
  margin-right: 15%;
  margin-bottom: 20px;
  width: fit-content;
  height: 50px;
  display: flex;
  flex-wrap: no-wrap;
  padding: auto;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  font-size: 30px;
  color: darkred;
  border-color: darkred;

  &:hover {
    color: white;
    border-color: white;
  }

  @media (max-width: 500px) {
    position: relative;
    // top: 150%;
    font-size: 16px;
    width: 70%;
    margin-top: 120px;
    // transform: translate(-50%);
    z-index: 2;
    background-color: darkred;
    color: black;
  }
`;

export const SocialsIcon = styled(Image)`
  background-color: white;
  border-radius: 100%;

  padding: 1px;
  margin: 20px;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
    margin: 20px;
    margin-bottom: 0;
  }
`;

export default function Annår() {
  return (
    <>
      <Heading />
      <Navigation />
      <MainContainer>
        <HeadingSection>
          <Name>ANNÅR</Name>
          <Genre>- Hardtechno & Schranz DJ -</Genre>
        </HeadingSection>
        <SingleArtistImage
          src="/images/annar2.jpg"
          width={250}
          height={250}
          alt="Annâr"
        />
        <Bio>
          ANNÅRist eine in Mecklenburg-Vorpommern geborene Techno-Künstlerin mit
          Sitz in Rostock, Norddeutschland. Ihre musikalischen Anfänge lagen im
          Klavierspiel und anderen klassischen Instrumenten. In den letzten
          Monaten hat sie das Publikum mit ihrem einzigartigen und fesselnden
          Stil in Clubs und auf Festivals unterhalten und mit donnernden und
          melodischen Klängen verzaubert.
          {/* ------------- Text ------------
          <br />
          ------------- Text ------------
          <br />
          ------------- Text ------------
          <br />
          ------------- Text ------------
          <br />
          ------------- Text ------------ */}
        </Bio>
        <Links>
          <Link href="https://soundcloud.com/anna-ewald" target="_blank">
            <SocialsIcon
              src="/icons/klangwolke.png"
              width={70}
              height={70}
              alt="Soundcloud-Icon"
            />
          </Link>
          {/* Soundcloud */}
          <Link href="https://www.instagram.com/annaewld/" target="_blank">
            <SocialsIcon
              src="icons/instagram.png"
              width={70}
              height={70}
              alt="Instagram-Icon"
            />
          </Link>
          {/* Instagram */}
          {/* <Link href="https://www.facebook.com" target="_blank">
            <SocialsIcon
              src="icons/facebook.png"
              width={70}
              height={70}
              alt="Facebook-Icon"
            />
          </Link>
          Facebook */}
        </Links>
        <BookingButton href="./booking">booking</BookingButton>
      </MainContainer>
      <Footer />
    </>
  );
}
