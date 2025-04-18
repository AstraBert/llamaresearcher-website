
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
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
            <p className="text-muted-foreground mb-4">
              AI-powered research companion that transforms topics into comprehensive essays in seconds.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-llamayellow-600 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-llamayellow-600 transition-colors">How It Works</a></li>
              <li><a href="#tech-stack" className="text-muted-foreground hover:text-llamayellow-600 transition-colors">Tech Stack</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold mb-4">Tech Stack</h3>
            <ul className="space-y-2">
              <li><a href="https://groq.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-llamayellow-600 transition-colors">Groq</a></li>
              <li><a href="https://linkup.so" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-llamayellow-600 transition-colors">LinkUp</a></li>
              <li><a href="https://www.llamaindex.ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-llamayellow-600 transition-colors">LlamaIndex</a></li>
              <li><a href="https://gradio.app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-llamayellow-600 transition-colors">Gradio</a></li>
              <li><a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-llamayellow-600 transition-colors">FastAPI</a></li>
              <li><a href="https://redis.io" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-llamayellow-600 transition-colors">Redis</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold mb-4">Try It</h3>
            <ul className="space-y-2">
              <li><a href="https://register.llamaresearcher.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-llamayellow-600 transition-colors">Sign Up</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="https://app.llamaresearcher.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-llamayellow-600 transition-colors">Log In</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LlamaResearcher. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-llamayellow-600 transition-colors text-sm">We do not retain your data and we don't collect cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
