import PageLayout from "@/components/PageLayout";
import { MessageCircle, Clock, CheckCircle, AlertCircle } from "lucide-react";

const tickets = [
  { id: "#4521", subject: "Login issues on mobile", priority: "High", status: "Open", time: "2h ago" },
  { id: "#4520", subject: "Payment not processing", priority: "Critical", status: "In Progress", time: "3h ago" },
  { id: "#4519", subject: "Feature request: Dark mode", priority: "Low", status: "Open", time: "5h ago" },
  { id: "#4518", subject: "Account verification stuck", priority: "Medium", status: "Resolved", time: "1d ago" },
  { id: "#4517", subject: "API rate limiting", priority: "Medium", status: "In Progress", time: "1d ago" },
];

const Support = () => {
  return (
    <PageLayout 
      title="Support" 
      subtitle="Help desk and ticket management"
      accentColor="bg-icon-red"
    >
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: MessageCircle, label: "Open Tickets", value: "24", color: "text-icon-red" },
          { icon: Clock, label: "Avg Response", value: "2.4h", color: "text-icon-orange" },
          { icon: CheckCircle, label: "Resolved Today", value: "18", color: "text-icon-green" },
          { icon: AlertCircle, label: "Critical", value: "3", color: "text-icon-red" },
        ].map((stat, i) => (
          <div 
            key={i}
            className="glass-card rounded-2xl p-5 text-center opacity-0 animate-fade-in"
            style={{ animationDelay: `${100 + i * 50}ms` }}
          >
            <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Tickets */}
      <div className="glass-card rounded-2xl overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <div className="p-6 border-b border-border/50 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Recent Tickets</h3>
          <button className="px-4 py-2 bg-icon-red text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
            New Ticket
          </button>
        </div>
        <div className="divide-y divide-border/50">
          {tickets.map((ticket, i) => (
            <div key={i} className="flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors">
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-muted-foreground">{ticket.id}</span>
                <div>
                  <p className="font-medium">{ticket.subject}</p>
                  <span className="text-xs text-muted-foreground">{ticket.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                  ticket.priority === 'Critical' ? 'bg-icon-red/20 text-icon-red' :
                  ticket.priority === 'High' ? 'bg-icon-orange/20 text-icon-orange' :
                  ticket.priority === 'Medium' ? 'bg-icon-yellow/20 text-icon-yellow' :
                  'bg-secondary text-muted-foreground'
                }`}>
                  {ticket.priority}
                </span>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                  ticket.status === 'Open' ? 'bg-icon-blue/20 text-icon-blue' :
                  ticket.status === 'In Progress' ? 'bg-icon-purple/20 text-icon-purple' :
                  'bg-icon-green/20 text-icon-green'
                }`}>
                  {ticket.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Support;
