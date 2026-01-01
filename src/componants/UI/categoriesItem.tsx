import { Link } from "react-router-dom";

export default function CategoriesItem(props: {
  name: string;
  cat_en: string;
  cat_ar: string;
  img: string;
  onClick: (cat: { cat_en: string; cat_ar: string }) => void;
}) {
  return (
    <div className="card bg-base-100 image-full w-50 shadow-sm overflow-hidden flex justify-center items-center relative">
      <img src={`/categories_images/${props.img}`} alt={props.cat_en} />
      <Link
        className="btn btn-primary bg-transparent w-full h-full cursor-pointer border-0 absolute z-20"
        to={`/users`}
        onClick={() =>
          props.onClick({ cat_en: props.cat_en, cat_ar: props.cat_ar })
        }
      />
    </div>
  );
}
