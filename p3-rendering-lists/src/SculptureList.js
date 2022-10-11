import { sculptureData } from "./sculptureData";

export default function SculptureList() {
  return (
    <div className="App">
      <button>Next</button>
      {sculptureData.map((sculpture, index) => (
        <div key={index}>
          <h2>
            <i>{sculpture.name} </i>
            by {sculpture.artist}
          </h2>
          <h3>
            ({index + 1} of {sculptureData.length})
          </h3>
          <img src={sculpture.url} alt={sculpture.alt} />
          <p>{sculpture.description}</p>
        </div>
      ))}
    </div>
  );
}
