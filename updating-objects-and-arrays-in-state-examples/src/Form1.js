// In this example, the form state variable holds an object.s
//Each input has a change handler that calls setForm with the next state of the entire form.
//The { ...form } spread syntax ensures that the state object is replaced rather than mutated.
//e.preventDefault() not added on form because the form dont have a button

import { useState } from "react";

export default function Form1() {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@xyz.com"
  });

  return (
    <>
      <label>
        FirstName:{" "}
        <input
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
      </label>

      <label>
        Last Name :{" "}
        <input
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
      </label>

      <label>
        Email Id:{" "}
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>

      <p>{form.firstName + " " + form.lastName + " " + form.email}</p>
    </>
  );
}
