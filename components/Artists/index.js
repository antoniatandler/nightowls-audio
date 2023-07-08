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
  const [ArtistBioIsVisible, setArtistBioIsVisible] = useState(false);
  const [ArtistImageIsVisible, setArtistImageIsVisible] = useState(true);
  // const [ArtistIsSelected, setArtistIsSelected] = useState(false);

  const toggleArtistBio = () => {
    setArtistBioIsVisible(!ArtistBioIsVisible);
    setArtistImageIsVisible(!ArtistImageIsVisible);
    // setArtistIsSelected(!ArtistIsSelected);
  };

  return (
    <>
      <ArtistContainer>
        <ArtistPreview
          onMouseEnter={toggleArtistBio}
          onMouseLeave={toggleArtistBio}
        >
          <ArtistName>ANNÅR</ArtistName>
          <div>
            <ArtistImage
              src={"/../public/images/logo.jpg"}
              width={250}
              height={250}
              size="contain"
              ArtistImageIsVisible={!ArtistImageIsVisible}
            />
            <ArtistBio ArtistBioIsVisible={ArtistBioIsVisible}>
              <ArtistLink href="/bookings/annar">Artist Bio Annâr</ArtistLink>
            </ArtistBio>
          </div>
          <ArtistBioHeading>- DJ -</ArtistBioHeading>
        </ArtistPreview>
        <ArtistPreview
          onMouseEnter={toggleArtistBio}
          onMouseLeave={toggleArtistBio}
        >
          <ArtistName>BJARNE</ArtistName>
          <div>
            <ArtistImage
              src={"/../public/images/bjarne.jpg"}
              width={250}
              height={250}
              ArtistImageIsVisible={!ArtistImageIsVisible}
            />
            <ArtistBio ArtistBioIsVisible={ArtistBioIsVisible}>
              Artist Bio Bjarne
            </ArtistBio>
          </div>
          <ArtistBioHeading>- TECHNO DJ -</ArtistBioHeading>
        </ArtistPreview>
        <ArtistPreview
          onMouseEnter={toggleArtistBio}
          onMouseLeave={toggleArtistBio}
        >
          <ArtistName>CYBERTRON</ArtistName>
          <div>
            <ArtistImage
              src={"/../public/images/cybertron.jpg"}
              width={250}
              height={250}
              size="contain"
              ArtistImageIsVisible={!ArtistImageIsVisible}
            />
            <ArtistBio ArtistBioIsVisible={ArtistBioIsVisible}>
              Artist Bio Cybertron
            </ArtistBio>
          </div>
          <ArtistBioHeading>- DJ -</ArtistBioHeading>
        </ArtistPreview>
        <ArtistPreview
          onMouseEnter={toggleArtistBio}
          onMouseLeave={toggleArtistBio}
        >
          <ArtistName>FRANK CZER</ArtistName>
          <div>
            <ArtistImage
              src={"/../public/images/frank.jpg"}
              width={250}
              height={250}
              size="contain"
              ArtistImageIsVisible={!ArtistImageIsVisible}
            />
            <ArtistBio ArtistBioIsVisible={ArtistBioIsVisible}>
              Artist Bio Frank Czer
            </ArtistBio>
          </div>
          <ArtistBioHeading>- DJ -</ArtistBioHeading>
        </ArtistPreview>

        <ArtistPreview
          onMouseEnter={toggleArtistBio}
          onMouseLeave={toggleArtistBio}
        >
          <ArtistName>GANDAALV</ArtistName>
          <div>
            <ArtistImage
              src={"/../public/images/frank.jpg"}
              width={250}
              height={250}
              size="contain"
              ArtistImageIsVisible={!ArtistImageIsVisible}
            />
            <ArtistBio ArtistBioIsVisible={ArtistBioIsVisible}>
              Artist Bio Gandaalv
            </ArtistBio>
          </div>
          <ArtistBioHeading>- DJ -</ArtistBioHeading>
        </ArtistPreview>
        <ArtistPreview
          onMouseEnter={toggleArtistBio}
          onMouseLeave={toggleArtistBio}
        >
          <ArtistName>INFECTED</ArtistName>
          <div>
            <ArtistImage
              src={"/../public/images/bjarne.jpg"}
              width={250}
              height={250}
              size="contain"
              ArtistImageIsVisible={!ArtistImageIsVisible}
            />
            <ArtistBio ArtistBioIsVisible={ArtistBioIsVisible}>
              Artist Bio Infected
            </ArtistBio>
          </div>
          <ArtistBioHeading>- DJ -</ArtistBioHeading>
        </ArtistPreview>

        <ArtistPreview
          onMouseEnter={toggleArtistBio}
          onMouseLeave={toggleArtistBio}
        >
          <ArtistName>JANOSCH</ArtistName>
          <div>
            <ArtistImage
              src={"/../public/images/janosch.jpg"}
              width={250}
              height={250}
              size="contain"
              ArtistImageIsVisible={!ArtistImageIsVisible}
            />
            <ArtistBio ArtistBioIsVisible={ArtistBioIsVisible}>
              Artist Bio Janosch
            </ArtistBio>
          </div>
          <ArtistBioHeading>- DJ -</ArtistBioHeading>
        </ArtistPreview>
        <ArtistPreview
          onMouseEnter={toggleArtistBio}
          onMouseLeave={toggleArtistBio}
        >
          <ArtistName>JOHANNA MEMMLER</ArtistName>
          <div>
            <ArtistImage
              src={"/../public/images/logo.jpg"}
              width={250}
              height={250}
              size="contain"
              ArtistImageIsVisible={!ArtistImageIsVisible}
            />
            <ArtistBio ArtistBioIsVisible={ArtistBioIsVisible}>
              Artist Bio Johanna Memmler
            </ArtistBio>
          </div>
          <ArtistBioHeading>- DJ -</ArtistBioHeading>
        </ArtistPreview>
        <ArtistPreview
          onMouseEnter={toggleArtistBio}
          onMouseLeave={toggleArtistBio}
        >
          <ArtistName>KLEX GEIST</ArtistName>
          <div>
            <ArtistImage
              src={"/../public/images/klexgeist.jpg"}
              width={250}
              height={250}
              size="contain"
              ArtistImageIsVisible={!ArtistImageIsVisible}
            />
            <ArtistBio ArtistBioIsVisible={ArtistBioIsVisible}>
              Artist Bio Klex Geist
            </ArtistBio>
          </div>
          <ArtistBioHeading>- DJ -</ArtistBioHeading>
        </ArtistPreview>
        <ArtistPreview
          onMouseEnter={toggleArtistBio}
          onMouseLeave={toggleArtistBio}
        >
          <ArtistName>PSYLENCE</ArtistName>
          <div>
            <ArtistImage
              src={"/../public/images/psylence.jpeg"}
              width={250}
              height={250}
              size="contain"
              ArtistImageIsVisible={!ArtistImageIsVisible}
            />
            <ArtistBio ArtistBioIsVisible={ArtistBioIsVisible}>
              Artist Bio Psylence
            </ArtistBio>
          </div>
          <ArtistBioHeading>- DJ -</ArtistBioHeading>
        </ArtistPreview>
        <ArtistPreview
          onMouseEnter={toggleArtistBio}
          onMouseLeave={toggleArtistBio}
        >
          <ArtistName>SON OF SCOBA</ArtistName>
          <div>
            <ArtistImage
              src={"/../public/images/logo.jpg"}
              width={250}
              height={250}
              size="contain"
              ArtistImageIsVisible={!ArtistImageIsVisible}
            />
            <ArtistBio ArtistBioIsVisible={ArtistBioIsVisible}>
              Artist Bio Son of Scoba
            </ArtistBio>
          </div>
          <ArtistBioHeading>- DJ -</ArtistBioHeading>
        </ArtistPreview>
      </ArtistContainer>
    </>
  );
}
