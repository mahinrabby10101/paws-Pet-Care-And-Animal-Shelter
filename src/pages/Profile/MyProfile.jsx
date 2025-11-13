import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  const defaultAvatar =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  console.log("User info:", user); // just to verify

  return (
    <div className="p-10 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      {user ? (
        <div className="space-y-4">
          <div className="flex justify-center">
            <img
              src={user.photoURL || defaultAvatar}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-lg">
            <strong>Name:</strong> {user.displayName || "Anonymous"}
          </p>
          <p className="text-lg">
            <strong>Email:</strong> {user.email}
          </p>

          <button className="btn btn-outline mt-4">Update Profile</button>
        </div>
      ) : (
        <p className="text-gray-500 mt-6">Not logged in.</p>
      )}
    </div>
  );
}
