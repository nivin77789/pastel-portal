import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import AppGrid from "@/components/AppGrid";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-6 sm:p-8 md:p-12">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-icon-cyan/5 rounded-full blur-3xl animate-glow-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <Header />
        <SearchBar />
        <div className="mt-12">
          <AppGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;
