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

export default function KlexGeist() {
  return (
    <>
      <Heading />
      <Navigation />
      <MainContainer>
        <HeadingSection>
          <Name>KLEX-GEIST</Name>
          <Genre>- Melodic Hi-Tech Producer & DJ -</Genre>
        </HeadingSection>
        <SingleArtistImage
          src="/images/klexgeist.jpg"
          width={250}
          height={250}
          alt="Klex-Geist"
        />
        <Bio>
          Text folgt ...
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
          <Link href="https://soundcloud.com/klex-geist" target="_blank">
            <SocialsIcon
              src="/icons/klangwolke.png"
              width={70}
              height={70}
              alt="Soundcloud-Icon"
            />
          </Link>
          {/* Soundcloud */}
          <Link href="https://www.instagram.com/klex_geist/" target="_blank">
            <SocialsIcon
              src="/icons/instagram.png"
              width={70}
              height={70}
              alt="Instagram-Icon"
            />
          </Link>
          {/* Instagram */}
          {/* <Link href="https://www.facebook.com">
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
