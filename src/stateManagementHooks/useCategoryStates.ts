import { useState } from 'react';

import type { Category } from '../types';

import { loadCategory } from '../componants/localStorage';

export function useCategoryStates() {
  const [category, setCategory] = useState<Category>(() => loadCategory());

  function updateCategory(category: Category) {
    setCategory(category);
  }

  function resetCategory() {
    setCategory({ en: '', ar: '' });
  }

  return { category, updateCategory, resetCategory };
}
