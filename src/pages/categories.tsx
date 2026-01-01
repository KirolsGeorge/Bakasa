import CategoriesItem from "../componants/UI/categoriesItem";
import { Topics } from "../componants/topics";

type Category = { cat_en: string; cat_ar: string };
type DataStructure = {
  name: { en: string; ar: string };
  items: { en: string; ar: string }[];
  image: string;
};

export default function Categories({
  lang,
  setCategorie,
}: {
  lang: string;
  setCategorie: React.Dispatch<
    React.SetStateAction<{ cat_en: string; cat_ar: string }>
  >;
}) {
  function setGlobalCategorie(category: Category) {
    setCategorie(category);
    localStorage.setItem("category", JSON.stringify(category));
  }

  const data = new Topics();

  return (
    <div className="flex flex-wrap gap-3 justify-center items-center pb-3">
      <section className="flex flex-wrap gap-3 justify-center items-center md:w-3/4">
        {data.categories.map((cat: DataStructure) => (
          <CategoriesItem
            key={cat.name.en}
            name={cat.name[lang as "ar" | "en"]}
            cat_en={cat.name.en}
            cat_ar={cat.name.ar}
            img={cat.image}
            onClick={setGlobalCategorie}
          />
        ))}
      </section>
    </div>
  );
}
