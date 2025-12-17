import PageLayout from "@/components/PageLayout";
import { DollarSign, Calendar, Users, CheckCircle } from "lucide-react";

const employees = [
  { name: "Alex Thompson", role: "Software Engineer", salary: "$8,500", status: "Paid", date: "Dec 15" },
  { name: "Maria Garcia", role: "Product Designer", salary: "$7,200", status: "Pending", date: "Dec 15" },
  { name: "David Kim", role: "Marketing Lead", salary: "$7,800", status: "Paid", date: "Dec 15" },
  { name: "Sophie Brown", role: "HR Manager", salary: "$6,500", status: "Paid", date: "Dec 15" },
  { name: "Ryan Murphy", role: "Data Analyst", salary: "$6,800", status: "Pending", date: "Dec 15" },
];

const Payroll = () => {
  return (
    <PageLayout 
      title="Payroll" 
      subtitle="Manage employee compensation"
      accentColor="bg-icon-green"
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: DollarSign, label: "Total Payroll", value: "$124,500", sub: "This month" },
          { icon: Users, label: "Employees", value: "48", sub: "Active" },
          { icon: CheckCircle, label: "Processed", value: "42", sub: "87.5%" },
          { icon: Calendar, label: "Next Run", value: "Dec 31", sub: "In 14 days" },
        ].map((card, i) => (
          <div 
            key={i}
            className="glass-card rounded-2xl p-5 opacity-0 animate-fade-in"
            style={{ animationDelay: `${100 + i * 50}ms` }}
          >
            <div className="w-10 h-10 bg-icon-green/20 rounded-xl flex items-center justify-center mb-3">
              <card.icon className="w-5 h-5 text-icon-green" />
            </div>
            <p className="text-2xl font-semibold">{card.value}</p>
            <p className="text-sm text-muted-foreground">{card.label}</p>
            <p className="text-xs text-muted-foreground/70 mt-1">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Payroll Table */}
      <div className="glass-card rounded-2xl overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <div className="p-6 border-b border-border/50 flex justify-between items-center">
          <h3 className="text-lg font-semibold">December Payroll</h3>
          <button className="px-4 py-2 bg-icon-green text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
            Run Payroll
          </button>
        </div>
        <div className="divide-y divide-border/50">
          {employees.map((emp, i) => (
            <div key={i} className="flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-icon-green to-icon-teal flex items-center justify-center text-white font-medium text-sm">
                  {emp.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium">{emp.name}</p>
                  <p className="text-sm text-muted-foreground">{emp.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{emp.salary}</p>
                <div className="flex items-center gap-2 justify-end">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    emp.status === 'Paid' ? 'bg-icon-green/20 text-icon-green' : 'bg-icon-yellow/20 text-icon-yellow'
                  }`}>
                    {emp.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{emp.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Payroll;
