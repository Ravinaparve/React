//Reading props in event handlers example:

export default function AlertButton({ message, children }) {
  // console.log(children);

  // console.log(message);

  return (
    <button
      onClick={() => {
        alert(message);
      }}
    >
      {children}
    </button>
  );
}

//When you nest content inside a JSX tag, the parent component will receive that content in a prop called children.
