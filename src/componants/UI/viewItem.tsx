import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

type ViewItemProps = {
  userName: string;
  onDelete: (userName: string) => void;
};

export default function ViewItem({ userName, onDelete }: ViewItemProps) {
  return (
    <div className="flex items-center justify-between bg-gray-800 w-full p-4 rounded-xl gap-2">
      <span className="text-white">{userName}</span>

      <button
        type="button"
        className="rounded-full size-8 flex items-center justify-center bg-linear-to-tr from-fuchsia-500 to-purple-800 text-white hover:opacity-90 active:opacity-80"
        onClick={() => onDelete(userName)}
      >
        <FontAwesomeIcon icon={faX} />
      </button>
    </div>
  );
}
