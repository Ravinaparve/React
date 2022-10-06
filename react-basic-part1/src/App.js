import "./styles.css";

export default function App() {
  const title = "HomePage";
  const details = 5;
  const person = { name: "John", age: 12 };
  const date = new Date();
  const arr = [1, 2, 3, 4, 5, 6];
  const users = ["user1", "user2", "user3"];
  return (
    <div className="App">
      <h3>{title}</h3>
      <h3>{details}</h3>
      <h3>{person.name + " is " + person.age + " years old"}</h3>
      <h3>{date.toDateString()}</h3>
      <h3>{arr}</h3>
      <h3>
        {users.map((item) => (
          <p>{item}</p>
        ))}
      </h3>
    </div>
  );
}
