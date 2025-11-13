export default function ForgetPassword() {
    return (
      <div className="p-10 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
          <button className="btn btn-primary w-full">Reset Password</button>
        </form>
      </div>
    );
  }
  