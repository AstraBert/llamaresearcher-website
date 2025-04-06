
import { useEffect, useRef } from "react";

const Logo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = 80;
    canvas.height = 80;
    
    // Draw llama silhouette
    ctx.fillStyle = "#FFC107";
    
    // Draw basic llama shape
    ctx.beginPath();
    ctx.moveTo(20, 60); // bottom left
    ctx.lineTo(25, 30); // neck left
    ctx.lineTo(35, 15); // head top left
    ctx.lineTo(45, 10); // head top
    ctx.lineTo(55, 15); // head top right
    ctx.lineTo(60, 20); // ear right
    ctx.lineTo(58, 25); // ear bottom
    ctx.lineTo(60, 40); // neck right
    ctx.lineTo(60, 60); // bottom right
    ctx.closePath();
    ctx.fill();
    
    // Add some details
    ctx.fillStyle = "#7966E3"; // purple color for accent
    
    // Eye
    ctx.beginPath();
    ctx.arc(45, 25, 3, 0, Math.PI * 2);
    ctx.fill();
    
    // Simple decoration
    ctx.beginPath();
    ctx.moveTo(30, 40);
    ctx.lineTo(40, 45);
    ctx.lineTo(50, 43);
    ctx.lineTo(55, 48);
    ctx.strokeStyle = "#7966E3";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
  }, []);
  
  return <canvas ref={canvasRef} className="h-8 w-8" />;
};

export default Logo;
