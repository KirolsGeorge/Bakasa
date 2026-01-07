import { useState } from 'react';
import type { User, Category, Topic } from '../types';
import { Topics } from '../componants/topics';

export function useDataStates() {
  const [bikis, setBikis] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<Topic>({ ar: '', en: '' });

  function generateRandomNumber(length: number): number {
    return Math.floor(Math.random() * length);
  }

  function defineTopicANDBikis(users: User[], category: Category) {
    if (users.length < 3) return;
    if (!category?.en) return;
    console.log(users.length, category);
    const data = new Topics();
    const topics: Topic[] = data.categories.find((c) => c.name.en === category.en)?.items || [];
    const choosenTopicNumber = topics && generateRandomNumber(topics.length);
    setSelectedTopic(topics[choosenTopicNumber]);

    setBikis(users[generateRandomNumber(users.length)].name);
  }

  return { bikis, selectedTopic, defineTopicANDBikis };
}
