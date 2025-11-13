import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      {user ? (
        <div className="space-y-2">
          <p><strong>Name:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {user.photoURL && <img src={user.photoURL} alt="User" className="w-24 h-24 rounded-full" />}
          <button className="btn btn-outline mt-4">Update Profile</button>
        </div>
      ) : (
        <p>Not logged in.</p>
      )}
    </div>
  );
}
