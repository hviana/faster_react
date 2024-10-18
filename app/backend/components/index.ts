/* A backend component is optional for a frontend component.
You can import your backend libraries here.
You can organize your files into subdirectories here.
The .ts extension is used here.
Each of these files must have the same folder structure and name as the corresponding frontend components, with the difference in the extension, which here is .ts.
For example frontend/components/checkout/cart.tsx should have as a corresponding (if one exists) backend/components/checkout/cart.ts here.
You need to have a default export with an object of type BackendComponent, import { type BackendComponent } from "@helpers/backend/types.ts".
They are used to intercept a frontend component request before it is processed before?: RouteFn[], or after after?: (props: Record<any, any>) => void | Promise<void>.
The before parameter is a list of middleware functions (see: https://github.com/hviana/faster).
No data here is passed to the page. The use here is to check headers (ctx.req.headers) or search params (ctx.url.searchParams), like a token, impose Rate Limits, etc.
You can cancel processing of a page by not calling await next() at the end of a middleware function.
However, if you want the page to be processed, do not consume the body of ctx.req, or it will cause an error in the framework.
The after function has as input parameter the props that will be passed to the component. Here you can add backend data to these props, such as data from a database.
 is possible to use an asynchronous function as a parameter. */

import { type BackendComponent } from "@helpers/backend/types.ts";
import { type Context, type NextFunc } from "faster";
const indexBackendComponent: BackendComponent = {
  before: [
    async (ctx: Context, next: NextFunc) => {
      if (ctx.req.method !== "GET") {
        throw new Error("The home page only accepts the GET method");
      }
      console.log("Call backendComponent.before middleware on index");
      await next(); //Calling await next(); is important to continue the flow of execution (or not, if you want to interrupt).
    },
  ],
  after: async (props) => { //Add properties to the component here. You can pass data from the backend, like from a database, etc.
    props["example"] = "props example";
  },
};

export default indexBackendComponent;
