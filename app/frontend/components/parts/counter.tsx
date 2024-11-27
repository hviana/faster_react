import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Counter</h2>
      <div className="flex items-center">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded-l hover:bg-red-600 focus:outline-none"
        >
          –
        </button>
        <span className="px-8 text-3xl font-mono">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 focus:outline-none"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
