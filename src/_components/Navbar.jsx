import { FaHome, FaUtensils, FaTags, FaInfoCircle } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const navbarHeight = 64; // Adjust based on your actual navbar height

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <nav className="py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/s.png" alt="Logo" className="h-8 pr-1" />
            <img src="/r.png" alt="Logo" className="h-8 pl-1" />
          </div>

          <form className="max-w-lg w-full mx-auto flex-grow">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Recipe..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-1 top-1 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4"
              >
                Search
              </button>
            </div>
          </form>

          <div className="flex space-x-6">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className="flex items-center text-gray-700 hover:text-blue-700 cursor-pointer"
            >
              <FaHome className="mr-2" /> Home
            </ScrollLink>
            <ScrollLink
              to="recipe"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className="flex items-center text-gray-700 hover:text-blue-700 cursor-pointer"
            >
              <FaUtensils className="mr-2" /> Recipe
            </ScrollLink>
            <ScrollLink
              to="pricing"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className="flex items-center text-gray-700 hover:text-blue-700 cursor-pointer"
            >
              <FaTags className="mr-2" /> Pricing
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className="flex items-center text-gray-700 hover:text-blue-700 cursor-pointer"
            >
              <FaInfoCircle className="mr-2" /> About
            </ScrollLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
