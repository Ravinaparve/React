import "./styles.css";
import { sculptureList } from "./data";
import { useState } from "react";

export default function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasNext = index < sculptureList.length - 1; //disable "next" btn when "hasNext" becomes "false"
  let hasPrev = index > 0; //disable "previous" btn when "hasPrev" becomes "false"

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }
  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>

      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      <button onClick={handleShowMore}>
        {showMore ? "Hide" : "Show"} details
      </button>

      <p>{showMore && sculpture.description}</p>

      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
