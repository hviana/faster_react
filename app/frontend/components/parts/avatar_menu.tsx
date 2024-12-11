import { useState } from "react";
import { route } from "@helpers/frontend/route.ts";
const AvatarMenu = (props: any) => {
  const { user, token } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="relative max-sm:pt-5 inline-block text-left">
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
        <div className="absolute max-sm:left-0 md:right-0 mt-5 bg-white rounded-lg shadow-xl w-40 headerFont text-base font-normal">
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
                path: "/components/parts/dashboard_summary",
                "elSelector": "#dash-content",
              })}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Summary
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
  );
};
export default AvatarMenu;
