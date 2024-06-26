import React from "react";
import "./styles.css";
import CardMäklare from "../CardMäklare/CardMäklare";
// import ContactCard from "./ContactCard";

const GetInTouch: React.FC = () => {
  // const contacts = [
  //   {
  //     name: "Inger Björkman",
  //     phoneNumber: "070897654",
  //     email: "i.bjorkman@lg.se",
  //     address: "Karlatornet Skylevel 2",
  //   },
  //   {
  //     name: "Inger Björkman",
  //     phoneNumber: "070897654",
  //     email: "Götaverksgatan 2",
  //     address: "Karlatornet Skylevel 2",
  //   },
  //   {
  //     name: "Marta Björk",
  //     phoneNumber: "070897654",
  //     email: "m.bjork@lg.se",
  //     address: "Karlatornet Skylevel 2",
  //   },
  //   {
  //     name: "Inger Björkman",
  //     phoneNumber: "070897654",
  //     email: "Götaverksgatan 2",
  //     address: "Karlatornet Skylevel 2",
  //   },
  // ];
  return (
    <div className="intouch_section card">
      <h2>Välja din mäklare</h2>
      <p className="card_desc">
        Vi är här för att guida dig rätt och säkerställa att du får den bästa
        affären möjligt.
      </p>
      <div className="card_container">
        <CardMäklare
          name="Inger Björkman"
          mobile="070897654"
          address="Karlatornet Skylevel 2"
          mail="i.bjorkman@lg.se"
        />
        <CardMäklare
          name="Marta Björk"
          mobile="070897654"
          address="Karlatornet Skylevel 2"
          mail="m.bjork@lg.se"
        />
        <CardMäklare
          name="Anders Eriksson"
          mobile="070897654"
          address="Karlatornet Skylevel 2"
          mail="a.eriksson@lg.se"
        />
        <CardMäklare
          name="Inger Björkman"
          mobile="070897654"
          address="Karlatornet Skylevel 2"
          mail="i.bjorkman@lg.se"
        />
        {/* {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            phoneNumber={contact.phoneNumber}
            email={contact.email}
            address={contact.address}
          />
        ))} */}
      </div>
    </div>
  );
};

export default GetInTouch;
