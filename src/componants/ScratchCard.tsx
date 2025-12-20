import { useEffect, useRef, useState } from "react"

type ScratchCardProps = {
    width: number
    height: number
    revealPercent?: number
    onProgress?: (percent: number) => void
}

export default function ScratchCard({
    width,
    height,
    revealPercent = 50,
    onProgress,
}: ScratchCardProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [revealed, setRevealed] = useState(false)
    const isDrawing = useRef(false)

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext("2d")!

        ctx.fillStyle = "#9ca3af" // gray overlay
        ctx.fillRect(0, 0, width, height)
    }, [width, height])

    const scratch = (x: number, y: number) => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext("2d")!

        ctx.globalCompositeOperation = "destination-out"
        ctx.beginPath()
        ctx.arc(x, y, 20, 0, Math.PI * 2)
        ctx.fill()
    }

    const calculateProgress = () => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext("2d")!
        const imageData = ctx.getImageData(0, 0, width, height).data

        let transparent = 0
        for (let i = 3; i < imageData.length; i += 4) {
            if (imageData[i] === 0) transparent++
        }

        const percent = (transparent / (width * height)) * 100
        onProgress?.(percent)

        if (percent >= revealPercent) setRevealed(true)
    }

    const handleMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing.current || revealed) return

        const rect = canvasRef.current!.getBoundingClientRect()
        scratch(e.clientX - rect.left, e.clientY - rect.top)
        calculateProgress()
    }

    return (
        <div
            style={{
                width,
                height,
                position: "relative",
                userSelect: "none",
            }}
        >
            {/* Hidden content */}
            <div
                className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
            >
                🎉 You Won $1,000 🎉
            </div>

            {!revealed && (
                <canvas
                    ref={canvasRef}
                    width={width}
                    height={height}
                    onMouseDown={() => (isDrawing.current = true)}
                    onMouseUp={() => (isDrawing.current = false)}
                    onMouseLeave={() => (isDrawing.current = false)}
                    onMouseMove={handleMove}
                    className="absolute inset-0 cursor-pointer"
                />
            )}
        </div>
    )
}
