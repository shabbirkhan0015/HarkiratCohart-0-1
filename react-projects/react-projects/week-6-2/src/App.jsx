import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let count = 0;
    for (let i = 0; i < inputValue; i++) {
      count = count + i;
    }
  }, [inputValue]);

  return (
    <div>
      <label>Input number</label>
      <input
        type="number"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <p>Sum is : {count}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
}

export default App;

// function App() {
//   const [id, setId] = useState();

//   const handleId = (event) => {
//     const buttonText = event.target.textContent;
//     setId(buttonText);
//   };
//   return (
//     <div>
//       <button onClick={handleId}>1</button>
//       <button onClick={handleId}>2</button>
//       <button onClick={handleId}>3</button>
//       <button onClick={handleId}>4</button>
//       <Todo id={id} />
//     </div>
//   );
// }
