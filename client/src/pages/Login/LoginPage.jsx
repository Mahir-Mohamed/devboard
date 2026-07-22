import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Welcome Back
      </h2>

      <form className="space-y-5">

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-3"
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Login
        </button>

      </form>

      <div className="flex justify-between mt-6 text-sm">

        <Link
          to="/forgot-password"
          className="text-blue-600"
        >
          Forgot Password?
        </Link>

        <Link
          to="/register"
          className="text-blue-600"
        >
          Register
        </Link>

      </div>
    </>
  );
}

export default LoginPage;