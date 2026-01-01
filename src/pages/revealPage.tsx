import ScratchCard from "../componants/ScratchCard";

type user = {
  id: string;
  name: string;
};

type category = {
  cat_en: string;
  cat_ar: string;
};

export default function RevealPage({
  lang,
  users,
  selectedCategory,
}: {
  lang: string;
  users: user[];
  selectedCategory: category;
}) {
  localStorage.setItem("users", JSON.stringify(users));
  const winner: user = users[Math.floor(Math.random() * users.length)];

  console.log(selectedCategory);
  return (
    // <main className="flex flex-col items-center justify-center">
      <div className="carousel w-full overflow-hidden">
        {users.map((user, index) => (
          <div
            key={user.id}
            id={"slide" + (index + 1)}
            className="carousel-item relative"
          >
            <h2>
              {lang === "ar"
                ? `ادي الموبايل ل ${user.name}`
                : `Hand over the phone to ${user.name}`}
            </h2>
            <ScratchCard
              width={200}
              height={200}
              winner={
                user.name === winner.name
                  ? `${
                      lang === "ar"
                        ? `${user.name} انت البكس`
                        : "You are the biks"
                    } `
                  : `${
                      lang === "ar"
                        ? `${selectedCategory.cat_ar}`
                        : `${selectedCategory.cat_en}`
                    } `
              }
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={"#slide" + (index + 2)} className="btn btn-circle">
                ❮
              </a>
            </div>
          </div>
        ))}
      </div>
    // </main>
  );
}
