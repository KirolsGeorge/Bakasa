import { useState } from 'react';
import type { User, Category, Topic } from '../types';
import { Topics } from '../componants/topics';

export function useDataStates() {
  const [bikis, setBikis] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<Topic>({ ar: '', en: '' });

  function generateRandomNumber(length: number): number {
    const number = length < 3 ? 3 : length;
    return Math.floor(Math.random() * number);
  }

  function defineTopicANDBikis(users: User[], category: Category) {
    if (users.length < 3) return;

    const data = new Topics();
    const topics = data.categories.find((c) => c.name.en === category.en)?.items ?? [];

    if (topics.length === 0) return;

    const topicIndex = generateRandomNumber(topics.length);
    const userIndex = generateRandomNumber(users.length);

    setSelectedTopic(topics[topicIndex]);
    setBikis(users[userIndex].name);
  }

  return { bikis, selectedTopic, defineTopicANDBikis };
}
