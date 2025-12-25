import ScratchCard from "../componants/ScratchCard";

export default function RevealPage({ winner }: { winner: string }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <ScratchCard width={200} height={200} winner={winner} />
    </div>
  );
}
