import "./styles.css";
import React from "react";
import Star from "./Star";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "9876543276",
    email: "xyz@gmail.com",
    isFavourite: false
  });

  //Even if prevState already contains a isFavorite property, the new isFavourite: 'someotherthing' with be used.

  function toggleClick() {
    setContact((prevState) => {
      return { ...prevState, isFavourite: !prevState.isFavourite }; //return completely new object having values of previous object plus the new values
    });
  }

  return (
    <div className="App">
      <main>
        <p className="name">
          {contact.firstName} {contact.lastName}
        </p>
        <p className="phone-no">{contact.phone}</p>
        <p className="address">{contact.email}</p>
        <Star isFilled={contact.isFavourite} handleClick={toggleClick} />
      </main>
    </div>
  );
}
