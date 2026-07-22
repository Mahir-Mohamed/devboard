function TaskCard({ title, status, priority }) {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div>
        <h3 className="font-semibold">{title}</h3>

        <p className="text-sm text-slate-500">
          {status}
        </p>
      </div>

      <span className="text-sm font-medium bg-slate-100 px-3 py-1 rounded-full">
        {priority}
      </span>
    </div>
  );
}

export default TaskCard;