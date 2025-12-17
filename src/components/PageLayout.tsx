import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  accentColor: string;
}

const PageLayout = ({ children, title, subtitle, accentColor }: PageLayoutProps) => {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 sm:px-8 sm:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-foreground/80 hover:text-foreground transition-all hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Menu</span>
          </Link>
          <div className={`w-3 h-3 rounded-full ${accentColor}`} />
        </div>
      </header>

      {/* Page Content */}
      <main className="relative z-10 px-6 pb-12 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 opacity-0 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-2">
              {title}
            </h1>
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
