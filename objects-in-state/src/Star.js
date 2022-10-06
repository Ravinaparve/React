import React from "react";

export default function Star(props) {
  console.log(props);
  const starIcon = props.isFilled
    ? "https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
    : "https://cdn-icons-png.flaticon.com/512/2107/2107992.png";

  return <img src={starIcon} onClick={props.handleClick} alt="star-pic" />;
}
