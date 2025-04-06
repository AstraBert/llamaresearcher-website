
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Enter Your Topic",
    description: "Simply type in any topic or research question you're interested in exploring."
  },
  {
    number: "02",
    title: "AI Research Begins",
    description: "Our AI searches the web for reliable, up-to-date information about your topic."
  },
  {
    number: "03",
    title: "Information Validation",
    description: "Retrieved information is validated to understand if it is relevant to the user query"
  },
  {
    number: "04",
    title: "Essay Generation",
    description: "A well-structured, fully cited essay is created and ready for your use."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From topic to essay in four simple steps. Our AI does the heavy lifting so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-llamayellow-600 to-llamayellow-100 z-0 -translate-x-1/2"></div>
              )}
              
              <div className="bg-background border border-muted rounded-xl p-8 shadow-lg relative z-10 h-full btn-3d">
                <div className="text-5xl font-display font-bold text-llamayellow-600 opacity-30 absolute -top-4 -left-2">
                  {step.number}
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-display font-semibold mb-6">Ready to experience it yourself?</h3>
          <Button 
            asChild
            className="btn-3d bg-llamayellow-600 hover:bg-llamayellow-700 text-black text-lg py-6 px-8"
          >
            <a href="https://app.llamaresearcher.com" target="_blank" rel="noopener noreferrer">
              Try LlamaResearcher Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
