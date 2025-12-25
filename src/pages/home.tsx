import { Link } from "react-router-dom";

type HomePageProps = {
  lang: string;
};

export default function HomePage({ lang }: HomePageProps) {
  return (
    <main className="flex flex-col items-center justify-center gap-5 flex-1">
      {lang === "ar" ? (
        <h1 className="font-bold text-center">اهلا يا بكس منك ليه</h1>
      ) : (
        <h1 className="font-bold text-center">Welcome to Bakasa!</h1>
      )}
      <Link to="/categories" className="btn btn-primary mx-auto">
        {lang === "ar" ? (
          <h1 className="font-bold text-center">يلانبدأ </h1>
        ) : (
          <h1 className="font-bold text-center">Start</h1>
        )}
      </Link>
    </main>
  );
}
