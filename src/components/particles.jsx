import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const nodes = [];
  const numNodes = 80;
  const maxConnectionDistance = 160;

  // Node class
  class Node {
    constructor(x, y, size, speedX, speedY, brightness) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
      this.brightness = brightness;
      this.life = 1;
      this.fadeSpeed = Math.random() * 0.004 + 0.0008;
      this.connections = [];
    }

    draw(ctx) {
      const greyValue = Math.floor(this.brightness * 255);
      const color = `rgb(${greyValue}, ${greyValue}, ${greyValue})`;

      ctx.fillStyle = color;
      ctx.globalAlpha = this.life * 0.8;

      const gradient = ctx.createRadialGradient(
        this.x,
        this.y,
        0,
        this.x,
        this.y,
        this.size * 3
      );
      gradient.addColorStop(0, color);
      gradient.addColorStop(
        0.7,
        `rgba(${greyValue}, ${greyValue}, ${greyValue}, 0.2)`
      );
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;
    }

    update(canvas) {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life -= this.fadeSpeed;

      if (this.life <= 0) {
        this.reset(canvas);
      } else if (this.life < 0.4 && this.size < 7) {
        this.size += 0.1;
      }

      // Bounce off edges
      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.speedX = -this.speedX;
      }
      if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.speedY = -this.speedY;
      }
    }

    reset(canvas) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1.5;
      this.speedX = Math.random() * 1.5 - 0.75;
      this.speedY = Math.random() * 1.5 - 0.75;
      this.brightness = Math.random() * 0.3 + 0.7;
      this.life = 1;
      this.fadeSpeed = Math.random() * 0.004 + 0.0008;
      this.connections = [];
    }
  }

  // Initialize Nodes
  const initNodes = (canvas) => {
    nodes.length = 0;
    for (let i = 0; i < numNodes; i++) {
      const size = Math.random() * 3 + 1.5;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = Math.random() * 1.5 - 0.75;
      const speedY = Math.random() * 1.5 - 0.75;
      const brightness = Math.random() * 0.3 + 0.7;
      nodes.push(new Node(x, y, size, speedX, speedY, brightness));
    }
  };

  // Animation loop
  const animate = (ctx, canvas) => {
    if (!canvas || !ctx) return;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 0.6;

    for (let i = 0; i < nodes.length; i++) {
      nodes[i].connections = [];
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxConnectionDistance) {
          const opacity =
            ((maxConnectionDistance - distance) / maxConnectionDistance) *
            Math.min(nodes[i].life, nodes[j].life) *
            0.7;
          const connectionBrightness =
            Math.min(nodes[i].brightness, nodes[j].brightness) * 0.8 + 0.2;
          const greyValue = Math.floor(connectionBrightness * 255);
          ctx.strokeStyle = `rgba(${greyValue}, ${greyValue}, ${greyValue}, ${opacity})`;

          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();

          nodes[i].connections.push(nodes[j]);
          nodes[j].connections.push(nodes[i]);
        }
      }
    }

    nodes.forEach((node) => {
      node.update(canvas);
      node.draw(ctx);
    });

    animationRef.current = requestAnimationFrame(() => animate(ctx, canvas));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    initNodes(canvas);
    animate(ctx, canvas);

    // Handle window resize - FIXED: was window.height instead of window.innerHeight
    const handleResize = () => {
      // Cancel current animation frame to prevent multiple loops
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      updateCanvasSize();
      initNodes(canvas);
      animate(ctx, canvas);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // Clean up animation frame on unmount
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
