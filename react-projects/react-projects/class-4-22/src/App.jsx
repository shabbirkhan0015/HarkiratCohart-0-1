import { useState } from "react";
import Button from "./component/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Button onClick={increaseCount} />
      <div>Count is {count}</div>
    </>
  );
}

export default App;
