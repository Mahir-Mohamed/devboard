import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Create Account
      </h2>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-3"
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border rounded-lg px-4 py-3"
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Register
        </button>

      </form>

      <p className="mt-6 text-center text-sm">
        Already have an account?{" "}

        <Link
          to="/login"
          className="text-blue-600"
        >
          Login
        </Link>

      </p>
    </>
  );
}

export default RegisterPage;