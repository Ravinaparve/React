import "./styles.css";
import ToDoList from "./ToDoList";

export default function App() {
  const baseUrl = "https://i.imgur.com/";
  const person = {
    name: "Gregorio Y. Zara",
    imageId: "7vQD0fP",
    imageSize: "s",
    theme: {
      backgroundColor: "white",
      color: "blue",
      padding: "10px"
    }
  };
  return (
    <>
      <ToDoList />
      <div style={person.theme}>
        <h3>
          <b>{person.name}'s ToDoList</b>
        </h3>
        <img
          className="avatar"
          src={baseUrl + person.imageId + person.imageSize + ".jpg"}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </>
  );
}
