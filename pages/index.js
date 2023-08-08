import Heading from "@/components/Heading";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import Image from "next/image";

const LogoImage = styled(Image)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  size: cover;
  z-index: -2;
  width: auto;
  height: auto;
  @media (max-width: 500px) {
    height: 275px;
    width: fit-content;
  }
`;

export default function HomePage() {
  return (
    <>
      {/* <Heading /> */}
      <Navigation />
      <LogoImage src="/images/logo.jpg" width={600} height={500} />
      <Footer />
    </>
  );
}
