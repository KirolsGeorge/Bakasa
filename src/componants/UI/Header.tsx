import SwitchLanguage from "./languageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

type HeaderProps = {
  lang: string;
  setLang: (lang: string) => void;
};

export default function Header({ lang, setLang }: HeaderProps) {
  const isNotHome = useLocation().pathname !== "/";

  const navigate = useNavigate();

  function switchLanguage() {
    setLang(lang === "ar" ? "en" : "ar");
  }

  function homeNavigate() {
    return navigate(-1);
  }

  return (
    <div className="flex flex-row-reverse items-center justify-between p-4">
      <SwitchLanguage onClick={switchLanguage} />
      {isNotHome && (
        <button
          className="btn btn-circle flex items-center justify-center"
          onClick={homeNavigate}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      )}
    </div>
  );
}
