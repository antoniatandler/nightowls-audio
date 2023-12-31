import styled from "styled-components";
import Link from "next/link";
import Heading from "@/components/Heading";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BookingForm = styled.form`
  display: flex;
  position: absolute;
  left: 25%;
  color: white;
  width: 50%;
  font-size: 20px;
  color: white;
  flex-direction: column;
  gap: 5px;
  top: 17%;
  padding-bottom: 150px;

  @media (max-width: 500px) {
    width: 90%;
    justify-content: center;
    margin: 0;
    padding: 0;
    left: 50%;
    transform: translate(-50%);
  }
`;

const SendButton = styled.button`
  font-family: Blippo;
  width: 30%;
  background-color: transparent;
  border-radius: 15px;
  color: white;
  font-size: 20px;
  margin: auto;
  margin-top: 20px;

  &:hover {
    border-color: darkred;
    color: darkred;
  }
`;

const ArtistSelect = styled.select`
  background-color: transparent;
  color: white;
  font-family: Blippo;
  height: fit-content;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 25px;
  text-align: center;
  color: white;
  border: none;
  border-bottom: 2px solid darkred;

  &:focus {
    outline: none;
    border-color: darkred;
  }
`;

const ArtistOption = styled.option`
  font-size: 20px;
`;

const FormLabel = styled.label`
  justify-content: space-between;
  display: flex;
`;

const FormInput = styled.input`
  background-color: transparent;
  padding: 5px;
  color: white;
  font-family: Blippo;
  font-size: 20px;
  width: 30%;
  text-align: right;
  border-color: rgba(255, 255, 255, 0.5);

  &:focus {
    outline: none;
    border-color: darkred;
  }

  @media (max-width: 500px) {
    width: 50%;
    font-size: 16px;
  }
`;

const FormSubHeading = styled.h4`
  border-top: 2px double rgba(255, 255, 255, 0.5);
  padding-top: 15px;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const FormInputTextArea = styled.textarea`
  height: fit-content;
  width: 70%;
  background-color: transparent;
  padding: 5px;
  color: white;
  font-family: Blippo;
  font-size: 20px;
  text-align: right;

  &:focus {
    outline: none;
    border-color: darkred;
  }
`;

const FormHeading = styled.h2`
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 5px;

  @media (max-width: 500px) {
    margin-bottom: 20px;
    margin-top: -20px;
    padding: 0;
  }
`;

const BackButton = styled(Link)`
  font-family: Blippo;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-top: 10px;
  text-align: right;

  &:hover {
    border-color: darkred;
    color: darkred;
  }

  @media (max-width: 500px) {
    margin-bottom: 70px;
  }
`;

export default function Bookings() {
  const [selectedArtist, setSelectedArtist] = useState("");

  const handleArtistChange = (event) => {
    setSelectedArtist(event.target.value);
  };

  const handleSubmit = () => {
    // Gather form data
    const artist = selectedArtist;
    const email = "antoniatandler@gmail.com";
    const location = document.querySelector('input[name="location"]').value;
    const event = document.querySelector('input[name="event"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const fullName = document.querySelector('input[name="fullName"]').value;
    const company = document.querySelector('input[name="company"]').value;

    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const subject = encodeURIComponent(`Neue Buchungsanfrage für ${artist}`);
    const senderEmail = document.querySelector('input[name="email"]').value;
    const body = encodeURIComponent(`
    Artist: ${artist}
    Location: ${location}
    Event: ${event}
    Date: ${date}

    CONTACT:
    Full Name: ${fullName}
    Company: ${company}
    Email: ${senderEmail}
    Phone: ${phone}

    Message:
    ${message}
  `);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}&from=${senderEmail}`;
  };

  return (
    <>
      <Heading />
      <Navigation />
      <BookingForm method="POST">
        <FormHeading>BOOKING REQUEST</FormHeading>
        <FormLabel htmlFor="ArtistSelect">
          Artist:
          <ArtistSelect
            required
            name="ArtistSelect"
            id="ArtistSelect"
            onChange={handleArtistChange}
          >
            <ArtistOption disabled selected>
              select your artist ...
            </ArtistOption>
            <ArtistOption value={"Annår"}>Annår</ArtistOption>
            <ArtistOption value={"Bjarne"}>Bjarne</ArtistOption>
            <ArtistOption value={"Cybertron"}>Cybertron</ArtistOption>
            <ArtistOption value={"Frank Czer"}>Frank Czer</ArtistOption>
            <ArtistOption value={"Gandaalv"}>Gandaalv</ArtistOption>
            <ArtistOption value={"Infected"}>Infected</ArtistOption>
            <ArtistOption value={"Janosch"}>Janosch</ArtistOption>
            <ArtistOption value={"Johanna Memmler"}>
              Johanna Memmler
            </ArtistOption>
            <ArtistOption value={"Klex-Geist"}>Klex-Geist</ArtistOption>
            <ArtistOption value={"Psylence"}>Psylence</ArtistOption>
            <ArtistOption value={"Son of Scoba"}>Son of Scoba</ArtistOption>
            <ArtistOption value={"Vanta"}>Vanta</ArtistOption>
          </ArtistSelect>
        </FormLabel>
        <FormLabel for="location">
          Location:
          <FormInput
            name="location"
            type="text"
            required
            placeholder="Location"
          />
        </FormLabel>
        <FormLabel for="event">
          Event:
          <FormInput
            name="event"
            type="text"
            required
            placeholder="Event"
          ></FormInput>
        </FormLabel>
        <FormLabel for="date">
          Date:
          <FormInput name="date" type="date" required />
        </FormLabel>
        <hr />
        <FormSubHeading>CONTACT:</FormSubHeading>
        <FormLabel for="fullName">
          Full Name:
          <FormInput
            name="fullName"
            type="text"
            required
            placeholder="your full name"
          />
        </FormLabel>
        <FormLabel for="company">
          Company:
          <FormInput name="company" type="text" placeholder="your company" />
        </FormLabel>
        <FormLabel for="fullName">
          Email:
          <FormInput
            name="email"
            type="email"
            required
            placeholder="your email adress"
          />
        </FormLabel>
        <FormLabel for="phone">
          Phone:
          <FormInput name="phone" type="text" placeholder="your phone number" />
        </FormLabel>
        <FormLabel for="message">
          Your Message:
          <FormInputTextArea
            type="textarea"
            name="message"
            placeholder="your message"
          />
        </FormLabel>
        <SendButton type="submit" onClick={handleSubmit} target="_blank">
          Send
        </SendButton>
        <BackButton href="/bookings/bookings">back to all artists</BackButton>
      </BookingForm>
      <Footer />
    </>
  );
}
