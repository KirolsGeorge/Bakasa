import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type ScratchCardProps = {
  width: number;
  height: number;
  revealPercent?: number;
  winner: string;
};

export default function ScratchCard({
  width,
  height,
  revealPercent = 35,
  winner,
}: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#9ca3af";
    ctx.fillRect(0, 0, width, height);
  }, [width, height]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
  };

  const calculateProgress = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const { data } = ctx.getImageData(0, 0, width, height);

    let transparent = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] === 0) transparent++;
    }

    const percent = (transparent / (width * height)) * 100;
    if (percent >= revealPercent) setRevealed(true);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (revealed) return;
    isDrawing.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawing.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
    calculateProgress();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || revealed) return;

    const rect = canvasRef.current!.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div style={{ width, height, position: "relative", userSelect: "none" }}>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-center">
          The Winner is:
          <br />
          {winner}
        </div>

        {!revealed && (
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={() => (isDrawing.current = false)}
            className="absolute inset-0 rounded-3xl cursor-pointer touch-none"
          />
        )}
      </div>

      {revealed && (
        <Link to="/categories">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Start New Game
          </button>
        </Link>
      )}
    </div>
  );
}
