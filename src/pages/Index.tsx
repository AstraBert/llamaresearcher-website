
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Add 3D effect for buttons
  useEffect(() => {
    const addButtonEffects = () => {
      const buttons = document.querySelectorAll('.btn-3d');
      
      buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
          button.classList.add('active');
        });
        
        button.addEventListener('mouseup', () => {
          button.classList.remove('active');
        });
        
        button.addEventListener('mouseleave', () => {
          button.classList.remove('active');
        });
      });
    };
    
    addButtonEffects();
    
    return () => {
      const buttons = document.querySelectorAll('.btn-3d');
      buttons.forEach(button => {
        button.removeEventListener('mousedown', () => {});
        button.removeEventListener('mouseup', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
