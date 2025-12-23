import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputItemProps = {
  users: string[];
  value: string;
  setValue: (value: string) => void;
  ref: React.RefObject<HTMLInputElement>;
  onDelete: (userName: string) => void;
};

export default function InputItem({
  value,
  users,
  setValue,
  ref,
  onDelete,
}: InputItemProps) {
  console.log(users);
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return (
    <div className="flex items-center justify-between bg-gray-800 w-full p-4 rounded-xl gap-2">
      <input
        type="text"
        className="grow bg-transparent text-white placeholder:text-gray-500 focus-visible:outline-none"
        placeholder="Type here"
        onChange={onChangeHandler}
        ref={ref}
      />

      {users.length > 2 && (
        <button
          type="button"
          className="rounded-full size-8 flex items-center justify-center bg-linear-to-tr from-fuchsia-500 to-purple-800 text-white hover:opacity-90 active:opacity-80"
          onClick={() => onDelete(value)}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
      )}
    </div>
  );
}
