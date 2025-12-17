import PageLayout from "@/components/PageLayout";
import { Plus, Search, Star, MoreHorizontal } from "lucide-react";

const notes = [
  { title: "Project Ideas", preview: "List of potential features for Q1 2025...", color: "bg-icon-rose", starred: true, date: "Today" },
  { title: "Meeting Notes", preview: "Weekly standup discussion points and action items...", color: "bg-icon-purple", starred: false, date: "Yesterday" },
  { title: "Design Resources", preview: "Collection of useful design tools and inspiration...", color: "bg-icon-blue", starred: true, date: "Dec 12" },
  { title: "API Documentation", preview: "Notes on the new REST API endpoints...", color: "bg-icon-green", starred: false, date: "Dec 10" },
  { title: "Personal Goals", preview: "Career objectives and learning targets for 2025...", color: "bg-icon-orange", starred: true, date: "Dec 8" },
  { title: "Quick Reference", preview: "Shortcuts, commands, and frequently used snippets...", color: "bg-icon-cyan", starred: false, date: "Dec 5" },
];

const Notes = () => {
  return (
    <PageLayout 
      title="Notes" 
      subtitle="Capture and organize your thoughts"
      accentColor="bg-icon-rose"
    >
      {/* Search and Actions */}
      <div className="flex flex-wrap gap-3 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
        <div className="flex-1 min-w-[200px] flex items-center gap-2 px-4 py-2 glass-card rounded-xl">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input type="text" placeholder="Search notes..." className="bg-transparent border-none outline-none text-sm flex-1" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-icon-rose text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          New Note
        </button>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note, i) => (
          <div 
            key={i}
            className="glass-card rounded-2xl p-5 opacity-0 animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer group"
            style={{ animationDelay: `${150 + i * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-3 h-3 rounded-full ${note.color}`} />
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 hover:bg-secondary rounded">
                  <Star className={`w-4 h-4 ${note.starred ? 'fill-icon-yellow text-icon-yellow' : 'text-muted-foreground'}`} />
                </button>
                <button className="p-1 hover:bg-secondary rounded">
                  <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
            <h3 className="font-semibold mb-2">{note.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{note.preview}</p>
            <p className="text-xs text-muted-foreground/70">{note.date}</p>
          </div>
        ))}
        
        {/* Add Note Card */}
        <div 
          className="glass-card rounded-2xl p-5 opacity-0 animate-fade-in border-2 border-dashed border-border/50 hover:border-icon-rose/50 transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[180px]"
          style={{ animationDelay: `${150 + notes.length * 50}ms` }}
        >
          <div className="w-12 h-12 rounded-full bg-icon-rose/10 flex items-center justify-center mb-3">
            <Plus className="w-6 h-6 text-icon-rose" />
          </div>
          <p className="text-sm font-medium text-muted-foreground">Create New Note</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Notes;
