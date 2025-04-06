
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-llamayellow-600 to-llamapurple-600 rounded-2xl p-0.5 animate-float">
          <div className="bg-background rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Start Researching Smarter, Not Harder
                </h2>
                <p className="text-lg mb-6">
                  Experience the future of research with LlamaResearcher. Create well-researched, fully cited essays in seconds. Try it free for 30 days!
                </p>
                <Button 
                  asChild
                  className="btn-3d bg-llamayellow-600 hover:bg-llamayellow-700 text-black text-lg py-6 px-8"
                >
                  <a href="https://app.llamaresearcher.com" target="_blank" rel="noopener noreferrer">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-llamayellow-400 to-llamapurple-400 opacity-30 blur-xl rounded-lg"></div>
                <div className="relative flex flex-col gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                  <div className="bg-llamayellow-100 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Recent Topics Researched:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-llamayellow-600"></div>
                        The Impact of Artificial Intelligence on Education
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-llamayellow-600"></div>
                        Sustainable Urban Development Strategies
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-llamayellow-600"></div>
                        Mental Health Benefits of Mindfulness Practices
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-llamayellow-600"></div>
                        Emerging Renewable Energy Technologies
                      </li>
                    </ul>
                  </div>
                  <div className="text-center text-sm p-2 bg-llamapurple-100 text-llamapurple-700 rounded-lg">
                    <span className="font-semibold">No sign-up required! </span> 
                    Just enter your topic and start researching.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
