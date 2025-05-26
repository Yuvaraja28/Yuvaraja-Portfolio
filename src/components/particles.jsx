import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef(null);
  const nodes = [];
  const numNodes = 80; // Increased nodes slightly for a more dynamic network
  const maxConnectionDistance = 160; // Slightly increased distance

  // Node class
  class Node {
    constructor(x, y, size, speedX, speedY, brightness) {
      this.x = x;
      this.y = y;
      this.size = size; // Represents influence/data load
      this.speedX = speedX;
      this.speedY = speedY;
      this.brightness = brightness; // 0 (black) to 1 (white)
      this.life = 1; // Life factor for fading and evolution
      this.fadeSpeed = Math.random() * 0.004 + 0.0008; // Slightly faster fading
      this.connections = []; // Store connected nodes
    }

    draw(ctx) {
      const greyValue = Math.floor(this.brightness * 255);
      const color = `rgb(${greyValue}, ${greyValue}, ${greyValue})`;

      ctx.fillStyle = color;
      ctx.globalAlpha = this.life * 0.8; // Higher base opacity

      // Draw a radiating effect based on size/influence
      const gradient = ctx.createRadialGradient(
        this.x,
        this.y,
        0,
        this.x,
        this.y,
        this.size * 3
      ); // Larger gradient influence
      gradient.addColorStop(0, color);
      gradient.addColorStop(
        0.7,
        `rgba(${greyValue}, ${greyValue}, ${greyValue}, 0.2)`
      ); // Fade slower
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1; // Reset global alpha
    }

    update(canvas) {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life -= this.fadeSpeed;

      // Respawn or evolve when life is low
      if (this.life <= 0) {
        this.reset(canvas);
      } else if (this.life < 0.4 && this.size < 7) {
        // Grow more significantly before resetting
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
      this.size = Math.random() * 3 + 1.5; // Slightly larger base size
      this.speedX = Math.random() * 1.5 - 0.75; // Slightly faster speed
      this.speedY = Math.random() * 1.5 - 0.75; // Slightly faster speed
      this.brightness = Math.random() * 0.3 + 0.7; // Brighter shades (0.7 to 1)
      this.life = 1; // Reset life
      this.fadeSpeed = Math.random() * 0.004 + 0.0008;
      this.connections = []; // Clear connections on reset
    }
  }

  // Initialize Nodes
  const initNodes = (canvas) => {
    nodes.length = 0; // Clear existing nodes
    for (let i = 0; i < numNodes; i++) {
      const size = Math.random() * 3 + 1.5;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = Math.random() * 1.5 - 0.75;
      const speedY = Math.random() * 1.5 - 0.75;
      const brightness = Math.random() * 0.3 + 0.7; // Brighter shades
      nodes.push(new Node(x, y, size, speedX, speedY, brightness));
    }
  };

  // Animation loop
  const animate = (ctx, canvas) => {
    ctx.fillStyle = "#000000"; // True black background
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Draw background

    // Update and draw connections
    ctx.lineWidth = 0.6; // Thicker lines

    for (let i = 0; i < nodes.length; i++) {
      nodes[i].connections = []; // Clear connections for current frame
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxConnectionDistance) {
          // Draw a pulsating monochrome line with higher opacity
          const opacity =
            ((maxConnectionDistance - distance) / maxConnectionDistance) *
            Math.min(nodes[i].life, nodes[j].life) *
            0.7; // Higher opacity
          const connectionBrightness =
            Math.min(nodes[i].brightness, nodes[j].brightness) * 0.8 + 0.2; // Ensure lines are not too dark
          const greyValue = Math.floor(connectionBrightness * 255);
          ctx.strokeStyle = `rgba(${greyValue}, ${greyValue}, ${greyValue}, ${opacity})`;

          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();

          // Store connection
          nodes[i].connections.push(nodes[j]);
          nodes[j].connections.push(nodes[i]);
        }
      }
    }

    // Update and draw nodes
    nodes.forEach((node) => {
      node.update(canvas);
      node.draw(ctx);
    });

    requestAnimationFrame(() => animate(ctx, canvas));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initNodes(canvas);
    animate(ctx, canvas);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.height;
      initNodes(canvas); // Re-initialize nodes on resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
