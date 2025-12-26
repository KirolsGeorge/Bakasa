import CategoriesItem from "../componants/UI/categoriesItem";
import data from "../componants/topics";

export default function Categories({ lang }: { lang: string }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center pb-3">
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
