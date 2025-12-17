import { ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
}

const BrowserFrame = ({ children }: BrowserFrameProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Browser window frame */}
      <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-glass-lg">
        {/* macOS style title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-card/50 border-b border-border/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[hsl(0,85%,60%)] shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[hsl(45,100%,55%)] shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[hsl(150,80%,45%)] shadow-sm" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground font-medium">
              workspace.app
            </div>
          </div>
          <div className="w-[52px]" /> {/* Spacer for balance */}
        </div>
        
        {/* Content area */}
        <div className="p-6 sm:p-10 md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BrowserFrame;
