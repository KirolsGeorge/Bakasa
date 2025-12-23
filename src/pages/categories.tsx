// @ts-ignore
import CategoriesItem from "../componants/UI/categoriesItem";
// @ts-ignore
import data from "../topics";
import { useContext } from "react";
import { AppContext } from "../componants/Context";

interface Category {
  name: {
    en: string;
    ar: string;
  };
  questions: any[];
}

interface Data {
  categories: Category[];
}

const typedData = data as Data;

export default function Categories() {
  const { lang } = useContext(AppContext);
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      {typedData.categories.map((cat) => (
        <CategoriesItem
          key={cat.name[lang as "en"]}
          name={cat.name[lang as "ar" | "en"]}
          cat={cat.name["en"]}
        />
      ))}
    </div>
  );
}
