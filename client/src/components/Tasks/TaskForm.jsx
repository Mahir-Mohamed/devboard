import { useEffect, useState } from "react";

function TaskForm({
  projects,
  onSubmit,
  onCancel,
  initialData = null,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Todo",
    priority: "Medium",
    project: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">

      <h2 className="text-xl font-bold mb-5">
        {initialData ? "Edit Task" : "Create Task"}
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
        className="space-y-4"
      >

        <input
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />

        <select
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        >
          <option value="">Select Project</option>

          {projects.map((project) => (
            <option
              key={project._id}
              value={project._id}
            >
              {project.name}
            </option>
          ))}
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        >
          <option>Todo</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <div className="flex gap-3">
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Save
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>

      </form>

    </div>
  );
}

export default TaskForm;