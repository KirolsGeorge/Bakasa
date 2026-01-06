import { Outlet } from 'react-router-dom';
import Header from './componants/UI/Header';
import { useEffect } from 'react';

import { saveUsers, saveCategory } from './componants/localStorage';
import { useUserState } from './stateManagementHooks/useUserStates';
import { useCategoryStates } from './stateManagementHooks/useCategoryStates';
import { useDataStates } from './stateManagementHooks/useDataStates';
import { LanguageProvider } from './stateManagementHooks/LanguageContext';

export default function AppLayout() {
  const userState = useUserState();
  const { users } = userState;

  const categoryState = useCategoryStates();
  const { category, resetCategory } = categoryState;

  const dataStates = useDataStates();
  const { defineTopicANDBikis } = dataStates;

  useEffect(() => {
    saveUsers(users);
    defineTopicANDBikis(users, category);
    resetCategory;
  }, [users]);

  useEffect(() => {
    saveCategory(category);
    defineTopicANDBikis(users, category);
    resetCategory;
  }, [category]);

  return (
    <LanguageProvider>
      <Header />
      <Outlet
        context={{
          userState,
          categoryState,
          dataStates,
        }}
      />
    </LanguageProvider>
  );
}
