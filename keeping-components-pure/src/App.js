import Clock from "./Clock";
import "./styles.css";
import Profile from "./Profile";
import StoryTray from "./StoryTray";

export default function App() {
  let today = new Date();

  let initialStories = [
    { id: 0, label: "Ankit's Story" },
    { id: 1, label: "Taylor's Story" }
  ];
  return (
    <div>
      <Clock time={today} />

      <Profile
        person={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar"
        }}
      />
      <Profile
        person={{
          imageId: "MK3eW3A",
          name: "Creola Katherine Johnson"
        }}
      />

      <StoryTray stories={initialStories} />
    </div>
  );
}
