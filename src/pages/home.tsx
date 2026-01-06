import { Link } from 'react-router-dom';
import { useLanguage } from '../stateManagementHooks/LanguageContext';

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <main className="flex flex-col items-center justify-center gap-5 flex-1">
      {language === 'ar' ? (
        <h1 className="font-bold text-center">اهلا يا بكس منك ليه</h1>
      ) : (
        <h1 className="font-bold text-center">Welcome to Bakasa!</h1>
      )}
      <Link to="/categories" className="btn btn-primary mx-auto">
        {language === 'ar' ? <h1 className="font-bold text-center">يلانبدأ </h1> : <h1 className="font-bold text-center">Start</h1>}
      </Link>
    </main>
  );
}
