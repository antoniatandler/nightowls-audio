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

export default function FrankCzer() {
  return (
    <>
      <Heading />
      <Navigation />
      <MainContainer>
        <HeadingSection>
          <Name>FRANK CZER</Name>
          <Genre>- House & Peaktime DJ -</Genre>
        </HeadingSection>
        <SingleArtistImage
          src="/images/frank.jpg"
          width={250}
          height={250}
          alt="Frank Czer"
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
          <Link
            href="https://soundcloud.com/gandaalv-frankczer"
            target="_blank"
          >
            <SocialsIcon
              src="/icons/klangwolke.png"
              width={70}
              height={70}
              alt="Soundcloud-Icon"
            />
          </Link>
          Soundcloud
          <Link
            href="https://www.instagram.com/frankczer_music/"
            target="_blank"
          >
            <SocialsIcon
              src="/icons/instagram.png"
              width={70}
              height={70}
              alt="Instagram-Icon"
            />
          </Link>
          Instagram
          {/*<Link href="https://www.facebook.com" target="_blank">
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
