import PageLayout from "@/components/PageLayout";
import StatCard from "@/components/StatCard";
import { Activity, Users, DollarSign, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <PageLayout 
      title="Dashboard" 
      subtitle="Overview of your business metrics"
      accentColor="bg-icon-blue"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Revenue" value="$54,239" change="12.5% from last month" positive delay={100} />
        <StatCard label="Active Users" value="2,847" change="8.2% from last week" positive delay={150} />
        <StatCard label="Conversion Rate" value="3.24%" change="0.5% from last month" positive delay={200} />
        <StatCard label="Avg. Session" value="4m 32s" change="2.1% from last week" positive={false} delay={250} />
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 70, 95].map((height, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-icon-blue to-icon-cyan rounded-t-lg opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-muted-foreground">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>
        
        <div className="glass-card rounded-2xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: "350ms" }}>
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {[
              { icon: Activity, label: "View Analytics", color: "bg-icon-purple" },
              { icon: Users, label: "Manage Team", color: "bg-icon-pink" },
              { icon: DollarSign, label: "Process Payroll", color: "bg-icon-green" },
              { icon: TrendingUp, label: "View Reports", color: "bg-icon-orange" },
            ].map((action, i) => (
              <button key={i} className="w-full flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className={`w-10 h-10 ${action.color} rounded-xl flex items-center justify-center`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
