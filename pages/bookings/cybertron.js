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

export default function Cybertron() {
  return (
    <>
      <Heading />
      <Navigation />
      <MainContainer>
        <HeadingSection>
          <Name>CYBERTRON</Name>
          <Genre>- Hi-Tech DJ -</Genre>
        </HeadingSection>
        <SingleArtistImage
          src="/images/cybertron2.jpeg"
          width={250}
          height={250}
          alt="Cybertron"
        />
        <Bio>
          Cybertron, mit bürgerlichem Namen Erik Prehn, begann seine Reise im
          Jahr 2017, als er zum ersten Mal mit den treibenden Schellen-Beats in
          Kontakt kam.
          <br />
          <br />
          Seine Leidenschaft für die Hi-Tech-Musik entwickelte sich schnell, und
          im Jahr 2020 startete er sein eigenes Projekt unter dem Namen
          Cybertron.
          <br />
          Seit 2022 ist er Resident-DJ bei Nightowls Audio und hat sich in
          kurzer Zeit einen Namen in der Szene gemacht.
          <br />
          <br />
          Seine einzigartige Musik und sein Stil begeistern das Publikum immer
          wieder aufs Neue.
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
            href="https://soundcloud.com/cybertron_official"
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
            href="https://www.instagram.com/cybertron_music/"
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
          <Link
            href="https://www.facebook.com/profile.php?id=100063529300398"
            target="_blank"
          >
            <SocialsIcon
              src="/icons/facebook.png"
              width={70}
              height={70}
              alt="Facebook-Icon"
            />
          </Link>
          Facebook
        </Links>
        <BookingButton href="./booking">booking</BookingButton>
      </MainContainer>
      <Footer />
    </>
  );
}
