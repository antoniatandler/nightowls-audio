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
          src="/../public/images/bjarne.jpg"
          width={250}
          height={250}
          alt="Bjarne"
        />
        <Bio>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          possimus ipsum at, facilis omnis ut accusantium quo optio,
          voluptatibus natus hic impedit labore numquam incidunt modi sed fuga
          dicta inventore dolor ipsam doloribus pariatur obcaecati maxime
          sapiente! Error, facilis consectetur. Quisquam, fuga illo beatae
          ducimus magnam vel odit consequuntur distinctio repellendus nesciunt.
          Ea, cum, incidunt explicabo numquam impedit voluptas ducimus deserunt
          sed quaerat ipsum in similique officiis harum nulla ipsa. Voluptatibus
          possimus itaque, totam aut saepe eos, doloribus obcaecati veritatis
          explicabo ducimus vel qui magni adipisci pariatur minus quia optio sed
          corrupti? Voluptates eius?
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
              src="/../public/icons/klangwolke.png"
              width={70}
              height={70}
              alt="Soundcloud-Icon"
            />
          </Link>
          Soundcloud
          <Link
            href="https://www.instagram.com/bjarne_infected/"
            target="_blank"
          >
            <SocialsIcon
              src="/../public/icons/instagram.png"
              width={70}
              height={70}
              alt="Instagram-Icon"
            />
          </Link>
          Instagram
          <Link href="https://www.facebook.com">
            <SocialsIcon
              src="/../public/icons/facebook.png"
              width={70}
              height={70}
              alt="Facebook-Icon"
            />
          </Link>
          Facebook
        </Links>
        <BookingButton href="/">booking</BookingButton>
      </MainContainer>
      <Footer />
    </>
  );
}
