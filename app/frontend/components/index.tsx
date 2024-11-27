import { route } from "@helpers/frontend/route.ts";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Hero Section */}
      <header className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="text-center px-4">
          <h1 className="text-6xl font-extrabold text-white mb-6">
            Welcome to My SaaS App
          </h1>
          <p className="text-2xl text-white mb-10">
            Streamline your workflow with our amazing tools.
          </p>
          <a
            href="javascript:void(0)"
            onClick={route({ path: "/pages/register" })}
            className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition duration-300 m-1"
          >
            Get Started
          </a>
        </div>
      </header>
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Features
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Feature 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
                <div className="text-blue-500 mb-6">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* Icon SVG path */}
                    <path d="..." />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Feature One
                </h3>
                <p className="text-gray-600">
                  Brief description of the first feature highlighting its
                  benefits.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
                <div className="text-blue-500 mb-6">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* Icon SVG path */}
                    <path d="..." />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Feature Two
                </h3>
                <p className="text-gray-600">
                  Brief description of the second feature highlighting its
                  benefits.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
                <div className="text-blue-500 mb-6">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* Icon SVG path */}
                    <path d="..." />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Feature Three
                </h3>
                <p className="text-gray-600">
                  Brief description of the third feature highlighting its
                  benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} My SaaS App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
