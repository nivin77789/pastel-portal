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
} from "lucide-react";
import AppIcon from "./AppIcon";

const apps = [
  { icon: LayoutDashboard, label: "Dashboard", colorClass: "app-icon-blue" },
  { icon: BarChart3, label: "Analytics", colorClass: "app-icon-purple" },
  { icon: Users, label: "CRM", colorClass: "app-icon-pink" },
  { icon: Package, label: "Inventory", colorClass: "app-icon-orange" },
  { icon: Wallet, label: "Payroll", colorClass: "app-icon-green" },
  { icon: UserCircle, label: "HR Portal", colorClass: "app-icon-cyan" },
  { icon: HeadphonesIcon, label: "Support", colorClass: "app-icon-red" },
  { icon: FileText, label: "Reports", colorClass: "app-icon-yellow" },
  { icon: Settings, label: "Settings", colorClass: "app-icon-indigo" },
  { icon: MessageSquare, label: "Slack", colorClass: "app-icon-teal" },
  { icon: StickyNote, label: "Notes", colorClass: "app-icon-rose" },
];

const AppGrid = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10">
      {apps.map((app, index) => (
        <AppIcon
          key={app.label}
          icon={app.icon}
          label={app.label}
          colorClass={app.colorClass}
          delay={150 + index * 50}
        />
      ))}
    </div>
  );
};

export default AppGrid;
