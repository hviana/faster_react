import { useState } from "react";
import { route } from "@helpers/frontend/route.ts";
const Dashboard = (props: any) => {
  const { user, token } = props;
  if (!user || !token) {
    route({ path: "/pages/login" })();
    return;
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Top bar with avatar */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-6 py-3 flex items-center justify-end">
          {/* Avatar with dropdown */}
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="flex items-center text-gray-600 focus:outline-none"
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  className="border h-8 w-8 rounded-full object-contain"
                  src={user.avatarUrl || "/static/avatar.png"} // Place your avatar image in the static folder
                  alt="Your avatar"
                />
              </button>
            </div>
            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="none">
                  <a
                    href="javascript:void(0)"
                    onClick={route({
                      path: "/components/register",
                      "elSelector": "#dash-content",
                      content: {
                        update: true,
                        token: token,
                        name: user.name,
                        email: user.email,
                        avatarUrl: user.avatarUrl,
                      },
                    })}
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Edit Profile
                  </a>
                  <a
                    href="javascript:void(0)"
                    onClick={route({
                      path: "/components/parts/counter",
                      "elSelector": "#dash-content",
                    })}
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Add a Counter
                  </a>
                  <button
                    type="submit"
                    onClick={route({ path: "/" })}
                    className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Rest of the dashboard content */}
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        <div id="dash-content" className="container mx-auto px-6 py-8"></div>
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;
