import { useEffect, useRef } from "react";
import "./CanvasCutomCursor.css";

type tools = "draw" | "clear" | null;

interface CanvasProps {
  activeTool: tools;
}

const CustomCursor = ({ activeTool }: CanvasProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    cursor.classList.remove("cursor-draw", "cursor-clear");

    if (activeTool === "clear") {
      cursor.classList.add("cursor-clear");
    } else if (activeTool === "draw") {
      cursor.classList.add("cursor-draw");
    }
  }, [activeTool]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const canvasHover = document.querySelectorAll(".canvas-container");

    const moveCursor = (e: MouseEvent) => {
      if (!cursor) return;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", moveCursor);

    canvasHover.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (!cursor) return;
        cursor.style.opacity = "1";
        document.body.style.cursor = "none";
      });

      el.addEventListener("mouseleave", () => {
        if (!cursor) return;
        cursor.style.opacity = "0";
        document.body.style.cursor = "default";
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      id="cursor"
      ref={cursorRef}
      className="fixed pointer-events-none opacity-0"
    ></div>
  );
};

export default CustomCursor;
