function Sidebar() {
  return (
    <aside className="w-64 min-h-[calc(100vh-64px)] bg-white border-r border-slate-200 p-6">
      <ul className="space-y-5">
        <li className="font-medium cursor-pointer">
          Dashboard
        </li>

        <li className="cursor-pointer">
          Projects
        </li>

        <li className="cursor-pointer">
          Tasks
        </li>

        <li className="cursor-pointer">
          Calendar
        </li>

        <li className="cursor-pointer">
          Reports
        </li>

        <li className="cursor-pointer">
          Settings
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;