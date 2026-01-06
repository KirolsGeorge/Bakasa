import { useState } from 'react';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useOutletContext } from 'react-router-dom';

import isError from '../componants/UI/errorUtils';

import type { User } from '../types';
import { useLanguage } from '../stateManagementHooks/LanguageContext';

type AppOutletContext = {
  userState: {
    users: User[];
    addUser: (user: User) => void;
    removeUser: (id: string) => void;
  };
};

export default function UsersPage() {
  const { userState } = useOutletContext<AppOutletContext>();
  const { users, addUser, removeUser } = userState;
  const { language } = useLanguage();

  const [inputValue, setInputValue] = useState('');
  const value = inputValue.trim();

  const userExists = value.length > 0 && users.some((u) => u.name.toLowerCase() === value.trim().toLowerCase());

  const MinimumUsers = users.length >= 2 && !userExists && value.length > 0;

  function addUserHandler() {
    if (value.length < 3 || userExists) return;

    const id = crypto.randomUUID?.() ?? Date.now().toString();

    addUser({ id, name: value });

    setInputValue('');
  }

  function deleteUserHandler(id: string) {
    removeUser(id);
  }

  return (
    <div className="flex items-center justify-center felx-1">
      <main className="p-2 flex flex-col gap-2 flex-1 md:max-w-3/4">
        <section className="rounded-xl flex flex-col gap-2">
          {userExists && isError('userExists', language)}
          {users.length <= 2 && isError('minimumUsers', language)}

          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between bg-gray-800 w-full p-3 rounded-xl gap-2">
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
              placeholder={language === 'ar' ? 'اسم اللاعب' : 'Player name'}
            />
          )}
        </section>
        {users.length < 10 && (
          <button
            type="button"
            className="border-none flex items-center justify-center bg-fuchsia-700 w-full p-3 rounded-xl text-black font-bold hover:text-white transition cursor-pointer"
            onClick={addUserHandler}
          >
            {language === 'ar' ? 'لاعب جديد' : 'New Player'}
          </button>
        )}

        {(MinimumUsers || users.length >= 3) && (
          <Link
            to="/RevealPage"
            className="border-none flex items-center justify-center bg-blue-400 w-full p-3 rounded-xl text-gray-300 hover:text-white transition cursor-pointer"
            onClick={() => {
              addUserHandler();
            }}
          >
            {language === 'ar' ? 'يلا بينا' : 'Start Game'}
          </Link>
        )}
      </main>
    </div>
  );
}
