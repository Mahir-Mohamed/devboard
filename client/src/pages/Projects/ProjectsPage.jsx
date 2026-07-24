import { useEffect, useState } from "react";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../services/project.service";

import ProjectForm from "../../components/Projects/ProjectForm";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await getProjects();
    setProjects(response.data.projects);
  };

  const handleCreate = async (data) => {
    await createProject(data);
    setShowForm(false);
    fetchProjects();
  };

  const handleUpdate = async (data) => {
    await updateProject(editingProject._id, data);

    setEditingProject(null);

    setShowForm(false);

    fetchProjects();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    await deleteProject(id);

    fetchProjects();
  };

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <button
          onClick={() => {
            setEditingProject(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          + New Project
        </button>

      </div>

      {showForm && (
        <ProjectForm
          initialData={editingProject}
          onSubmit={
            editingProject
              ? handleUpdate
              : handleCreate
          }
          onCancel={() => {
            setShowForm(false);
            setEditingProject(null);
          }}
        />
      )}

      <div className="space-y-5">

        {projects.map((project) => (

          <div
            key={project._id}
            className="bg-white rounded-xl shadow border p-6"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="text-xl font-bold">
                  {project.name}
                </h2>

                <p className="text-slate-600 mt-2">
                  {project.description}
                </p>

                <span className="inline-block mt-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {project.status}
                </span>

              </div>

              <div className="flex flex-col gap-2">

                <button
                  onClick={() => {
                    setEditingProject(project);
                    setShowForm(true);
                  }}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(project._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProjectsPage;