import React from "react";
export default function Avatar({ person, size = 120 }) {
  let baseUrl = "https://i.imgur.com/";
  return (
    <img
      className="avatar"
      src={baseUrl + person.imageId + "s.jpg"}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
