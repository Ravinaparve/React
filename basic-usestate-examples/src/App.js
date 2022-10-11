import "./styles.css";

import Counter from "./Counter";
import Form from "./Form";
import MyCheckbox from "./MyCheckbox";
import MyInput from "./MyInput";

export default function App() {
  return (
    <div className="App">
      <Counter />

      <MyInput />

      <MyCheckbox />

      <Form />
    </div>
  );
}
