import { useContext } from "react";
import { AppContext } from "../componants/AppContext";

export default function HomePage() {
  const { lang } = useContext(AppContext);

  return (
    <>
      {lang === "ar" ? (
        <h1 className="text-2xl font-bold text-center">!مرحبا بكم في بكاسة</h1>
      ) : (
        <h1 className="text-2xl font-bold text-center">Welcome to Bakasa!</h1>
      )}
    </>
  );
}
