import "./styles.css";
import Avatar from "./Avatar";
import Gallery from "./Gallery";

export default function App() {
  return (
    <div>
      <Gallery />
      <hr />
      <br />
      <p>
        <b>Avatar component rendered below</b>
      </p>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2"
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh"
        }}
      />
      <Avatar
        //here since size prop is not provided it will..
        //...use the default value of 200...
        //...(provided in child component)
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6"
        }}
      />
    </div>
  );
}

// Note

//The default value is only used if the size prop is missing or if you pass size={undefined}.
//But if you pass size={null} or size={0}, the default value will not be used.
