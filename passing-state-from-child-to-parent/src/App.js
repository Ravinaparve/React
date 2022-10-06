import "./styles.css";
import React from "react";
import Header from "../src/Header";
import Body from "../src/Body";

export default function App() {

  const[user,setUser]= React.useState("John");
  return (
    <div className="App">
      <Header name={user}/>
      <Body name={user}/>
    </div>
  );
}
