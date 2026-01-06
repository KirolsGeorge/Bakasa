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

export default function RevealPage() {
  const { userState, dataStates } = useOutletContext<AppOutletContext>();
  const { users } = userState;
  const { bikis, selectedTopic } = dataStates;

  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <div className="carousel w-full touch-none">
        {users.map((user, index) => (
          <div key={user.id} id={'slide' + (index + 1)} className="carousel-item relative w-full">
            <ScratchCard width={200} height={200} user={user.name} index={index} max={users.length} selectedTopic={selectedTopic} bikis={bikis} />
          </div>
        ))}
      </div>
    </main>
  );
}
