import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
      WarmPaws 🐾
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-700"}>
          Home
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-700"}>
          Services
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-700"}>
          My Profile
        </NavLink>

        {/* Auth Buttons */}
        {user ? (
          <div className="flex items-center space-x-2">
            {user.photoURL && <img src={user.photoURL} alt={user.displayName} className="w-8 h-8 rounded-full" />}
            <span className="hidden md:inline">{user.displayName || "User"}</span>
            <button
              onClick={logOut}
              className="btn btn-sm btn-outline ml-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
            <Link to="/register" className="btn btn-sm btn-secondary">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
