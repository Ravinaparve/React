//Stopping propagation

//child component
export function ButtonEvent({ handleClick, arrow }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleClick(); //runs the handleClick passed by parent as prop
      }}
    >
      {arrow}
    </button>
  );
}

//Parent component
export default function Slider() {
  return (
    <div onClick={() => alert("you clicked toolbar")} className="slider">
      <ButtonEvent
        arrow="left"
        handleClick={() => alert(`left arrow clicked!`)}
      />
      <ButtonEvent
        arrow="right"
        handleClick={() => alert(`right arrow clicked!`)}
      />
    </div>
  );
}

//inside ButtonEvent "handleClick" is not passed
