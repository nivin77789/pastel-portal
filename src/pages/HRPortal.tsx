import PageLayout from "@/components/PageLayout";
import { Users, Briefcase, Calendar, Award, Clock, MapPin } from "lucide-react";

const team = [
  { name: "Jennifer Lee", role: "Engineering Manager", department: "Engineering", joined: "2021", avatar: "JL" },
  { name: "Marcus Johnson", role: "Senior Developer", department: "Engineering", joined: "2022", avatar: "MJ" },
  { name: "Amanda White", role: "UX Designer", department: "Design", joined: "2023", avatar: "AW" },
  { name: "Chris Taylor", role: "Product Manager", department: "Product", joined: "2022", avatar: "CT" },
];

const HRPortal = () => {
  return (
    <PageLayout 
      title="HR Portal" 
      subtitle="Employee management hub"
      accentColor="bg-icon-cyan"
    >
      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Users, label: "Total Employees", value: "156" },
          { icon: Briefcase, label: "Open Positions", value: "12" },
          { icon: Calendar, label: "On Leave", value: "8" },
          { icon: Award, label: "New Hires", value: "5" },
        ].map((stat, i) => (
          <div 
            key={i}
            className="glass-card rounded-2xl p-5 opacity-0 animate-fade-in"
            style={{ animationDelay: `${100 + i * 50}ms` }}
          >
            <stat.icon className="w-6 h-6 text-icon-cyan mb-3" />
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Team Directory */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h3 className="text-lg font-semibold mb-4">Team Directory</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map((member, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-icon-cyan to-icon-blue flex items-center justify-center text-white font-semibold">
                  {member.avatar}
                </div>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-xs text-muted-foreground/70">{member.department} • Since {member.joined}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card rounded-2xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: "350ms" }}>
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {[
              { label: "Request Time Off", icon: Calendar },
              { label: "View Benefits", icon: Award },
              { label: "Submit Timesheet", icon: Clock },
              { label: "Update Location", icon: MapPin },
            ].map((action, i) => (
              <button key={i} className="w-full flex items-center gap-3 p-3 rounded-xl bg-secondary/30 hover:bg-icon-cyan/10 transition-colors text-left">
                <action.icon className="w-5 h-5 text-icon-cyan" />
                <span className="font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HRPortal;
