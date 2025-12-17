import PageLayout from "@/components/PageLayout";
import { Hash, AtSign, Bell, Pin, Search } from "lucide-react";

const channels = [
  { name: "general", unread: 3, pinned: true },
  { name: "engineering", unread: 12, pinned: true },
  { name: "design", unread: 0, pinned: false },
  { name: "marketing", unread: 5, pinned: false },
  { name: "random", unread: 8, pinned: false },
];

const messages = [
  { user: "Sarah K.", avatar: "SK", message: "Just pushed the new feature to staging! 🚀", time: "10:42 AM", channel: "engineering" },
  { user: "Mike T.", avatar: "MT", message: "Great work! I'll review it this afternoon.", time: "10:45 AM", channel: "engineering" },
  { user: "Lisa M.", avatar: "LM", message: "The new designs are ready for feedback", time: "10:30 AM", channel: "design" },
  { user: "John D.", avatar: "JD", message: "Team standup in 15 minutes!", time: "9:45 AM", channel: "general" },
];

const Slack = () => {
  return (
    <PageLayout 
      title="Slack" 
      subtitle="Team communication hub"
      accentColor="bg-icon-teal"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Channels Sidebar */}
        <div className="glass-card rounded-2xl p-4 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-2 px-3 py-2 mb-4 rounded-xl bg-secondary/50">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm flex-1" />
          </div>
          
          <div className="mb-4">
            <p className="text-xs text-muted-foreground px-3 mb-2 flex items-center gap-1">
              <Pin className="w-3 h-3" /> Pinned
            </p>
            {channels.filter(c => c.pinned).map((channel, i) => (
              <button key={i} className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors">
                <span className="flex items-center gap-2 text-sm">
                  <Hash className="w-4 h-4 text-muted-foreground" />
                  {channel.name}
                </span>
                {channel.unread > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-icon-teal text-white text-xs">{channel.unread}</span>
                )}
              </button>
            ))}
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground px-3 mb-2">Channels</p>
            {channels.filter(c => !c.pinned).map((channel, i) => (
              <button key={i} className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors">
                <span className="flex items-center gap-2 text-sm">
                  <Hash className="w-4 h-4 text-muted-foreground" />
                  {channel.name}
                </span>
                {channel.unread > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-icon-teal text-white text-xs">{channel.unread}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Messages Area */}
        <div className="lg:col-span-3 glass-card rounded-2xl overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="p-4 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-icon-teal" />
              <span className="font-semibold">engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <AtSign className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
          
          <div className="p-4 space-y-4 h-80 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-icon-teal to-icon-cyan flex items-center justify-center text-white font-medium text-sm">
                  {msg.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{msg.user}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="text-sm text-foreground/90">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-border/50">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary/30">
              <input 
                type="text" 
                placeholder="Message #engineering" 
                className="bg-transparent border-none outline-none text-sm flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Slack;
