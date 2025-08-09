import React from "react";
import { useRecoilState } from "recoil";
import { countAtom } from "../assets/Store/Atoms/CountAtom";

export const Button = () => {
  const [count, setCount] = useRecoilState(countAtom);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Button;
