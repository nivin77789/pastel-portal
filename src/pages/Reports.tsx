import PageLayout from "@/components/PageLayout";
import { FileText, Download, Calendar, Filter } from "lucide-react";

const reports = [
  { name: "Q4 Revenue Report", type: "Financial", date: "Dec 10, 2024", size: "2.4 MB" },
  { name: "Monthly User Analytics", type: "Analytics", date: "Dec 8, 2024", size: "1.8 MB" },
  { name: "Employee Performance", type: "HR", date: "Dec 5, 2024", size: "945 KB" },
  { name: "Inventory Status", type: "Operations", date: "Dec 3, 2024", size: "1.2 MB" },
  { name: "Marketing Campaign Results", type: "Marketing", date: "Dec 1, 2024", size: "3.1 MB" },
];

const Reports = () => {
  return (
    <PageLayout 
      title="Reports" 
      subtitle="Access and generate reports"
      accentColor="bg-icon-yellow"
    >
      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Reports", value: "234" },
          { label: "Generated This Month", value: "28" },
          { label: "Scheduled", value: "12" },
          { label: "Shared", value: "45" },
        ].map((stat, i) => (
          <div 
            key={i}
            className="glass-card rounded-2xl p-5 text-center opacity-0 animate-fade-in"
            style={{ animationDelay: `${100 + i * 50}ms` }}
          >
            <p className="text-3xl font-bold text-icon-yellow">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Actions Bar */}
      <div className="flex flex-wrap gap-3 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "250ms" }}>
        <button className="flex items-center gap-2 px-4 py-2 bg-icon-yellow text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
          <FileText className="w-4 h-4" />
          Generate Report
        </button>
        <button className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl text-sm font-medium hover:bg-secondary/50 transition-colors">
          <Calendar className="w-4 h-4" />
          Schedule
        </button>
        <button className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl text-sm font-medium hover:bg-secondary/50 transition-colors">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Reports List */}
      <div className="glass-card rounded-2xl overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <div className="divide-y divide-border/50">
          {reports.map((report, i) => (
            <div key={i} className="flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-icon-yellow/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-icon-yellow" />
                </div>
                <div>
                  <p className="font-medium">{report.name}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-2 py-0.5 rounded bg-secondary text-xs">{report.type}</span>
                    <span>{report.date}</span>
                    <span>•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Download className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Reports;
