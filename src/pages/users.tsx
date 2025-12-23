import { useState, useRef } from "react";

import InputItem from "../componants/UI/inputItem";
import ViewItem from "../componants/UI/viewItem";

export default function UsersPage() {
  const [value, setValue] = useState<string>("");
  const [users, setUsers] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null!);
  let alreadyExists = false;

  function addUserHandler() {
    if (value.trim() === "") return;
    if (value.length > 3) {
      if (
        users.find((user) => user === value.toLocaleLowerCase().trim())
          ? true
          : false
      ) {
        alreadyExists = true;
        inputRef.current.value = "";
        inputRef.current.placeholder = "User already exists";
        return;
      }
      setUsers([...users, value]);
      inputRef.current.value = "";
    }
  }

  function deleteUserHandler(userName: string) {
    console.log(userName);
    const filteredUsers = users.filter((user) => user !== userName);
    setUsers(filteredUsers);
  }

  return (
    <main className="p-4 flex flex-col gap-3">
      {alreadyExists && (
        <span className="text-red-600">User already exists</span>
      )}
      {users.length < 3 && <span>Minimum players number is 3</span>}

      {users.map((user, index) => (
        <ViewItem key={index} userName={user} onDelete={deleteUserHandler} />
      ))}
      <InputItem
        value={value}
        users={users}
        setValue={setValue}
        ref={inputRef}
        onDelete={deleteUserHandler}
      />
      {users.length <= 10 && value.trim().length > 2 && (
        <button
          type="button"
          className={`border-none flex items-center justify-center bg-gray-800 w-full h-14 p-4 rounded-xl text-gray-300 hover:text-white transition`}
          onClick={addUserHandler}
        >
          + Add Item
        </button>
      )}
    </main>
  );
}
