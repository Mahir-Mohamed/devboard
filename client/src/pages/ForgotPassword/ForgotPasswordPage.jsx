import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Forgot Password
      </h2>

      <form className="space-y-5">

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg px-4 py-3"
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Send Reset Link
        </button>

      </form>

      <p className="text-center mt-6">

        <Link
          to="/login"
          className="text-blue-600"
        >
          Back to Login
        </Link>

      </p>
    </>
  );
}

export default ForgotPasswordPage;