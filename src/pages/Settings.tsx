import PageLayout from "@/components/PageLayout";
import { User, Bell, Lock, Palette, Globe, Database, Shield, CreditCard } from "lucide-react";

const settingsSections = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Profile Settings", desc: "Manage your personal information" },
      { icon: Bell, label: "Notifications", desc: "Configure email and push notifications" },
      { icon: Lock, label: "Security", desc: "Password and two-factor authentication" },
    ]
  },
  {
    title: "Preferences",
    items: [
      { icon: Palette, label: "Appearance", desc: "Theme and display settings" },
      { icon: Globe, label: "Language & Region", desc: "Set your language and timezone" },
    ]
  },
  {
    title: "System",
    items: [
      { icon: Database, label: "Data Management", desc: "Export and manage your data" },
      { icon: Shield, label: "Privacy", desc: "Privacy settings and permissions" },
      { icon: CreditCard, label: "Billing", desc: "Manage subscription and payments" },
    ]
  }
];

const Settings = () => {
  return (
    <PageLayout 
      title="Settings" 
      subtitle="Customize your experience"
      accentColor="bg-icon-indigo"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {settingsSections.map((section, sectionIndex) => (
          <div 
            key={sectionIndex}
            className="glass-card rounded-2xl p-6 opacity-0 animate-fade-in"
            style={{ animationDelay: `${100 + sectionIndex * 100}ms` }}
          >
            <h3 className="text-lg font-semibold mb-4 text-icon-indigo">{section.title}</h3>
            <div className="space-y-3">
              {section.items.map((item, i) => (
                <button 
                  key={i} 
                  className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-icon-indigo/10 flex items-center justify-center group-hover:bg-icon-indigo/20 transition-colors">
                    <item.icon className="w-5 h-5 text-icon-indigo" />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Danger Zone */}
      <div className="glass-card rounded-2xl p-6 mt-6 border-icon-red/20 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <h3 className="text-lg font-semibold mb-2 text-icon-red">Danger Zone</h3>
        <p className="text-sm text-muted-foreground mb-4">Irreversible and destructive actions</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl border border-icon-red/30 text-icon-red text-sm font-medium hover:bg-icon-red/10 transition-colors">
            Delete Account
          </button>
          <button className="px-4 py-2 rounded-xl border border-border text-muted-foreground text-sm font-medium hover:bg-secondary transition-colors">
            Export All Data
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Settings;
