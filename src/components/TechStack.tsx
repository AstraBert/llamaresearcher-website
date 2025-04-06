
const technologies = [
  {
    name: "Groq",
    logo: "/groq-logo.svg",
    url: "https://groq.com",
    description: "Lightning-fast LLM provider powering our AI capabilities"
  },
  {
    name: "LinkUp",
    logo: "/linkup-logo.svg",
    url: "https://linkup.so",
    description: "Deep web search service for comprehensive information gathering"
  },
  {
    name: "LlamaIndex",
    logo: "/llamaindex-logo.svg",
    url: "https://www.llamaindex.ai",
    description: "Agentic architecture that orchestrates our research workflow"
  },
  {
    name: "Gradio",
    logo: "/gradio-logo.svg",
    url: "https://gradio.app",
    description: "Intuitive frontend interface for a seamless user experience"
  },
  {
    name: "FastAPI",
    logo: "/fastapi-logo.svg",
    url: "https://fastapi.tiangolo.com",
    description: "High-performance API wrapper for efficient data handling"
  },
  {
    name: "Redis",
    logo: "/redis-logo.svg",
    url: "https://redis.io",
    description: "Advanced rate limiting to ensure optimal API performance"
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Powered by Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            LlamaResearcher combines Llama4 - among the best AIs out there - and web technologies to deliver advanced research capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <a 
              href={tech.url} 
              target="_blank" 
              rel="noopener noreferrer"
              key={index} 
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center btn-3d"
            >
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <img 
                  src={tech.logo} 
                  alt={`${tech.name} Logo`} 
                  className="h-10 w-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/40/CCCCCC/666666?text=${tech.name.charAt(0)}`;
                  }}
                />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{tech.name}</h3>
              <p className="text-muted-foreground">{tech.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center text-muted-foreground">
          <p className="italic">
            "By combining these powerful technologies, LlamaResearcher delivers a research experience that's both comprehensive and lightning-fast."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
