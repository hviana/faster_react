import { route } from "@helpers/frontend/route.ts";
import ErrorMessage from "./parts/error.tsx";
export default function Login(props: any) {
  const { user, token, error } = props;
  if (user && token) {
    route({
      path: "/pages/dashboard",
      content: { user: user, token: token },
    })();
    return;
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg px-8 py-10">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Sign In to Your Account
        </h2>
        <form method="POST" action="/pages/login">
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <a
              href="/pages/password_recovery"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          {error && ErrorMessage({ message: error })}
          <button
            type="submit"
            className="mt-1 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{" "}
          <a
            href="/pages/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
