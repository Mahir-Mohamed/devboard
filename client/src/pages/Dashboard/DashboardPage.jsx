import StatCard from "../../components/StatCard/StatCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import TaskCard from "../../components/TaskCard/TaskCard";

import { dashboardStats } from "../../constants/dashboard";
import { recentProjects } from "../../constants/projects";
import { recentTasks } from "../../constants/tasks";

function DashboardPage() {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Welcome back, Mahir 👋
      </h1>

      <p className="text-slate-500 mt-2">
        Here's an overview of your workspace.
      </p>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      {/* Projects + Tasks */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">
        {/* Recent Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-5">
            Recent Projects
          </h2>

          <div className="space-y-4">
            {recentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                status={project.status}
                color={project.color}
              />
            ))}
          </div>
        </section>

        {/* Recent Tasks */}
        <section>
          <h2 className="text-2xl font-semibold mb-5">
            Recent Tasks
          </h2>

          <div className="space-y-4">
            {recentTasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                status={task.status}
                priority={task.priority}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default DashboardPage;