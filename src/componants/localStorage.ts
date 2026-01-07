import type { User, Category } from '../types';

export function loadUsers(): User[] {
  const localstorageUsers = window.localStorage.getItem('users');
  return localstorageUsers ? JSON.parse(localstorageUsers) : [];
}

export function loadCategory(): Category {
  const localstorageSelectedCategory = window.localStorage.getItem('category');
  return localstorageSelectedCategory ? JSON.parse(localstorageSelectedCategory) : { ar: 'سيارات', en: 'cars' };
}

export function saveUsers(users: User[]): void {
  window.localStorage.setItem('users', JSON.stringify(users));
}

export function saveCategory(Category: Category): void {
  window.localStorage.setItem('category', JSON.stringify(Category));
}
