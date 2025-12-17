import PageLayout from "@/components/PageLayout";
import { Mail, Phone, Building, MoreHorizontal } from "lucide-react";

const contacts = [
  { name: "Sarah Johnson", email: "sarah.j@company.com", company: "Tech Corp", status: "Lead", avatar: "SJ" },
  { name: "Michael Chen", email: "m.chen@startup.io", company: "Startup Inc", status: "Customer", avatar: "MC" },
  { name: "Emily Davis", email: "emily.d@enterprise.com", company: "Enterprise Ltd", status: "Prospect", avatar: "ED" },
  { name: "James Wilson", email: "j.wilson@agency.co", company: "Creative Agency", status: "Lead", avatar: "JW" },
  { name: "Lisa Anderson", email: "l.anderson@corp.net", company: "Global Corp", status: "Customer", avatar: "LA" },
];

const CRM = () => {
  return (
    <PageLayout 
      title="CRM" 
      subtitle="Manage your customer relationships"
      accentColor="bg-icon-pink"
    >
      {/* Pipeline Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Leads", value: "342", color: "text-icon-blue" },
          { label: "Qualified", value: "156", color: "text-icon-purple" },
          { label: "Proposals", value: "48", color: "text-icon-orange" },
          { label: "Closed Won", value: "23", color: "text-icon-green" },
        ].map((stat, i) => (
          <div 
            key={i} 
            className="glass-card rounded-2xl p-5 text-center opacity-0 animate-fade-in"
            style={{ animationDelay: `${100 + i * 50}ms` }}
          >
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Contacts Table */}
      <div className="glass-card rounded-2xl overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <div className="p-6 border-b border-border/50">
          <h3 className="text-lg font-semibold">Recent Contacts</h3>
        </div>
        <div className="divide-y divide-border/50">
          {contacts.map((contact, i) => (
            <div key={i} className="flex items-center gap-4 p-4 hover:bg-secondary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-icon-pink to-icon-purple flex items-center justify-center text-white font-semibold">
                {contact.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{contact.name}</p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{contact.email}</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <Building className="w-4 h-4" />
                {contact.company}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                contact.status === 'Customer' ? 'bg-icon-green/20 text-icon-green' :
                contact.status === 'Lead' ? 'bg-icon-blue/20 text-icon-blue' :
                'bg-icon-orange/20 text-icon-orange'
              }`}>
                {contact.status}
              </span>
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default CRM;
