import SwitchLanguage from './languageSwitcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faX } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const isNotHome = useLocation().pathname !== '/';
  const isRevealPage = useLocation().pathname.includes('/RevealPage');
  const revealPageColor = isRevealPage ? 'bg-red-600 text-black' : '';

  const navigate = useNavigate();

  function goBackHandler() {
    return navigate(-1);
  }

  function goHome() {
    return navigate('/');
    
  }

  return (
    <div className="flex flex-row-reverse items-center justify-between p-4">
      <SwitchLanguage />
      {isNotHome && (
        <button className={`btn btn-circle flex items-center justify-center ${revealPageColor}`} onClick={isRevealPage ? goHome : goBackHandler}>
          <FontAwesomeIcon icon={isRevealPage ? faX : faArrowLeft} />
        </button>
      )}
    </div>
  );
}
