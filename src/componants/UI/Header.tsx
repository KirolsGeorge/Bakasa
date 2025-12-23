import SwitchLanguage from "../languageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context";
import { useLocation } from "react-router-dom";

export default function Header() {
  const isNotHome = useLocation().pathname !== "/";

  const { lang, setLang } = useContext(AppContext);
  const Navigate = useNavigate();

  function switchLanguage() {
    setLang(lang === "ar" ? "en" : "ar");
  }

  function homeNavigate() {
    return Navigate("/");
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
