
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/llama-logo.svg" 
            alt="LlamaResearcher Logo" 
            className="h-8 w-8" 
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/32/FFC107/000000?text=LR";
            }}
          />
          <span className="font-display font-bold text-xl">
            <span className="text-llamayellow-600">Llama</span>
            <span className="text-llamapurple-600">Researcher</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-llamayellow-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-foreground hover:text-llamayellow-600 transition-colors">How It Works</a>
          <a href="#tech-stack" className="text-foreground hover:text-llamayellow-600 transition-colors">Tech Stack</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="btn-3d bg-llamayellow-600 hover:bg-llamayellow-700 text-black">
            <a href="https://app.llamaresearcher.com" target="_blank" rel="noopener noreferrer">
              Try For Free
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
