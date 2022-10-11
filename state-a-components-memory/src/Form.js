import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleReset() {
    setFirstName("");
    setFirstName("");
  }
  return (
    <form className="f--container" onSubmit={(e) => e.preventDefault()}>
      <input
        value={firstName}
        placeholder="First Name"
        onChange={handleFirstNameChange}
      />

      <input
        value={lastName}
        placeholder="Last Name"
        onChange={handleLastNameChange}
      />

      <h1>
        Hi, {firstName} {lastName}
      </h1>

      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
