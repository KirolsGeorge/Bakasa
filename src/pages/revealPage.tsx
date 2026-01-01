import ScratchCard from "../componants/ScratchCard";
import { Topics } from "../componants/topics";

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
  lang: "ar" | "en";
  users: user[];
  selectedCategory: category;
}) {
  function generateRandomNumber(length: number): number {
    return Math.floor(Math.random() * length);
  }

  const data = new Topics();
  const winner: user = users[generateRandomNumber(users.length)];
  const choosenTopicNumber = generateRandomNumber(
    data.categories.find((c) => c.name.en === selectedCategory.cat_en)?.items
      .length!
  );

  const selectedTopic = data.categories.find(
    (c) => c.name.en === selectedCategory.cat_en
  )?.items[choosenTopicNumber];

  console.log(selectedTopic, winner);
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <div className="carousel w-full touch-none">
        {users.map((user, index) => (
          <div
            key={user.id}
            id={"slide" + (index + 1)}
            className="carousel-item relative w-full"
          >
            <ScratchCard
              width={200}
              height={200}
              winner={
                user.name === winner.name
                  ? `${lang === "ar" ? `انت البكس` : "You are the biks"} `
                  : `${
                      lang === "ar"
                        ? `${selectedTopic!.ar}`
                        : `${selectedTopic!.en}`
                    } `
              }
              user={user.name}
              lang={lang}
              index={index}
              max={users.length}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
