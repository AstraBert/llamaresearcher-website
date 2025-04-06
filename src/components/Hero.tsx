
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                <span className="gradient-text">Topic to Essay</span> in Seconds
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                AI-powered research companion that deep searches the web, validates its answers, and produces essays on any topic.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                className="btn-3d bg-llamayellow-600 hover:bg-llamayellow-700 text-black text-lg py-6 px-8"
              >
                <a href="https://app.llamaresearcher.com" target="_blank" rel="noopener noreferrer">
                  Try For Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="btn-3d text-lg py-6 px-8 border-2 border-llamapurple-600"
              >
                <a href="#how-it-works">
                  Learn How It Works
                </a>
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>✨ No registration needed • Completely free for 30 days ✨</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-llamayellow-600 to-llamapurple-600 rounded-xl blur animate-glow opacity-75"></div>
            <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="bg-muted p-4 rounded-lg mb-4">
                <div className="flex gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-llamayellow-100 p-3 rounded-lg">
                  <p className="text-sm font-medium">Topic: Climate Change Solutions</p>
                </div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-11/12"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-10/12"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-9/12"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-11/12"></div>
                <div className="flex justify-center mt-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-llamayellow-600 text-black text-xs font-medium">
                    Generating essay... 78%
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

export default Hero;
