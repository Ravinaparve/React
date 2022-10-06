import React from "react";

function Contact(props) {
  console.log(props.item);
  const style = {
    backgroundColor: props.item.myValue
  };

  return (
    <div>
      <div className="card">
        {props.item.myColor}
        <span className="shading" style={style}></span>
      </div>

      <p>
        <span>rating : ({props.item.stats.rating}) |</span>
        <span> review count : ({props.item.stats.reviewCount})</span>
      </p>

      <p>
        <span>country : ({props.item.country}) |</span>
        <span> price : ${props.item.price}</span>
      </p>

      <hr />
    </div>
  );
}

export default Contact;
