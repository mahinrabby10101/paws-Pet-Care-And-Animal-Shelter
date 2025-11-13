import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { signIn, googleLogin } = useContext(AuthContext);

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="input input-bordered w-full" />
        <input type="password" placeholder="Password" className="input input-bordered w-full" />
        <button className="btn btn-primary w-full">Login</button>
      </form>
      <button onClick={googleLogin} className="btn btn-outline w-full mt-4">Login with Google</button>
      <p className="mt-2 text-sm">
        Forgot password? <Link to="/forget-password" className="link">Click here</Link>
      </p>
      <p className="mt-2 text-sm">
        Don't have an account? <Link to="/register" className="link">Register</Link>
      </p>
    </div>
  );
}
