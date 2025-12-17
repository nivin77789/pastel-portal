import PageLayout from "@/components/PageLayout";
import { TrendingUp, TrendingDown, Users, Eye, Clock, Target } from "lucide-react";

const Analytics = () => {
  const metrics = [
    { icon: Users, label: "Total Visitors", value: "124,892", change: "+14.2%", positive: true },
    { icon: Eye, label: "Page Views", value: "543,210", change: "+8.7%", positive: true },
    { icon: Clock, label: "Avg. Duration", value: "3m 42s", change: "-2.3%", positive: false },
    { icon: Target, label: "Bounce Rate", value: "42.3%", change: "-5.1%", positive: true },
  ];

  return (
    <PageLayout 
      title="Analytics" 
      subtitle="Deep insights into your performance"
      accentColor="bg-icon-purple"
    >
      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, i) => (
          <div 
            key={i} 
            className="glass-card rounded-2xl p-6 opacity-0 animate-fade-in"
            style={{ animationDelay: `${100 + i * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-icon-purple/20 flex items-center justify-center">
                <metric.icon className="w-6 h-6 text-icon-purple" />
              </div>
              <span className={`flex items-center gap-1 text-sm ${metric.positive ? 'text-icon-green' : 'text-icon-red'}`}>
                {metric.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {metric.change}
              </span>
            </div>
            <p className="text-2xl font-semibold">{metric.value}</p>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Traffic Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass-card rounded-2xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h3 className="text-lg font-semibold mb-6">Traffic Sources</h3>
          <div className="space-y-4">
            {[
              { source: "Organic Search", value: 45, color: "bg-icon-blue" },
              { source: "Direct", value: 28, color: "bg-icon-purple" },
              { source: "Social Media", value: 18, color: "bg-icon-pink" },
              { source: "Referral", value: 9, color: "bg-icon-orange" },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{item.source}</span>
                  <span className="font-medium">{item.value}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full transition-all`} style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: "350ms" }}>
          <h3 className="text-lg font-semibold mb-6">Top Pages</h3>
          <div className="space-y-3">
            {[
              { page: "/home", views: "45,234", time: "2m 15s" },
              { page: "/products", views: "32,109", time: "3m 42s" },
              { page: "/pricing", views: "28,456", time: "4m 10s" },
              { page: "/about", views: "15,890", time: "1m 55s" },
              { page: "/contact", views: "12,345", time: "2m 30s" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <span className="font-mono text-sm">{item.page}</span>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{item.views} views</span>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Analytics;
