import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import AuthLayout from "../components/Auth/AuthLayout";

import ProtectedRoute from "./ProtectedRoute";

import DashboardPage from "../pages/Dashboard/DashboardPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import TasksPage from "../pages/Tasks/TasksPage";
import ReportsPage from "../pages/Reports/ReportsPage";
import SettingsPage from "../pages/Settings/SettingsPage";

import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPassword/ForgotPasswordPage";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage />}
          />
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<DashboardPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;