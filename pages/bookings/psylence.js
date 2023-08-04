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

export default function Psylence() {
  return (
    <>
      <Heading />
      <Navigation />
      <MainContainer>
        <HeadingSection>
          <Name>PSYLENCE</Name>
          <Genre>- Full On Psytrance DJ -</Genre>
        </HeadingSection>
        <SingleArtistImage
          src="/images/psylence2.jpeg"
          width={250}
          height={250}
          alt="Psylence"
        />
        <Bio>
          Mit 14 Jahren begann er mit der Musik, allerdings mit House und
          Electro.
          <br />
          <br />
          Nach dem Besuch seines ersten Psytrance Festivals, war es keine Frage
          mehr für ihn, sich in diesem Genre zu probieren. In der Zeit zwischen
          2018 und 2022, konnte er zunehmend Erfahrungen sammeln und hatte im
          Mai 2022 seinen ersten Gig.
          <br />
          <br />
          Im Full On Psytrance hat er dann schließlich sein Favorit gefunden!
          <br />
          <br />
          Mittlerweile ist er ein Teil der Nightowls Crew und hatte dort auch
          schon den einen oder anderen Auftritt.
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
          <Link href="https://soundcloud.com/steven-baerwald" target="_blank">
            <SocialsIcon
              src="/icons/klangwolke.png"
              width={70}
              height={70}
              alt="Soundcloud-Icon"
            />
          </Link>
          Soundcloud
          <Link
            href="https://www.instagram.com/psylence.music/"
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
          {/* <Link href="https://www.facebook.com">
            <SocialsIcon
              src="/icons/facebook.png"
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
