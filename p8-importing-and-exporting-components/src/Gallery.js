import React from "react";

export function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

//****Explanation:

//What if you want to show just one Profile instead of a gallery? You can export the Profile component, too.

//But Gallery.js already has a default export, and you can’t have two default exports.

//You could create a new file with a default export, or you could add a named export for Profile. A file can only have one default export, but it can have numerous named exports!
