"use client";

import { useEffect, useRef } from "react";

export function Background() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let animId: number;
    let mouseX = -1000;
    let mouseY = -1000;
    let smoothMouseX = -1000;
    let smoothMouseY = -1000;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const orbs = Array.from({ length: 5 }, (_, i) => ({
      phaseX: i * 1.7 + 0.3,
      phaseY: i * 2.1 + 0.8,
      speed: 0.12 + i * 0.04,
      size: 300 + i * 80,
      opacity: 0.035 - i * 0.003,
    }));

    let t = 0;

    const draw = () => {
      t += 0.003;

      // Smooth mouse following
      smoothMouseX += (mouseX - smoothMouseX) * 0.04;
      smoothMouseY += (mouseY - smoothMouseY) * 0.04;

      ctx.clearRect(0, 0, w, h);

      // Ambient orbs
      for (const orb of orbs) {
        const baseX = w * (0.25 + 0.5 * Math.sin(t * orb.speed + orb.phaseX));
        const baseY =
          h * (0.2 + 0.6 * Math.cos(t * orb.speed * 0.7 + orb.phaseY));

        // Subtle mouse influence — orbs drift toward cursor
        const dx = smoothMouseX - baseX;
        const dy = smoothMouseY - baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 800) * 40;

        const x = baseX + (dx / (dist || 1)) * influence;
        const y = baseY + (dy / (dist || 1)) * influence;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.size);
        gradient.addColorStop(0, `rgba(196, 149, 106, ${orb.opacity})`);
        gradient.addColorStop(0.5, `rgba(168, 120, 80, ${orb.opacity * 0.3})`);
        gradient.addColorStop(1, "rgba(168, 120, 80, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      // Cursor glow — very subtle warm light that follows the mouse
      if (smoothMouseX > -500) {
        const cursorGlow = ctx.createRadialGradient(
          smoothMouseX,
          smoothMouseY,
          0,
          smoothMouseX,
          smoothMouseY,
          250
        );
        cursorGlow.addColorStop(0, "rgba(196, 149, 106, 0.06)");
        cursorGlow.addColorStop(0.5, "rgba(196, 149, 106, 0.02)");
        cursorGlow.addColorStop(1, "rgba(196, 149, 106, 0)");
        ctx.fillStyle = cursorGlow;
        ctx.fillRect(0, 0, w, h);
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
