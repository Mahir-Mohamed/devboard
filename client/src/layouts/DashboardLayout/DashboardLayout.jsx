import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <Navbar />

      {/* Content Area */}
      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold">
            Welcome to DevBoard 🚀
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your projects and tasks efficiently.
          </p>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;