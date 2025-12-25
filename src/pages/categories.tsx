import CategoriesItem from "../componants/UI/categoriesItem";
import data from "../componants/topics";

type categoriesProps = {
  lang: string;
};

export default function Categories({ lang }: categoriesProps) {
  data.categories.map((cat) => console.log(cat.image));
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      {data.categories.map((cat) => (
        <CategoriesItem
          key={cat.name.en}
          name={cat.name[lang as "ar" | "en"]}
          cat={cat.name.en}
          img={cat.image}
        />
      ))}
    </div>
  );
}
