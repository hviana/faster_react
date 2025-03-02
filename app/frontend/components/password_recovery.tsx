import Loading from "./parts/loading.tsx";
import { useState } from "react";
import { getJSON } from "@helpers/frontend/route.ts";
import SuccessMessage from "./parts/success.tsx";

const PasswordRecovery = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg px-8 py-10">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Reset Your Password
        </h2>
        <form
          method="POST"
          action=""
          onSubmit={async (event) => {
            event.preventDefault();
            const data: any = new FormData(event.target as any);
            const formObject = Object.fromEntries(data.entries());
            const res: any = await getJSON({
              startLoad: () => setLoading(true),
              endLoad: () => setLoading(false),
              path: "/recovery",
              content: formObject,
            });
            setMessage(res.success);
            if (res.success) {
              globalThis.location.href = "/pages/new_recovery_password";
            }
          }}
        >
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="you@example.com"
            />
          </div>
          {loading && Loading({ loading: true })}
          {message &&
            SuccessMessage({ message: message })}
          <button
            type="submit"
            className="mt-1 w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Send Recovery Email
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-6">
          Remembered your password?{" "}
          <a
            href="/pages/login"
            className="text-purple-600 font-semibold hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};
export default PasswordRecovery;
