import SwitchLanguage from "../componants/languageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Header() {
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

      <button
        className="btn btn-circle flex items-center justify-center"
        onClick={homeNavigate}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
}
