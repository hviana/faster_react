import { useState } from "react";
import { route } from "@helpers/frontend/route.ts";

import ErrorMessage from "./parts/error.tsx";
import SuccessMessage from "./parts/success.tsx";
import Loading from "./parts/loading.tsx";

const Register = (props: any) => {
  const {
    name,
    email,
    password,
    uploadedAvatar,
    error,
    message,
    update,
    updated,
    token,
  } = props;
  const [loading, setLoading] = useState(false);
  const [frontendFomError, setFrontendFomError] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      try {
        setLoading(true);
        const form = new FormData();
        form.append(e.target.files[0].name, e.target.files[0]);
        const req = await fetch(`/avatars/${crypto.randomUUID()}`, {
          method: "POST",
          body: form,
        });
        const res = await req.json();
        const fileKey = Object.keys(res)[0];
        if (res[fileKey].URIComponent) {
          setAvatarUrl(`/avatars/${res[fileKey].URIComponent}`);
          setFrontendFomError("");
        } else {
          setFrontendFomError(res.msg);
        }
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    }
  };
  if (message && !update) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500">
        <script src="https://cdn.tailwindcss.com"></script>
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg px-8 py-10 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Registration
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            {message}
          </p>
          <a
            href="javascript:void(0)"
            onClick={route({ path: "/pages/login" })}
            className="inline-block w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={update
          ? "flex flex-col items-center"
          : "min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500"}
      >
        {!update && <script src="https://cdn.tailwindcss.com"></script>}
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg px-8 py-10">
          {update && (
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
              Update Profile
            </h2>
          )}
          {!update && (
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
              Create Your Account
            </h2>
          )}
          <form
            method="POST"
            action="/pages/register"
            encType="multipart/form-data"
            onSubmit={async (event) => {
              if (!update) {
                return;
              } else {
                event.preventDefault();
                const data: any = new FormData(event.target as any);
                const formObject = Object.fromEntries(data.entries());
                await route({
                  startLoad: () => setLoading(true),
                  endLoad: () => setLoading(false),
                  path: "/components/register",
                  elSelector: "#dash-content",
                  content: formObject,
                })();
              }
            }}
          >
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                required
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                required
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                defaultValue={password}
                required={update ? false : true}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="********"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Upload Avatar
              </label>
              <input type="hidden" name="token" defaultValue={token} />
              <input type="hidden" name="update" defaultValue={update} />
              <input
                type="hidden"
                name="avatarUrl"
                defaultValue={avatarUrl || uploadedAvatar}
              />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleAvatarChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0 file:text-sm file:font-semibold
                  file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
              {(avatarUrl || uploadedAvatar) && (
                <img
                  src={avatarUrl || uploadedAvatar}
                  alt="Avatar Preview"
                  className="mt-4 h-24 w-24 object-contain rounded-full mx-auto"
                />
              )}
            </div>
            {loading && Loading({ loading: true })}
            {(error || frontendFomError) &&
              ErrorMessage({ message: error || frontendFomError })}
            {updated && message &&
              SuccessMessage({ message: message })}
            {update && (
              <button
                type="submit"
                className="mt-1 w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Update
              </button>
            )}
            {!update && (
              <button
                type="submit"
                className="mt-1 w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Sign Up
              </button>
            )}
          </form>
          {!update && (
            <p className="text-center text-gray-600 text-sm mt-6">
              Already have an account?{" "}
              <a
                href="javascript:void(0)"
                onClick={route({ path: "/pages/login" })}
                className="text-green-600 font-semibold hover:underline"
              >
                Sign In
              </a>
            </p>
          )}
        </div>
      </div>
    );
  }
};
export default Register;
