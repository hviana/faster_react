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
