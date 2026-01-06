import type React from 'react';
import type { ErrorType, Lang } from '../../types';

const errorMessage: Record<ErrorType, Record<Lang, string>> = {
  minimumUsers: {
    ar: 'الحد الأدنى 3 لاعبين',
    en: 'Minimum 3 players',
  },
  userExists: {
    ar: 'الاسم موجود بالفعل',
    en: 'Name already exists',
  },
};

export default function isError(type: ErrorType | null, language: Lang): React.ReactNode {
  if (!type) return null;
  return <span className="text-red-600">{errorMessage[type][language]}</span>;
}
