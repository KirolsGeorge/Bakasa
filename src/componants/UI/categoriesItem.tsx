import { Link } from "react-router-dom";

export default function CategoriesItem(props: {
  name: string;
  cat: string;
  img: string;
}) {
  return (
    <div className="card bg-base-100 image-full w-50 shadow-sm overflow-hidden flex justify-center items-center relative">
      <img src={`/categories_images/${props.img}`} alt={props.cat} />
      <Link
        className="btn btn-primary bg-transparent w-full h-full cursor-pointer border-0 absolute z-20"
        to={`/users`}
      />
    </div>
  );
}
