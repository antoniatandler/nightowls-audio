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

export default function Janosch() {
  return (
    <>
      <Heading />
      <Navigation />
      <MainContainer>
        <HeadingSection>
          <Name>JANOSCH</Name>
          <Genre>- Hardtechno & Progressive Trance DJ -</Genre>
        </HeadingSection>
        <SingleArtistImage
          src="/../public/images/janosch.jpg"
          width={250}
          height={250}
          alt="Janosch"
        />
        <Bio>
          Schon als Kind erkannte Janosch seine Leidenschaft für die Musik. Mit
          7 Jahren begann er Klarinettenunterricht an der Musikschule und später
          wechselte er zur Posaune. Als Jugendlicher entdeckte er die
          elektronische Musik und fand Gefallen am DJing.
          <br />
          <br />
          Unter dem Pseudonym ADIP wurde er später in der Rostocker Goa-Szene
          bekannt. Mit 20 hatte er erste Auftritte auf Goa-Partys und erkundete
          neue Städte wie Darmstadt, Kassel, Münster und Berlin.
          <br />
          <br />
          Während der Pandemie fokussierte er sich auf den Hard Techno. Als
          Techno-DJ ist er heute sowohl in Rostock und gelegentlich
          deutschlandweit unterwegs. Janoschs Musik verzaubert die Gäste und
          erfreut die Herzen der Tanzenden mit donnernden und industriellen
          klängen.
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
            href="soundcloud.com/janoschmusic
"
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
          <Link href="https://www.instagram.com/janosch.music/" target="_blank">
            <SocialsIcon
              src="/../public/icons/instagram.png"
              width={70}
              height={70}
              alt="Instagram-Icon"
            />
          </Link>
          Instagram
          {/*  <Link href="https://www.facebook.com">
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
