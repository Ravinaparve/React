import { useState } from "react";

// if you want to use same/single event handler for all input fields,
//use the [ and ] braces inside your object definition to specify a property with dynamic name.
// and add "name" property in all the input field which is same as the property name of state object

// set [e.target.name]: e.target.value

//Here, e.target.name refers to the name property given to the <input> DOM element.

export default function Form3() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe"
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }
  return (
    <>
      <label>
        First Name :{" "}
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        First Name :{" "}
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <p>{person.firstName + " " + person.lastName}</p>
    </>
  );
}
