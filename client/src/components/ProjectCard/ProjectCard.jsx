function ProjectCard({ name, status, color }) {
  return (
    <div className="flex items-center justify-between bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full ${color}`} />

        <div>
          <h3 className="font-semibold">{name}</h3>

          <p className="text-sm text-slate-500">
            {status}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;