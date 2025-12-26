import { useState } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type User = {
  id: string;
  name: string;
};

export default function UsersPage({
  lang,
  setWinner,
}: {
  lang: string;
  setWinner: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [users, setUsers] = useState<User[]>([]);
  const [inputValue, setInputValue] = useState("");
  const value = inputValue.trim();

  const userExists =
    value.length > 0 &&
    users.some((u) => u.name.toLowerCase() === value.trim().toLowerCase());

  function addUserHandler() {
    if (value.length < 3 || userExists) return;

    const id = crypto.randomUUID?.() ?? Date.now().toString();

    setUsers((prev) => [...prev, { id, name: value }]);
    setInputValue("");
  }

  function deleteUserHandler(id: string) {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  }

  return (
    <main className="p-2 flex flex-col gap-2 flex-1">
      <section className="rounded-xl flex flex-col gap-2">
        {userExists && (
          <span className="text-red-600">
            {lang === "ar" ? "المستخدم موجود بالفعل" : "User already exists"}
          </span>
        )}

        {users.length <= 2 && (
          <span className="text-red-600">
            {lang === "ar" ? "الحد الأدنى 3 لاعبين" : "Minimum 3 players"}
          </span>
        )}

        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-gray-800 w-full p-3 rounded-xl gap-2"
          >
            {user.name}
            <button
              key={user.id}
              type="button"
              className="rounded-full size-8 flex items-center justify-center bg-linear-to-tr from-fuchsia-500 to-purple-800 text-white hover:opacity-90 active:opacity-80"
              onClick={() => deleteUserHandler(user.id)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        ))}

        {users.length < 10 && (
          <input
            className="bg-gray-800 p-3 rounded-xl text-white"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={lang === "ar" ? "اسم اللاعب" : "Player name"}
          />
        )}
      </section>
      {users.length < 10 && (
        <button
          type="button"
          className={`border-none flex items-center justify-center bg-gray-800 w-full p-3 rounded-xl text-gray-300 hover:text-white transition`}
          onClick={addUserHandler}
        >
          {lang === "ar" ? "لاعب جديد" : "New Player"}
        </button>
      )}
      <div className="flex flex-1 items-end justify-end">
        {users.length >= 3 && (
          <Link
            to="/RevealPage"
            className={`border-none flex items-center justify-center bg-gray-800 w-full p-3 rounded-xl text-gray-300 hover:text-white transition`}
            onClick={() =>
              setWinner(users[Math.floor(Math.random() * users.length)].name)
            }
          >
            {lang === "ar" ? "يلا بينا" : "Start Game"}
          </Link>
        )}
      </div>
    </main>
  );
}
