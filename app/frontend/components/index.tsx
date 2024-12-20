import { route } from "@helpers/frontend/route.ts";
import {
  detectedLang,
  useTranslation,
} from "@helpers/frontend/translations.ts";

const Home = () => {
  const t = useTranslation();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Navigation */}
      <nav className="flex items-center justify-between py-4 px-8 bg-white shadow-sm">
        <div className="text-xl font-bold text-gray-800">
          {t("index.appName", { endExample: "!" })}
        </div>
        <div>
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 transition-colors mx-4"
          >
            Features
          </a>
          <a
            href="javascript:void(0)"
            onClick={route({ path: "/pages/register" })}
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-center px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Welcome to My SaaS App
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto">
          Streamline your workflow and boost productivity with our all-in-one
          suite of tools.
        </p>
        <a
          href="javascript:void(0)"
          onClick={route({ path: "/pages/register" })}
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-10 rounded-full hover:bg-gray-100 transition-colors m-1 shadow-lg"
        >
          Get Started
        </a>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Powerful Features
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Feature 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="text-blue-500 mb-6">
                  {/* Light Bulb Icon (Heroicons Outline) */}
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.663 7.277A5.25 5.25 0 0117.25 9c0 2.041-.838 3.713-2.25 5.503V17.25a.75.75 0 01-.75.75h-1.125a.75.75 0 00-.75.75v1.125a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-1.125a.75.75 0 00-.75-.75H9.375a.75.75 0 01-.75-.75v-2.747c-1.412-1.79-2.25-3.462-2.25-5.503a5.25 5.25 0 015.288-5.25h.041z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Intelligent Insights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gain clear and actionable insights into your data, helping you
                  make smarter decisions, faster.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="text-blue-500 mb-6">
                  {/* Check Badge Icon (Heroicons Outline) */}
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 5.59a2.256 2.256 0 00-2.827-.093l-.03.026a2.254 2.254 0 00-.098 3.183l3.312 3.304c.295.295.788.295 1.083 0l3.304-3.304a2.254 2.254 0 00-.098-3.183l-.03-.026a2.256 2.256 0 00-2.827.093l-.78.79-.778-.79z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.33 7.75L8.25 13.83m-.562-.096a2.256 2.256 0 00-2.827-.093l-.03.026a2.254 2.254 0 00-.098 3.183l3.304 3.304c.295.295.788.295 1.083 0l3.312-3.304a2.254 2.254 0 00-.098-3.183l-.03-.026a2.256 2.256 0 00-2.827.093"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Reliable Security
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Safeguard your data with top-notch security features and
                  industry-leading encryption standards.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="text-blue-500 mb-6">
                  {/* Chart Bar Icon (Heroicons Outline) */}
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v18M20.25 3v18M7.5 10.5v9M12 6v13.5M16.5 13.5v6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Customizable Analytics
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tailor analytics dashboards to your needs and watch
                  productivity soar as you track what matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Sign up today and transform the way you work.
          </p>
          <a
            href="javascript:void(0)"
            onClick={route({ path: "/pages/register" })}
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Free Trial
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} My SaaS App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
