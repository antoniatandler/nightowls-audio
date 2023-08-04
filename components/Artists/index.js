import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const ArtistContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  // border: 5px solid pink;
  color: green;
  position: absolute;
  width: 100%;
  top: 136px;
  bottom: 55px;
  text-align: center;
  height: fit-content;
  padding-bottom: 60px;
`;

const ArtistPreview = styled.article`
  color: black;
  margin: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 10px;
  height: max-content;
  width: 22%;
`;

const ArtistImage = styled(Image)`
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: ${({ ArtistImageIsVisible }) =>
    ArtistImageIsVisible ? "none" : "block"};
`;

const ArtistBioHeading = styled.h4`
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  letter-spacing: 1px;
`;

const ArtistBio = styled.text`
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  display: ${({ ArtistBioIsVisible }) =>
    ArtistBioIsVisible ? "flex" : "none"};
  height: 250px;
  align-items: center;
  justify-content: center;
`;

const ArtistName = styled.h3`
  // background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  text-align: center;
  margin: auto;
  letter-spacing: 2px;
  color: white;
  height: 25px;
  font-size: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
`;

const ArtistLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: darkred;
  }
`;

export default function Artists() {
  const [artists, setArtists] = useState([
    {
      name: "ANNÅR",
      artistID: "annar",
      bioIsVisible: false,
      imageIsVisible: true,
      imageSrc: "/../public/images/annar.jpg",
      genre: "Hardtechno & Schranz DJ",
    },
    {
      name: "BJARNE",
      artistID: "bjarne",
      bioIsVisible: false,
      imageIsVisible: true,
      imageSrc: "/../public/images/bjarne.jpg",
      genre: "Techno DJ",
    },
    {
      name: "CYBERTRON",
      artistID: "cybertron",
      bioIsVisible: false,
      imageIsVisible: true,
      imageSrc: "/../public/images/cybertron3.jpeg",
      genre: "Hi-Tech DJ",
    },
    {
      name: "FRANK CZER",
      artistID: "frankczer",
      bioIsVisible: false,
      imageIsVisible: true,
      imageSrc: "/../public/images/frank.jpg",
      genre: "House & Peaktime DJ",
    },
    {
      name: "GANDAALV",
      artistID: "gandaalv",
      bioIsVisible: false,
      imageIsVisible: true,
      imageSrc: "/../public/images/frank.jpg",
      genre: "Psytrance DJ",
    },
    {
      name: "INFECTED",
      artistID: "infected",
      bioIsVisible: false,
      imageIsVisible: true,
      imageSrc: "/../public/images/bjarne.jpg",
      genre: "Progressive Trance DJ",
    },
    {
      name: "JANOSCH",
      artistID: "janosch",
      bioIsVisible: false,
      imageIsVisible: true,
      imageSrc: "/../public/images/janosch.jpg",
      genre: "Hardtechno & Prog. Trance DJ",
    },
    // {
    //   name: "JOHANNA MEMMLER",
    //   artistID: "johannamemmler",
    //   bioIsVisible: false,
    //   imageIsVisible: true,
    //   imageSrc: "/../public/images/logo.jpg",
    //   genre: "Groovy Hardtechno DJ",
    // },
    {
      name: "KLEX-GEIST",
      artistID: "klexgeist",
      bioIsVisible: false,
      imageIsVisible: true,
      imageSrc: "/../public/images/klexgeist.jpg",
      genre: "Hi-Tech DJ",
    },
    {
      name: "PSYLENCE",
      artistID: "psylence",
      bioIsVisible: false,
      imageIsVisible: true,
      imageSrc: "/../public/images/psylence.jpeg",
      genre: "Full On Psytrance DJ",
    },
    {
      name: "VANTA",
      artistID: "vanta",
      bioIsVisible: false,
      imageIsVisible: true,
      imageSrc: "/../public/images/vanta.jpg",
      genre: "Hardtechno DJ",
    },
  ]);

  const toggleArtistBio = (index) => {
    setArtists((prevArtists) => {
      const updatedArtists = [...prevArtists];
      updatedArtists[index] = {
        ...updatedArtists[index],
        bioIsVisible: !updatedArtists[index].bioIsVisible,
        imageIsVisible: !updatedArtists[index].imageIsVisible,
      };
      return updatedArtists;
    });
  };

  return (
    <>
      <ArtistContainer>
        {artists.map((artist, index) => (
          <ArtistPreview
            key={index}
            onMouseEnter={() => toggleArtistBio(index)}
            onMouseLeave={() => toggleArtistBio(index)}
          >
            <ArtistName>{artist.name}</ArtistName>
            <div>
              <ArtistImage
                src={artist.imageSrc}
                width={250}
                height={250}
                size="contain"
                ArtistImageIsVisible={!artist.imageIsVisible}
              />
              <ArtistBio ArtistBioIsVisible={artist.bioIsVisible}>
                <ArtistLink href={`/bookings/${artist.artistID}`}>
                  Artist Bio {artist.name}
                </ArtistLink>
              </ArtistBio>
            </div>
            <ArtistBioHeading>- {artist.genre} -</ArtistBioHeading>
          </ArtistPreview>
        ))}
      </ArtistContainer>
    </>
  );
}
