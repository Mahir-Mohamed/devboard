import { sidebarItems } from "../../constants/navigation";

function Sidebar() {
  return (
    <aside className="w-64 min-h-[calc(100vh-64px)] bg-white border-r border-slate-200 p-6">
      <ul className="space-y-5">
        {sidebarItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer font-medium hover:text-blue-600 transition-colors"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;