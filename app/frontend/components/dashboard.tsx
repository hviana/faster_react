import { getJSON, route } from "@helpers/frontend/route.ts";
import { returnHello } from "../files/general.ts";
import type { JSONObject, JSONValue } from "@helpers/types.ts";

const DashboardPage = (props: any) => {
  const { user } = props;

  if (!user) {
    route({ path: "/pages/login" })();
  } else {
    return (
      <div className="dashboard-container">
        <h1>{returnHello()} {user.name}!</h1>
        <p>Here's your dashboard.</p>
        <button
          className="btn"
          onClick={async () => {
            const apiRes = await getJSON({
              path: "/user/logout",
              content: { user: user },
            }) as JSONObject;
            console.log(apiRes);
            if (apiRes.logout) {
              await route({ path: "/" })();
            }
          }}
        >
          Log Out
        </button>
        <br />
        <br />
        <button
          className="btn"
          onClick={route({
            path: "/components/parts/counter",
            elSelector: "#counter",
          })}
        >
          Add a counter
        </button>
        <div id="counter"></div>
        <br />
      </div>
    );
  }
};

export default DashboardPage;
