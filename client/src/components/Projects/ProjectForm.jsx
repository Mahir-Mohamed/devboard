import { useEffect, useState } from "react";

function ProjectForm({
  onSubmit,
  onCancel,
  initialData = null,
}) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Planning",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="border rounded-xl p-6 mb-8 bg-white shadow">
      <h2 className="text-xl font-bold mb-5">
        {initialData ? "Edit Project" : "Create Project"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Project Name"
          value={formData.name}
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
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        >
          <option>Planning</option>
          <option>Active</option>
          <option>Completed</option>
        </select>

        <div className="flex gap-3">
          <button
            type="submit"
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

export default ProjectForm;