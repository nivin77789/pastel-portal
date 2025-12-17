import { Link } from "react-router-dom";
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
  Calendar,
  Mail,
  Bell,
  FolderOpen,
  Shield,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";
import AppIcon from "./AppIcon";

const apps = [
  { icon: LayoutDashboard, label: "Dashboard", colorClass: "app-icon-blue", path: "/dashboard" },
  { icon: BarChart3, label: "Analytics", colorClass: "app-icon-purple", path: "/analytics" },
  { icon: Users, label: "CRM", colorClass: "app-icon-pink", path: "/crm" },
  { icon: Package, label: "Inventory", colorClass: "app-icon-orange", path: "/inventory" },
  { icon: Wallet, label: "Payroll", colorClass: "app-icon-green", path: "/payroll" },
  { icon: UserCircle, label: "HR Portal", colorClass: "app-icon-cyan", path: "/hr-portal" },
  { icon: HeadphonesIcon, label: "Support", colorClass: "app-icon-red", path: "/support" },
  { icon: FileText, label: "Reports", colorClass: "app-icon-yellow", path: "/reports" },
  { icon: Settings, label: "Settings", colorClass: "app-icon-indigo", path: "/settings" },
  { icon: MessageSquare, label: "Slack", colorClass: "app-icon-teal", path: "/slack" },
  { icon: StickyNote, label: "Notes", colorClass: "app-icon-rose", path: "/notes" },
  { icon: Calendar, label: "Calendar", colorClass: "app-icon-blue", path: "/calendar" },
  { icon: Mail, label: "Email", colorClass: "app-icon-purple", path: "/email" },
  { icon: Bell, label: "Notifications", colorClass: "app-icon-pink", path: "/notifications" },
  { icon: FolderOpen, label: "Projects", colorClass: "app-icon-orange", path: "/projects" },
  { icon: Shield, label: "Security", colorClass: "app-icon-green", path: "/security" },
  { icon: CreditCard, label: "Billing", colorClass: "app-icon-cyan", path: "/billing" },
  { icon: Globe, label: "Website", colorClass: "app-icon-indigo", path: "/website" },
  { icon: Zap, label: "Integrations", colorClass: "app-icon-yellow", path: "/integrations" },
];

const AppGrid = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10">
        {apps.map((app, index) => (
          <Link to={app.path} key={app.label}>
            <AppIcon
              icon={app.icon}
              label={app.label}
              colorClass={app.colorClass}
              delay={150 + index * 50}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppGrid;
