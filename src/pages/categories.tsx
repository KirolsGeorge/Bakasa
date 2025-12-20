// @ts-ignore
import CatItem from "../componants/catItem";
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
    <div>
      {typedData.categories.map((cat, index) => (
        <CatItem key={index} name={cat.name[lang as "ar" | "en"]} />
      ))}
    </div>
  );
}
