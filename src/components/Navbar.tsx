import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Package, 
  Wallet, 
  UserCircle, 
  HeadphonesIcon, 
  FileText, 
  Settings, 
  MessageSquare, 
  StickyNote,
  Grid3X3,
  Search,
  Bell
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const appItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard", color: "bg-blue-500" },
  { icon: BarChart3, label: "Analytics", path: "/analytics", color: "bg-emerald-500" },
  { icon: Users, label: "CRM", path: "/crm", color: "bg-violet-500" },
  { icon: Package, label: "Inventory", path: "/inventory", color: "bg-amber-500" },
  { icon: Wallet, label: "Payroll", path: "/payroll", color: "bg-rose-500" },
  { icon: UserCircle, label: "HR Portal", path: "/hr-portal", color: "bg-cyan-500" },
  { icon: HeadphonesIcon, label: "Support", path: "/support", color: "bg-pink-500" },
  { icon: FileText, label: "Reports", path: "/reports", color: "bg-indigo-500" },
  { icon: Settings, label: "Settings", path: "/settings", color: "bg-slate-500" },
  { icon: MessageSquare, label: "Slack", path: "/slack", color: "bg-purple-500" },
  { icon: StickyNote, label: "Notes", path: "/notes", color: "bg-yellow-500" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-semibold text-gray-900 text-lg tracking-tight">Workspace</span>
          </Link>

          {/* Right side icons */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button className="p-2.5 rounded-full hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Notifications */}
            <button className="p-2.5 rounded-full hover:bg-gray-100 transition-colors relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* App Launcher */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2.5 rounded-full transition-colors ${
                  menuOpen ? "bg-gray-100" : "hover:bg-gray-100"
                }`}
              >
                <Grid3X3 className="w-5 h-5 text-gray-600" />
              </button>

              {/* App Menu Dropdown */}
              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-[320px] bg-white rounded-2xl shadow-xl border border-gray-200/80 p-3 animate-scale-in origin-top-right">
                  <div className="grid grid-cols-3 gap-1">
                    {appItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 group hover:bg-gray-50 ${
                          location.pathname === item.path ? "bg-gray-50" : ""
                        }`}
                      >
                        <div className={`w-11 h-11 rounded-full ${item.color} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-200`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <Link
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-center gap-2 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      View all apps
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* User Avatar */}
            <button className="ml-1 w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold hover:shadow-md transition-shadow">
              JD
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
