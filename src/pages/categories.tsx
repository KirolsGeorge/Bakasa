import CategoriesItem from '../componants/UI/categoriesItem';
import { Topics } from '../componants/topics';

import type { DataStructure } from '../types';
import { useLanguage } from '../stateManagementHooks/LanguageContext';

export default function Categories() {
  const { language } = useLanguage();

  const data = new Topics();

  return (
    <div className="flex flex-wrap gap-3 justify-center items-center pb-3">
      <section className="flex flex-wrap gap-3 justify-center items-center md:w-3/4">
        {data.categories.map((cat: DataStructure) => (
          <CategoriesItem key={cat.name.en} name={cat.name[language]} category={cat.name} img={cat.image} />
        ))}
      </section>
    </div>
  );
}
