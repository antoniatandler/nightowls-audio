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
  // border: 3px solid pink;
  display: flex;
  color: white;
  // justify-content: space-evenly;
  // align-items: center;
`;

export const SingleArtistImage = styled(Image)`
  position: absolute;
  right: 30px;
  height: 300px;
  width: 300px;
  // border: 3px solid green;
  margin-top: 30px;
`;

export const HeadingSection = styled.section`
  height: fit-content;
  // border: 3px solid green;
  position: absolute;
  margin: auto;
  margin-top: 20px;
  margin-left: 5%;
  width: 70%;
  text-align: center;
  letter-spacing: 2px;
`;

export const Name = styled.h2`
  font-size: 40px;
  color: white;
  // posiiton: absolute;
  margin: auto;
  // margin-top: 25px;
`;

export const Genre = styled.h3`
  font-size: 30px;
  color: white;
  margin: auto;
`;

export const Bio = styled.text`
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin: auto;
  width: 70%;
  height: fit-content;
  position: absolute;
  margin-top: 130px;
  margin-left: 5%;
  padding: 20px;
  text-align: center;
`;

export const Links = styled.section`
  // border: 1px solid white;
  margin: auto;
  margin-bottom: 30px;
  height: fit-content;
  width: 50%;
  margin-left: 15%;
  display: flex;
  flex-wrap: no-wrap;
  padding: auto;
  justify-content: center;
  align-items: center;
`;

export const BookingButton = styled(Link)`
  border: 3px groove white;
  border-radius: 50px;
  margin: auto;
  margin-right: 15%;
  margin-bottom: 60px;
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
`;

export const SocialsIcon = styled(Image)`
  background-color: white;
  border-radius: 100%;

  padding: 1px;
  margin: 20px;

  &:hover {
    background-color: darkred;
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
          <Genre>- Hardtechno DJ -</Genre>
        </HeadingSection>
        <SingleArtistImage
          src="/../public/images/logo.jpg"
          width={250}
          height={250}
          alt="Annâr"
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
          <Link href="https://soundcloud.com/anna-ewald" target="_blank">
            <SocialsIcon
              src="/../public/icons/klangwolke.png"
              width={70}
              height={70}
              alt="Soundcloud-Icon"
            />
          </Link>
          Soundcloud
          <Link href="https://www.instagram.com/annaewld/" target="_blank">
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
