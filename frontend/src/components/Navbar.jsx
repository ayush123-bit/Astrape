import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiShoppingCart, FiLogOut, FiUserPlus, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <nav className="bg-yellow-500 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          ShopEasy
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/products"
            className="text-gray-900 font-medium hover:text-white"
          >
            Products
          </Link>

          {user ? (
            <>
              <Link
                to="/cart"
                className="flex items-center gap-1 text-gray-900 hover:text-white"
              >
                <FiShoppingCart /> Cart
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 bg-gray-900 text-white px-3 py-1 rounded-md hover:bg-gray-800"
              >
                <FiLogOut /> Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-1 border border-gray-900 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white transition"
              >
                <FiUserPlus /> Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-900 text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 w-64 h-full bg-yellow-400 shadow-lg z-50 p-6 flex flex-col space-y-6 transform transition-transform duration-300">
            {/* Close Button */}
            <button
              className="self-end text-gray-900 text-2xl mb-6"
              onClick={() => setMenuOpen(false)}
            >
              <FiX />
            </button>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-900 font-medium hover:text-white"
            >
              Products
            </Link>

            {user ? (
              <>
                <Link
                  to="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-1 text-gray-900 hover:text-white"
                >
                  <FiShoppingCart /> Cart
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-gray-800 w-full text-left"
                >
                  <FiLogOut /> Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-1 border border-gray-900 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white transition w-fit"
                >
                  <FiUserPlus /> Signup
                </Link>
              </>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
