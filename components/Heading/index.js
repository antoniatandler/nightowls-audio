import styled from "styled-components";

const MainHeading = styled.h1`
  color: white;
  background-color: black;
  position: fixed;
  top: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 40px;
  width: 100%;
  text-align: center;
  font-size: 80px;
  letter-spacing: 3px;
  z-index: +4;

  @media (max-width: 500px) {
    margin-top: 10px;
    padding-right: 10px;
    display: flex;
    font-size: 30px;
    align-content: centered;
    justify-content: flex-end;
    width: 80%;
  }
`;

export default function Heading() {
  return (
    <div>
      <MainHeading>NIGHTOWLS AUDIO</MainHeading>
    </div>
  );
}
