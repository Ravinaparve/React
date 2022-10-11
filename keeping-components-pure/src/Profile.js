import Panel from "./Panel";

export default function Profile({ person }) {
  return (
    <div>
      <Panel>
        <Header person={person} />
        <Avatar person={person} />
      </Panel>
    </div>
  );
}

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={"https://i.imgur.com/" + person.imageId + "s.jpg"}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
