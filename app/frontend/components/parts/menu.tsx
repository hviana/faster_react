import { useState } from "react";
import AvatarMenu from "./avatar_menu.tsx";
const ResponsiveMenu = (props: any) => {
  const { user, token } = props;
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/" className="text-2xl font-bold text-gray-800">
            My SaaS App
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="/"
            onClick={handleLinkClick}
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            onClick={handleLinkClick}
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Features
          </a>
          <a
            href="#"
            onClick={handleLinkClick}
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            onClick={handleLinkClick}
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Contact
          </a>
          <AvatarMenu user={user} token={token} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            aria-label="Toggle menu"
          >
            {isOpen
              ? (
                // Close Icon (X)
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )
              : (
                // Hamburger Icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 pt-4 pb-4 space-y-1">
            <a
              href="/"
              onClick={handleLinkClick}
              className="block text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="block text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Features
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="block text-gray-700 hover:text-blue-600 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="block text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Contact
            </a>
            <AvatarMenu user={user} token={token} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveMenu;
