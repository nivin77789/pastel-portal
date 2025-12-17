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
  Menu,
  X,
  Home
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Users, label: "CRM", path: "/crm" },
  { icon: Package, label: "Inventory", path: "/inventory" },
  { icon: Wallet, label: "Payroll", path: "/payroll" },
  { icon: UserCircle, label: "HR Portal", path: "/hr-portal" },
  { icon: HeadphonesIcon, label: "Support", path: "/support" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: MessageSquare, label: "Slack", path: "/slack" },
  { icon: StickyNote, label: "Notes", path: "/notes" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-semibold text-foreground hidden sm:block">Workspace</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 8).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{item.label}</span>
                </Link>
              ))}
              
              {/* More dropdown indicator */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all">
                  <Menu className="w-4 h-4" />
                  <span className="hidden xl:inline">More</span>
                </button>
                
                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="glass-card rounded-xl p-2 min-w-[160px] shadow-lg">
                    {navItems.slice(8).map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          location.pathname === item.path
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-20 left-4 right-4 glass-card rounded-2xl p-4 shadow-lg animate-scale-in">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl text-center transition-all ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
