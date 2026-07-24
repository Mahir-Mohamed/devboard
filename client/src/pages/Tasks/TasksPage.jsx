import { useEffect, useState } from "react";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../services/task.service";

import { getProjects } from "../../services/project.service";

import TaskForm from "../../components/Tasks/TaskForm";

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data.tasks);
  };

  const fetchProjects = async () => {
    const response = await getProjects();
    setProjects(response.data.projects);
  };

  const handleCreate = async (data) => {
    await createTask(data);
    setShowForm(false);
    fetchTasks();
  };

  const handleUpdate = async (data) => {
    await updateTask(editingTask._id, data);

    setEditingTask(null);

    setShowForm(false);

    fetchTasks();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete task?")) return;

    await deleteTask(id);

    fetchTasks();
  };

  return (
    <div className="p-8">

      <div className="flex justify-between mb-8">

        <h1 className="text-3xl font-bold">
          Tasks
        </h1>

        <button
          onClick={() => {
            setEditingTask(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          + New Task
        </button>

      </div>

      {showForm && (
        <TaskForm
          projects={projects}
          initialData={editingTask}
          onSubmit={
            editingTask
              ? handleUpdate
              : handleCreate
          }
          onCancel={() => {
            setShowForm(false);
            setEditingTask(null);
          }}
        />
      )}

      <div className="space-y-5">

        {tasks.map((task) => (

          <div
            key={task._id}
            className="bg-white rounded-xl shadow border p-6"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="font-bold text-xl">
                  {task.title}
                </h2>

                <p className="text-slate-600 mt-2">
                  {task.description}
                </p>

                <div className="flex gap-3 mt-4">

                  <span className="bg-green-100 px-3 py-1 rounded-full">
                    {task.status}
                  </span>

                  <span className="bg-yellow-100 px-3 py-1 rounded-full">
                    {task.priority}
                  </span>

                </div>

              </div>

              <div className="flex flex-col gap-2">

                <button
                  onClick={() => {
                    setEditingTask(task);
                    setShowForm(true);
                  }}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(task._id)}
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

export default TasksPage;