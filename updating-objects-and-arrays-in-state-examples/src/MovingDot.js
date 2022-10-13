import { useState } from "react";
export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  // With setPosition, we are telling React:-
  // Replace position with this new object
  // And render this component again

  function handleDot(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  }

  return (
    <div
      onPointerMove={handleDot}
      style={{
        position: "relative",
        width: "300px",
        height: "200px",
        border: "1px solid blue"
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20
        }}
      />
    </div>
  );
}
