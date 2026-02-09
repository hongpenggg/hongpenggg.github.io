import React, { useRef, useEffect, useState } from 'react';

interface StarBackgroundProps {
  isDarkMode: boolean;
}

interface PlanetData {
  id: number;
  name: string;
  fact: string;
  color: string;
  size: string;
  top: string;
  left: string;
  animationDelay: string;
  gradient: string;
}

const PLANETS: PlanetData[] = [
  {
    id: 1,
    name: "Nebula Prime",
    fact: "A gas giant composed primarily of recursive code.",
    color: "from-purple-500 to-indigo-600",
    size: "w-24 h-24",
    top: "25%",
    left: "10%",
    animationDelay: "0s",
    gradient: "bg-gradient-to-br"
  },
  {
    id: 2,
    name: "Cyberion",
    fact: "The silicon-based home of AI constructs.",
    color: "from-blue-400 to-cyan-300",
    size: "w-32 h-32",
    top: "70%",
    left: "85%",
    animationDelay: "2s",
    gradient: "bg-gradient-to-tr"
  },
  {
    id: 3,
    name: "Pixelara",
    fact: "Known for its perfectly rendered landscapes.",
    color: "from-pink-500 to-rose-400",
    size: "w-16 h-16",
    top: "60%",
    left: "15%",
    animationDelay: "4s",
    gradient: "bg-gradient-to-bl"
  }
];

const StarBackground: React.FC<StarBackgroundProps> = ({ isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePlanet, setActivePlanet] = useState<number | null>(null);

  // Star Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const mouse = { x: -1000, y: -1000 };

    const STAR_COUNT = 150;
    const CONNECTION_DISTANCE = 100;
    const MOUSE_INFLUENCE_RADIUS = 200;

    class Star {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      baseAlpha: number;
      alpha: number;
      twinkleSpeed: number;
      
      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 0.5;
        this.density = (Math.random() * 10) + 2;
        
        // Colors
        const colors = isDarkMode 
          ? ['255, 255, 255', '165, 243, 252', '224, 242, 254'] 
          : ['51, 65, 85', '100, 116, 139', '148, 163, 184'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.baseAlpha = Math.random() * 0.5 + 0.3;
        this.alpha = this.baseAlpha;
        this.twinkleSpeed = Math.random() * 0.05 + 0.01;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // Mouse Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Movement based on mouse
        const maxDistance = MOUSE_INFLUENCE_RADIUS;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = (dx / distance) * force * this.density;
        const directionY = (dy / distance) * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
          // Twinkle effect on hover
          this.alpha = Math.min(1, this.alpha + 0.05);
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 20;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 20;
          }
          // Natural twinkle
          this.alpha += Math.sin(Date.now() * this.twinkleSpeed) * 0.01;
          // Clamp alpha
          if(this.alpha < 0.1) this.alpha = 0.1;
          if(this.alpha > 0.8) this.alpha = 0.8;
        }
      }
    }

    const init = () => {
      stars = [];
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(new Star(window.innerWidth, window.innerHeight));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.draw();
        star.update();
      });

      // Draw connections
      for (let a = 0; a < stars.length; a++) {
        for (let b = a; b < stars.length; b++) {
          const dx = stars[a].x - stars[b].x;
          const dy = stars[a].y - stars[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = 1 - (distance / CONNECTION_DISTANCE);
            ctx.strokeStyle = isDarkMode 
              ? `rgba(165, 243, 252, ${opacity * 0.2})` 
              : `rgba(71, 85, 105, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(stars[a].x, stars[a].y);
            ctx.lineTo(stars[b].x, stars[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0">
       {/* Background Gradient */}
      <div 
        className={`absolute inset-0 transition-colors duration-700 ease-in-out pointer-events-none
          ${isDarkMode 
            ? 'bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e1b4b]' 
            : 'bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-50'
          }`}
      ></div>
      
      {/* Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Floating Interactive Planets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PLANETS.map((planet) => (
          <div
            key={planet.id}
            className={`absolute pointer-events-auto cursor-pointer animate-float group transition-all duration-500`}
            style={{ 
              top: planet.top, 
              left: planet.left,
              animationDelay: planet.animationDelay
            }}
            onClick={() => setActivePlanet(activePlanet === planet.id ? null : planet.id)}
            onMouseLeave={() => setActivePlanet(null)}
          >
            {/* Tooltip */}
            <div className={`absolute -top-24 left-1/2 -translate-x-1/2 w-48 p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 z-50
              ${activePlanet === planet.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
              ${isDarkMode ? 'bg-slate-900/80 text-white' : 'bg-white/80 text-slate-900'}
            `}>
              <h4 className="font-bold text-sm mb-1">{planet.name}</h4>
              <p className="text-xs opacity-80 leading-tight">{planet.fact}</p>
              {/* Tooltip Arrow */}
              <div className={`absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r border-b border-white/20
                 ${isDarkMode ? 'bg-slate-900/80' : 'bg-white/80'}
              `}></div>
            </div>

            {/* Planet Body */}
            <div 
              className={`relative rounded-full ${planet.size} ${planet.gradient} ${planet.color} opacity-80 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 group-hover:blur-sm`}
            >
              {/* Inner ring/texture simulation */}
              <div className="absolute inset-2 rounded-full border border-white/20 opacity-30 group-hover:rotate-180 transition-transform duration-[10s] ease-linear"></div>
            </div>
            
            {/* Glow Effect */}
            <div className={`absolute inset-0 ${planet.size} rounded-full ${planet.gradient} ${planet.color} blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarBackground;
