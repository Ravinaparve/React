//Example 2 : Passing event handlers as props Example:

//Button component accepts a prop called handleClick
function Button({ handleClick, children }) {
  return <button onClick={handleClick}>{children}</button>;
}

//PlayButton passes handlePlayClick as the handleClick prop to the Button component.
function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }
  //passing event handler as function
  return <Button handleClick={handlePlayClick}>Play "{movieName}"</Button>;
}

//UploadButton passes () => alert('Uploading!') as the handleClick prop to the Button component.
function UploadButton() {
  //inline event handler
  return <Button handleClick={() => alert("Uploading!")}>Upload Image</Button>;
}

//Parent component
export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
