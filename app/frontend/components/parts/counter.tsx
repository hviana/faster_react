import { useState } from "react";
const Counter = (props: any) => {
  const [state, setState] = useState(0);
  return (
    <>
      <div>Counter: {state}</div>
      <button className="btn" onClick={() => setState(state + 1)}>
        Increment
      </button>
      <button className="btn" onClick={() => setState(state - 1)}>
        Decrement
      </button>
    </>
  );
};
export default Counter;
