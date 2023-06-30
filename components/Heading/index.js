import styled from "styled-components";

const MainHeading = styled.h1`
  color: white;
  background-color: black;
  position: fixed;
  top: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 20px;
  width: 100%;
  text-align: center;
  font-size: 80px;
  letter-spacing: 3px;
`;

export default function Heading() {
  return (
    <div>
      <MainHeading>NIGHTOWLS AUDIO</MainHeading>
    </div>
  );
}
