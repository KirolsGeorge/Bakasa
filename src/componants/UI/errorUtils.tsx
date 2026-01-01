import type React from "react";

type ErrorType = "minimumUsers" | "userExists";
type Lang = "ar" | "en";

const errorMessage: Record<ErrorType, Record<Lang, string>> = {
  minimumUsers: {
    ar: "الحد الأدنى 3 لاعبين",
    en: "Minimum 3 players",
  },
  userExists: {
    ar: "الاسم موجود بالفعل",
    en: "Name already exists",
  },
};

export default function isError(
  type: ErrorType | null,
  lang: Lang
): React.ReactNode {
  if (!type) return null;
  return <span className="text-red-600">{errorMessage[type][lang]}</span>;
}
