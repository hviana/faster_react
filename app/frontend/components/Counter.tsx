/* Use only frontend libraries here.
You can organize your files into subdirectories here.
The .tsx extension is used here.
These components are rendered on the server and hydrated on the client.
Two routes are generated per file. One route for the file to be rendered as a component (to be inserted into an existing page) and one route for the file to be rendered as a page. For example, the file frontend/components/checkout/cart.tsx has the routes /pages/checkout/cart and /components/checkout/cart.
Initial route / is considered a page route and will point to frontend/components/index.tsx
You need to have a default export with the React Function/Component.
The props passed to the component includes
Form-submitted data (or JSON POST);
URL search parameters, such as /pages/myPage?a=1&b=2 will result in {a:1, b:2};
backend/components manipulations; */
import { useState } from "react";
export default function Counter() {
  const [state, setState] = useState(0);
  return (
    <>
      <div>Counter: {state}</div>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={() => setState(state - 1)}>Decrement</button>
    </>
  );
}
