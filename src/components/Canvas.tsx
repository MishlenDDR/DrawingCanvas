import { useRef, useState } from "react";
import "./Canvas.css";

type tools = "draw" | "clear" | null;

interface CanvasProps {
  activeTool: tools;
}

function Canvas({ activeTool }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e: React.MouseEvent) => {
    if (!activeTool) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !activeTool) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle =
      activeTool === "clear" ? "rgb(255, 255, 233)" : "rgba(127, 59, 195, 0.3)";

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className="canvas-container flex justify-center items-center">
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="canvas-field"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
    </div>
  );
}

export default Canvas;
