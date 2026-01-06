import { Link, useOutletContext } from 'react-router-dom';

import type { Category } from '../../types';

type AppOutletContext = {
  categoryState: { updateCategory: (category: Category) => void };
};

export default function CategoriesItem(props: { name: string; category: Category; img: string }) {
  const { categoryState } = useOutletContext<AppOutletContext>();
  const { updateCategory } = categoryState;

  return (
    <div className="card bg-base-100 image-full w-50 shadow-sm overflow-hidden flex justify-center items-center relative">
      <img src={`/categories_images/${props.img}`} alt={props.category.en} />
      <Link
        className="btn btn-primary bg-transparent w-full h-full cursor-pointer border-0 absolute z-20"
        to={`/users`}
        onClick={() => updateCategory(props.category)}
      />
    </div>
  );
}
