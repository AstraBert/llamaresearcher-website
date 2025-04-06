
import { useEffect, useRef } from "react";

interface ButtonEffectProps {
  children: React.ReactNode;
}

const ButtonEffect: React.FC<ButtonEffectProps> = ({ children }) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    
    const handleClick = () => {
      button.classList.add("animate-button-press");
      
      // Create ripple effect
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      
      // Position the ripple
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      
      // Center the ripple
      ripple.style.left = "50%";
      ripple.style.top = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      
      // Add ripple to button
      button.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
      
      // Remove animation class after animation completes
      setTimeout(() => {
        button.classList.remove("animate-button-press");
      }, 300);
    };
    
    button.addEventListener("click", handleClick);
    
    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);
  
  return (
    <div ref={buttonRef} className="relative overflow-hidden">
      {children}
      <style jsx>{`
        .ripple {
          position: absolute;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          pointer-events: none;
          transform-origin: center;
          animation: ripple-effect 0.6s ease-out;
          z-index: 0;
        }
        
        @keyframes ripple-effect {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ButtonEffect;
