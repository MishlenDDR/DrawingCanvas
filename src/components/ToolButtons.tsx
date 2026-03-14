import "./ToolButtons.css";

type tools = "draw" | "clear" | null;

interface toolsProps {
  activeTool: tools;
  changingTool: (tool: tools) => void;
}
function Tools({ activeTool, changingTool }: toolsProps) {
  return (
    <div className="flex flex-row items-center gap-[10px]">
      <button
        onClick={() => changingTool(activeTool === "draw" ? null : "draw")}
        className={`start-drawing-button ${activeTool === "draw" ? "active" : ""}`}
      >
        <img className="icon" src="/public/DrawTool.png" alt="" />
      </button>

      <button
        onClick={() => changingTool(activeTool === "clear" ? null : "clear")}
        className={`clear-drawing-button ${activeTool === "clear" ? "active" : ""}`}
      >
        <img className="icon" src="/public/ClearTool.png" alt="" />
      </button>
    </div>
  );
}

export default Tools;
