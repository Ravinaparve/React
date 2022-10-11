import { useState } from "react";

export default function MyCheckbox() {
  const [isLiked, setIsLiked] = useState(true);

  function handleChange(e) {
    setIsLiked(e.target.checked);
  }
  return (
    <>
      <label>
        <input type="checkbox" checked={isLiked} onChange={handleChange} />I
        liked this
        <p>You {isLiked ? "liked" : "did not"} this</p>
      </label>
    </>
  );
}
