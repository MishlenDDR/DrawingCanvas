import Tools from "./components/ToolButtons";
import CanvasField from "./components/Canvas";
import CustomCursor from "./components/CanvasCustomCurcor";
import { useState } from "react";

type tool = "draw" | "clear" | null;

function App() {
  const [active, setActive] = useState<tool>(null);
  return (
    <div className="flex items-center justify-center">
      <CustomCursor activeTool={active}></CustomCursor>
      <div className="flex flex-col gap-[5px]">
        <Tools activeTool={active} changingTool={setActive}></Tools>
        <CanvasField activeTool={active}></CanvasField>
      </div>
    </div>
  );
}

export default App;
