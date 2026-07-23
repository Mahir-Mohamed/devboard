import { useAuth } from "../../context/AuthContext";

function DashboardPage() {
  const { user, token } = useAuth();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="mt-4">
        User:
      </p>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <p className="mt-4">
        Token:
      </p>

      <pre>{token}</pre>
    </div>
  );
}

export default DashboardPage;