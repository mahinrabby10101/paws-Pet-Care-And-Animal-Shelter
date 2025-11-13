import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Register() {
  const { createUser, googleLogin } = useContext(AuthContext);

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="input input-bordered w-full" />
        <input type="email" placeholder="Email" className="input input-bordered w-full" />
        <input type="text" placeholder="Photo URL" className="input input-bordered w-full" />
        <input type="password" placeholder="Password" className="input input-bordered w-full" />
        <button className="btn btn-primary w-full">Register</button>
      </form>
      <button onClick={googleLogin} className="btn btn-outline w-full mt-4">Register with Google</button>
      <p className="mt-2 text-sm">
        Already have an account? <Link to="/login" className="link">Login</Link>
      </p>
    </div>
  );
}
