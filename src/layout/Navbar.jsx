import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
     
      <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
        <img 
          src="/paw.png"
          alt="WarmPaws Logo"
          className="w-8 h-8 object-contain"
        />
        <span>WarmPaws 🐾</span>
      </Link>

     
      <div className="flex items-center space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-700"}>
          Home
        </NavLink>
        <NavLink
  to="/services"
  className={({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "text-gray-700"
  }
>
  Services
</NavLink>

        <NavLink to="/profile" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-700"}>
          My Profile
        </NavLink>

       
        {user ? (
          <div className="flex items-center space-x-2">
            {user.photoURL && (
              <img
                src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                alt={user.displayName || "User"}
                className="w-8 h-8 rounded-full object-cover border border-gray-300"
                referrerPolicy="no-referrer"
              />
            )}
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
