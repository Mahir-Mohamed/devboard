import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 h-20 flex items-center justify-between px-8">
      <h1 className="text-3xl font-bold text-blue-600">
        DevBoard
      </h1>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Bell
          size={22}
          className="cursor-pointer"
        />

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          M
        </div>
      </div>
    </header>
  );
}

export default Navbar;