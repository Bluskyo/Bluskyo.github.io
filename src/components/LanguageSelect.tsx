import './LanguageSelect.css'
import i18n from '../i18n';
import { useState, type Dispatch, type SetStateAction } from 'react';

type effectProps = {
  text: string
  setText: Dispatch<SetStateAction<string>>
}

export default function LanguageSelect(props: effectProps) {
  const [expand, setExpand] = useState(false);
  const [hide, setHide] = useState(true);

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

  return (
    <>

      {hide &&
      <img className="language-select-icon" 
      src="/icons/language.png" 
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
            props.setText(lng)
          }}>
          {languages[lng]}
        </span>
      ))}
      </div>}
    </>
  )
}