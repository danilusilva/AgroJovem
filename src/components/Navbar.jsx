import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 font-['Poppins']">
      <div className="m-2 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center animate-fade-in">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-auto"
                  src="/logo.svg"
                  alt="AgroJovem Logo"
                />
              </div>
              <span className="ml-2 text-2xl text- font-bold text-green-600 font-['Montserrat']">
                AgroJovem
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className={`animate-fade-in delay-${(index + 1) * 100}`}
              >
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 text-base font-medium transition-colors duration-200 hover-scale"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none hover-scale"
            >
              <span className="sr-only">Abrir menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
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
              ) : (
                <svg
                  className="block h-6 w-6"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className={`animate-slide-up delay-${(index + 1) * 100}`}
            >
              <Link
                to={item.path}
                className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium hover-scale"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
