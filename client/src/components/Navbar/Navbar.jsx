function Navbar() {
  return (
    <nav className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
      <h1 className="text-xl font-bold text-blue-600">
        DevBoard
      </h1>

      <div className="flex items-center gap-6">
        <button>🔔</button>

        <div className="font-medium">
          Mahir
        </div>
      </div>
    </nav>
  );
}

export default Navbar;