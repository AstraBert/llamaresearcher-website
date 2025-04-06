
import { Search, Check, BookOpen, FileCheck } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-llamayellow-600" />,
    title: "Query Expansion",
    description: "Expands your query into several sub-query to maximize the yield of retrieved information from the web"
  },
  {
    icon: <Search className="h-8 w-8 text-llamayellow-600" />,
    title: "Deep Web Research",
    description: "Searches across multiple sources to gather comprehensive information on any topic you need."
  },
  {
    icon: <Check className="h-8 w-8 text-llamayellow-600" />,
    title: "Information Validation",
    description: "Evaluates the gathered information from the web to understand if they're relevant to your prompt"
  },
  {
    icon: <FileCheck className="h-8 w-8 text-llamayellow-600" />,
    title: "Structured Essays",
    description: "Generates well-organized essays with proper citations, introductions, and conclusions."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Powerful Features</span> for Perfect Essays
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            LlamaResearcher combines Llama4 - among the most advanced AI models - with web research to deliver comprehensive, accurate essays in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 btn-3d"
            >
              <div className="bg-llamayellow-100 rounded-full p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-llamayellow-600 to-llamapurple-600 p-0.5 rounded-xl animate-float">
          <div className="bg-background rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">The Research Assistant You've Always Needed</h3>
                <p className="mb-4">
                  LlamaResearcher doesn't just summarize information — it conducts thorough research, evaluates its answers, and crafts compelling essays that stand up to academic scrutiny.
                </p>
                <ul className="space-y-2">
                  {[
                    "Saves you research time",
                    "Provides deep dives on complex topics",
                    "Helps overcome writer's block",
                    "Suitable for students, researchers, and professionals"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-llamayellow-600 mr-2 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-llamayellow-400 to-llamapurple-400 opacity-30 blur-xl rounded-lg"></div>
                <img 
                  src="/research-illustration.svg" 
                  alt="Research Process Illustration" 
                  className="relative w-full rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/500x300/FFC107/000000?text=Research+Process";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
