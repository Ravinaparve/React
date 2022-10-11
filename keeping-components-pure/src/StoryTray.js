import React from "react";

export default function StoryTray({ stories }) {
  //below code is try to change the read-only props. that's incorrect

  // stories.push({
  //   id: "create",
  //   label: "Create Story"
  // });

  // create a new array instead (by copying the existing one)
  let storiesToDisplay = stories.slice();

  // Does not affect the original array:
  storiesToDisplay.push({
    id: "create",
    label: "Create Story"
  });
  return (
    <ul>
      {storiesToDisplay.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
