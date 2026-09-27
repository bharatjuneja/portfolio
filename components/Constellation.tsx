"use client";

import { useEffect, useRef } from "react";

export function Constellation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const stars: Star[] = [];
    const starCount = 90;
    const connectionDistance = 110;
    const mouseRadius = 160;
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };

    class Star {
      x = 0;
      y = 0;
      vx = 0;
      vy = 0;
      radius = 1;
      baseAlpha = 0.5;
      alpha = 0.5;
      hue = 212;

      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        if (initial) {
          this.radius = Math.random() * 1.5 + 0.8;
          this.baseAlpha = Math.random() * 0.5 + 0.3;
          this.alpha = this.baseAlpha;
          this.hue = Math.random() > 0.4 ? 212 : 260;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouseRadius && dist > 0) {
            const force = 1 - dist / mouseRadius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 3.5;
            this.y -= Math.sin(angle) * force * 3.5;
            this.alpha = Math.min(1, this.baseAlpha + force * 0.6);
          } else {
            this.alpha = this.baseAlpha;
          }
        } else {
          this.alpha = this.baseAlpha;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = `hsla(${this.hue}, 90%, 75%, ${this.alpha})`;
        context.shadowBlur = 8;
        context.shadowColor = `hsla(${this.hue}, 90%, 65%, ${this.alpha * 0.8})`;
        context.fill();
        context.restore();
      }
    }

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      if (stars.length === 0) {
        for (let i = 0; i < starCount; i++) stars.push(new Star());
        mouse.x = mouse.targetX = width / 2;
        mouse.y = mouse.targetY = height / 2;
      }
    };

    const onMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = event.clientX - rect.left;
      mouse.targetY = event.clientY - rect.top;
      mouse.active = mouse.targetY >= 0 && mouse.targetY <= rect.height;
    };

    const onLeave = () => {
      mouse.active = false;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        if (mouse.active) {
          const dx = mouse.x - stars[i].x;
          const dy = mouse.y - stars[i].y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouseRadius) {
            const lineAlpha = (1 - dist / mouseRadius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (mouse.active) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouseRadius);
        gradient.addColorStop(0, "rgba(56, 189, 248, 0.12)");
        gradient.addColorStop(0.5, "rgba(147, 51, 234, 0.05)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const star of stars) {
        star.update();
        star.draw(ctx);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      canvas.remove();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 h-full w-full" aria-hidden />;
}
