import { useState } from 'react';
import type { User } from '../types';

import { loadUsers } from '../componants/localStorage';

export function useUserState() {
  const [users, setUsers] = useState<User[]>(() => loadUsers());

  function addUser(user: User) {
    setUsers((prev) => [...prev, user]);
  }

  function updateUsers(users: User[]) {
    setUsers(users);
  }
  function removeUser(id: string) {
    setUsers((prev) => prev.filter((user) => user.id != id));
  }

  return { users, addUser, updateUsers, removeUser };
}
