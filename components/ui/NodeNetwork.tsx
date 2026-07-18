// components/ui/NodeNetwork.tsx
import React, { useEffect, useRef } from 'react';

interface NodeNetworkProps {
  color?: string;
  nodeCount?: number;
  className?: string;
}

// Cursor-reactive node network, used as the hero's signature ambient motif.
// Disabled entirely on touch devices and when prefers-reduced-motion is set,
// since it's pure decoration with no informational content.
const NodeNetwork: React.FC<NodeNetworkProps> = ({
  color = '#5fcb93',
  nodeCount = 26,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationFrame: number;

    const mouse = { x: -9999, y: -9999 };

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
    }

    const nodes: Node[] = [];

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const frame = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 140) {
          n.x -= dx * 0.0025;
          n.y -= dy * 0.0025;
        }
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            ctx.globalAlpha = (1 - dist / 150) * 0.35;
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 0.55;
      for (const n of nodes) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animationFrame = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [color, nodeCount]);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default NodeNetwork;
