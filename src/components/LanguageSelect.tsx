import './LanguageSelect.css'
import { useEffect, useState } from 'react'
import i18n from '../i18n';
import FlashEffect from './FlashEffect';

export default function LanguageSelect() {
  const [expand, setExpand] = useState(false);
  const [hide, setHide] = useState(true);

  const [text, setText] = useState("");

  function expandIcon() {
    setExpand(true);
    setHide(false);
  }

  function shrinkIcon() {
    setExpand(false);
    setHide(true);
  }

  const languages = {
    en: "ENG",
    no: "NOR",
    ja: "JPN"
  } as const;

  type LanguageCode = keyof typeof languages;

  // Sets text to empty to remove element from html flow.
  useEffect(() => {
    setTimeout(() => setText(""), 1000)
  },[text]);
  
  return (
    <>
      <div className='language-select-container'>
        {hide &&
        <img className="language-select-icon" 
        src="/icons/language.svg" 
        alt="language select button"
        onMouseOver={expandIcon}
        onClick={expandIcon}
        />}

        {expand && 
        <div className="language-select-list" 
        onMouseLeave={ () =>  shrinkIcon()}>
          {(Object.keys(languages) as LanguageCode[]).map((lng) => (
          <span
            key={lng}
            className={lng === i18n.language ? "current-language" : "languages"}
            onClick={() => {
              i18n.changeLanguage(lng);
              shrinkIcon();
              setText(lng)
            }}>
            {languages[lng]}
          </span>
        ))}
        </div>}
      </div>
      

    </>
  )
}