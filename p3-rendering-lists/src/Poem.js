import React, { Fragment } from "react";

export default function Poem() {
  const poem = {
    lines: [
      "I write, erase, rewrite",
      "Erase again, and then",
      "A poppy blooms."
    ]
  };
  //Method 1:
  //Using the original line index as a key doesn’t work anymore because each separator and paragraph are now in the same array.

  //However, you can give each of them a distinct key using a suffix, e.g. key={i + '-text'}.

  let output = [];
  poem.lines.forEach((line, index) => {
    output.push(<hr key={index + "-seperator"} />);
    output.push(<p key={index + "-text"}>{line}</p>);
  });
  output.shift(); // Remove the first <hr />

  //Method 2 (alternative way ):

  //the <>...</> shorthand syntax doesn’t support passing keys, so you’d have to write <Fragment> explicitly:

  const newLines = poem.lines.map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <hr />}
      <p>{line}</p>
    </Fragment>
  ));

  return (
    <article>
      {output}
      <br />

      <h4>OR alternative way :</h4>
      {newLines}
    </article>
  );
}
