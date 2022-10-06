import React from "react";
import memeData from "./MemeData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  function getMemeImage() {
    let memeArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  return (
    <main>
      <form className="form">
        <input type="text" className="form--input" placeholder="top text" />
        <input type="text" className="form--input" placeholder="bottom text" />
        <button onClick={getMemeImage}>Get a new Meme Image</button>
      </form>
      <img src={meme.randomImage} alt="meme-img" />
    </main>
  );
}
export default Meme;
