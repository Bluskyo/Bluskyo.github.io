import './LanguageSelect.css'
import { useState } from 'react'
import i18n from '../i18n';

export default function LanguageSelect() {
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
    jp: "JPN"
  } as const;

  type LanguageCode = keyof typeof languages;
  
  return (
    <div className='language-select-container'>
      {hide &&
      <img className="language-select-icon" 
      src="/icons/language.svg" 
      alt="language select button"
      onMouseEnter={expandIcon}
      onClick={expandIcon}
      />}

      {expand && 
      <div className='language-select-list' 
      onMouseLeave={ () =>  shrinkIcon()}>
        {(Object.keys(languages) as LanguageCode[]).map((lng) => (
        <span
          key={lng}
          className="language-item"
          onClick={() => {
            i18n.changeLanguage(lng);
            shrinkIcon();
          }}>
          {languages[lng]}
        </span>
      ))}
      </div>}
    </div>

  )
}