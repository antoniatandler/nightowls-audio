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

export default function Bjarne() {
  return (
    <>
      <Heading />
      <Navigation />
      <MainContainer>
        <HeadingSection>
          <Name>BJARNE</Name>
          <Genre>- Techno DJ -</Genre>
        </HeadingSection>
        <SingleArtistImage
          src="/images/bjarne2.jpg"
          width={250}
          height={250}
          alt="Bjarne"
        />
        <Bio>
          Gestartet ist Infected mit dem Projekt 2014 in den Clubs seiner
          Heimatstadt Rostock.
          <br />
          <br />
          Mittlerweile ist er in weiten Teilen Deutschlands bekannt und bringt
          immer wieder seine eigene Note in seine Progressive Trance-Sets ein.
          <br />
          <br />
          In den vergangenen Jahren stieg sein Bekanntheitsgrad durch Auftritte
          auf verschiedenen In- und Outdoor-Festivals in Deutschland, sowie
          einem Gig im benachbarten Schweden. Während dieser Gigs war es ihm
          möglich Szenegrößen wie Neelix, Fabio & Moon, Symphonix und viele
          weitere zu supporten.
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
            href="https://soundcloud.com/infectedprogressive"
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
          <Link
            href="https://www.instagram.com/bjarne_infected/"
            target="_blank"
          >
            <SocialsIcon
              src="/icons/instagram.png"
              width={70}
              height={70}
              alt="Instagram-Icon"
            />
          </Link>
          {/* Instagram */}
          <Link
            href="https://www.facebook.com/Infected.Rostock"
            target="_blank"
          >
            <SocialsIcon
              src="/icons/facebook.png"
              width={70}
              height={70}
              alt="Facebook-Icon"
            />
          </Link>
          {/* Facebook */}
        </Links>
        <BookingButton href="./booking">booking</BookingButton>
      </MainContainer>
      <Footer />
    </>
  );
}
