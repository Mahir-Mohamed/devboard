    import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">
            DevBoard
          </h1>

          <p className="text-slate-500 mt-2">
            Project Management Platform
          </p>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;