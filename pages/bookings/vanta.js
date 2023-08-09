import Heading from "@/components/Heading";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {
  MainContainer,
  SingleArtistImage,
  HeadingSection,
  Name,
  Genre,
  Bio,
  Links,
  BookingButton,
  SocialsIcon,
} from "./annar";

export default function Vanta() {
  return (
    <>
      <Heading />
      <Navigation />
      <MainContainer>
        <HeadingSection>
          <Name>VANTA</Name>
          <Genre>- Hardtechno DJ -</Genre>
        </HeadingSection>
        <SingleArtistImage
          src="/images/vanta.jpg"
          width={250}
          height={250}
          alt="Vanta"
        />
        <Bio>
          Like it hard?
          <br />
          Vanta bringt euch harten Dark Techno und twisted Acid Basslines
          straight aus der Hölle.
          <br />
          <br />
          So kreativ wie ihre visuelle Kunst sind auch ihre Sets, die euch als
          Gesamtkunstwerk auf eine emotionale Reise schicken
          <br />
          <br />- Tanzt kaputt, was euch kaputt macht!
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
          <Link
            href="https://soundcloud.com/user-376939503-436350701/vanta-necrosis?ref=clipboard&p=i&c=0&si=3CF8000F53BA4CD19E150CA51A3A2E0E&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            target="_blank"
          >
            <SocialsIcon
              src="/icons/klangwolke.png"
              width={70}
              height={70}
              alt="Soundcloud-Icon"
            />
          </Link>
          {/* Soundcloud */}
          <Link href="https://www.instagram.com/vantavirtu/" target="_blank">
            <SocialsIcon
              src="/icons/instagram.png"
              width={70}
              height={70}
              alt="Instagram-Icon"
            />
          </Link>
          {/* Instagram */}
          {/* <Link href="https://www.facebook.com" target="_blank">
            <SocialsIcon
              src="/../public/icons/facebook.png"
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
