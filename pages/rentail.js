import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Navigation from "@/components/Navbar";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const RentailContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  top: 8%;
  color: white;
  width: 100%;
  justify-content: space-around;
`;

const RentailSection = styled.section`
  width: 100%;
  // border: 3px solid green;
  text-align: center;
  padding: 20px;
  margin: 10px;
  height: fit-content;
  padding-bottom: 100px;
`;

const RentailSectionInProg = styled.section`
  // width: 15%;
  border: 3px solid green;
  text-align: center;
  padding: 20px;
  margin: 10px;
  height: fit-content;
  padding-bottom: 100px;
  display: none;
`;

const RentailHeading = styled.h4`
  font-size: 40px;
  letter-spacing: 2px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  // margin: 15px;
  // padding: 10px;
`;

const EquipmentImage = styled(Image)`
  width: max-content;
  height: fit-content;
  margin: 15px;
`;

const SubParagraph = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  // row-gap: 20px;
  align-items: center;
`;

const ImageSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const DecoMovie = styled.video`
  width: 50%;
  margin-top: 20px;
`;

const LightMovie = styled.video`
  width: fit-content;
  margin-top: 20px;
`;

const AnkerLink = styled.p`
  padding-top: 200px;
`;

export default function Rentail() {
  return (
    <>
      <Heading />
      <Navigation />
      <RentailContainer>
        <RentailSection>
          <AnkerLink id="lightshow" />
          <RentailHeading>LIGHTSHOW</RentailHeading>
          <ImageContainer>
            <EquipmentImage
              type="image/jpg"
              src="/lightshow/lightshow1.jpg"
              width={300}
              height={200}
            />
            <EquipmentImage
              type="image/jpg"
              src="/lightshow/lightshow2.jpg"
              width={300}
              height={200}
            />
            <EquipmentImage
              type="image/jpeg"
              src="/lightshow/lightshow3.jpg"
              width={300}
              height={200}
            />
            <EquipmentImage
              src="/lightshow/lightshow4.jpg"
              width={300}
              height={200}
            />
            <EquipmentImage
              src="/lightshow/lightshow5.jpg"
              width={300}
              height={200}
            />
            <EquipmentImage
              src="/lightshow/lightshow6.jpg"
              width={300}
              height={200}
            />
            <LightMovie
              controls
              type="video/mp4"
              src="/lightshow/lightshowmovie1.mp4"
              height={450}
              width={500}
            />
            <LightMovie
              controls
              type="video/mp4"
              src="/lightshow/lightshowmovie2.mp4"
              height={450}
              width={500}
            />
            <LightMovie
              controls
              type="video/mp4"
              src="/lightshow/lightshowmovie3.mp4"
              height={450}
              width={500}
            />
            <LightMovie
              controls
              type="video/mp4"
              src="/lightshow/lightshowmovie4.mp4"
              height={450}
              width={500}
            />
            <LightMovie
              controls
              type="video/mp4"
              src="/lightshow/lightshowmovie5.mp4"
              height={450}
              width={500}
            />
            <LightMovie
              controls
              type="video/mp4"
              src="/lightshow/lightshowmovie6.mp4"
              height={450}
              width={500}
            />
            <LightMovie
              controls
              type="video/mp4"
              src="/lightshow/lightshowmovie7.mp4"
              height={450}
              width={500}
            />
            <LightMovie
              controls
              type="video/mp4"
              src="/lightshow/lightshowmovie8.mp4"
              height={450}
              width={500}
            />
            <LightMovie
              controls
              type="video/mp4"
              src="/lightshow/lightshowmovie9.mp4"
              height={450}
              width={500}
            />
            <LightMovie
              controls
              type="video/mp4"
              src="/lightshow/lightshowmovie10.mp4"
              height={450}
              width={500}
            />
          </ImageContainer>
        </RentailSection>

        <RentailSection>
          <AnkerLink id="decoration" />
          <RentailHeading>DECORATION</RentailHeading>
          <ImageContainer>
            <EquipmentImage src="/deco/deco5.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco6.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco7.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco8.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco10.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco12.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco13.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco14.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco15.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco16.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco17.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco18.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco20.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco22.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco23.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco24.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco25.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco26.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco27.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco28.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco30.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco1.jpg" width={300} height={200} />
            <EquipmentImage src="/deco/deco2.jpg" width={300} height={200} />
            <DecoMovie
              controls
              type="video/mp4"
              src="/deco/decomovie2.mp4"
              height={450}
              width={500}
            />
            <DecoMovie
              controls
              type="video/mp4"
              src="/deco/decomovie1.mp4"
              height={450}
              width={500}
            />
          </ImageContainer>
        </RentailSection>
        <RentailSection>
          <AnkerLink id="equipment" />
          <RentailHeading>EQUIPMENT</RentailHeading>
          <ImageContainer>
            <EquipmentImage
              src="/equipment/komplettset.jpg"
              width={300}
              height={200}
            />
            <EquipmentImage
              src="/equipment/komplettset2.jpg"
              width={300}
              height={200}
            />
            <EquipmentImage
              src="/equipment/komplettset3.jpg"
              width={300}
              height={200}
            />
            <EquipmentImage
              src="/equipment/komplettset4.jpg"
              width={300}
              height={200}
            />
            <EquipmentImage
              src="/equipment/komplettset5.jpg"
              width={300}
              height={200}
            />
            <EquipmentImage
              src="/equipment/komplettset6.jpg"
              width={300}
              height={200}
            />
            <EquipmentImage
              src="/equipment/komplettset7.jpg"
              width={300}
              height={200}
            />
            <EquipmentImage
              src="/equipment/komplettset8.jpg"
              width={300}
              height={200}
            />

            <ImageSection>
              <EquipmentImage
                src="/equipment/pioneerv10.jpg"
                width={300}
                height={200}
              />
              <SubParagraph>Pioneer V10</SubParagraph>
            </ImageSection>
            <ImageSection>
              <EquipmentImage
                src="/equipment/djma9.jpg"
                width={300}
                height={200}
              />
              <SubParagraph>DJ MA 9</SubParagraph>
            </ImageSection>

            <ImageSection>
              <EquipmentImage
                src="/equipment/cdj3000.jpg"
                width={300}
                height={200}
              />
              <SubParagraph>CDJ 3000</SubParagraph>
            </ImageSection>
            <ImageSection>
              <EquipmentImage
                src="/equipment/3000erunda9.jpg"
                width={300}
                height={200}
              />
              <SubParagraph>CDJ 3000 & A9</SubParagraph>
            </ImageSection>
          </ImageContainer>
        </RentailSection>
        <RentailSectionInProg>
          <RentailHeading>EVENTSERVICE</RentailHeading>
          <article>soon ...</article>
        </RentailSectionInProg>
      </RentailContainer>
      <Footer />
    </>
  );
}
