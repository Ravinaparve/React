import "./styles.css";
import MyButton from "./MyButton";

export default function App() {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90
  };

  return (
    <>
      <h2>Welcome to Home Page</h2>
      <MyButton />
      <p>{user.name}</p>
      <img
        className="avatar"
        src={user.imageUrl}
        alt="profile"
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}
