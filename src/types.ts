export type Lang = 'ar' | 'en';

export type ErrorType = 'minimumUsers' | 'userExists';

export type User = {
  id: string;
  name: string;
};

export type Category = {
  en: string;
  ar: string;
};

export type Topic = {
  ar: string;
  en: string;
};

export type DataStructure = {
  name: { en: string; ar: string };
  items: { en: string; ar: string }[];
  image: string;
};

export type ScratchCardProps = {
  width: number;
  height: number;
  revealPercent?: number;
  user: string;
  index: number;
  max: number;
  selectedTopic: Topic;
  bikis: string;
};
