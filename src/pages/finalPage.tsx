import ScratchCard from '../componants/ScratchCard';

import type { Topic, User, Category } from '../types';

import { useOutletContext } from 'react-router-dom';

type AppOutletContext = {
  userState: {
    users: User[];
  };
  dataStates: {
    bikis: string;
    selectedTopic: Topic;
    defineTopicANDBikis: (users: User[], category: Category) => void;
  };
};

export default function FinalPage() {
  const { dataStates } = useOutletContext<AppOutletContext>();
  const { bikis } = dataStates;

  return (
    <main className="flex flex-col items-center justify-center flex-1 relative">
      <div className="absolute carousel w-full">
        <div className="carousel-item relative w-full">
          <ScratchCard width={200} height={200} user="Elbikis" index={0} max={0} selectedTopic={{ en: '', ar: '' }} bikis={bikis} />
        </div>
      </div>
    </main>
  );
}
