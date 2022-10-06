import React from "react";
import "./styles.css";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import contactData from "../contactData";

export default function App() {
  const contactElement = contactData.map((contact) => {
    return (
      <Contact
        key={contact.id}
        // myColor={contact.myColor}
        // myValue={contact.myValue}
        // rating={contact.stats.rating}
        // reviewCount={contact.stats.reviewCount}
        // country={contact.country}
        // location={contact.location}
        // price={contact.price}

        //below passing the entire "contact" object to a new
        //property called item. we can access data inside each contact using..
        //{props.item.myColor},{props.item.stats.rating}... and so on..
        item={contact}
      />
    );
  });

  return (
    <div>
      <Hero />
      {/*if variable is return instead of component, it means that variable is having the compenent* */}
      {contactElement}
    </div>
  );
}
