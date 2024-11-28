import Loading from "./parts/loading.tsx";
import { useState } from "react";
import { getJSON } from "@helpers/frontend/route.ts";
import SuccessMessage from "./parts/success.tsx";
import ErrorMessage from "./parts/error.tsx";

const NewPasswordRecovery = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg px-8 py-10">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Enter your recovery code
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
              path: `/recovery/${formObject.code}`,
            });
            if (res.success) {
              setSuccessMessage(res.success);
            } else if (res.error) {
              setErrorMessage(res.error);
            } else {
              setErrorMessage("Unknown error");
            }
          }}
        >
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Recovery Code (Check your email)
            </label>
            <input
              type="text"
              name="code"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="recovery code"
            />
          </div>
          {loading && Loading({ loading: true })}
          {successMessage &&
            SuccessMessage({ message: successMessage })}
          {errorMessage &&
            ErrorMessage({ message: errorMessage })}
          <button
            type="submit"
            className="mt-1 w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Get new password
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
export default NewPasswordRecovery;
