import './LanguageSelect.css'
import { useState } from 'react'


export default function LanguageSelect() {
    const [expand, setExpand] = useState(false);
    const [hideIcon, setHideIcon] = useState(true); 

  return (
    <div className='language-select-container'>
        {hideIcon &&
        <img className="language-select-icon" 
        src="/icons/language.svg" 
        alt="language select button"
        onMouseEnter={ () => {
          setExpand(true);
          setHideIcon(false)
        }}
        onClick={ () => {
          setExpand(true);
          setHideIcon(false)
        }}/>}

        {expand && 
        <div className='language-select-list' 
        onMouseLeave={ () => {
          setExpand(false);
          setHideIcon(true)
        }}>
          <span className='language-item' 
          tabIndex={0}
          onClick={() => {console.log("Clicked!")}}
          >NOR</span>
          <span className='language-item' 
          tabIndex={0}
          onClick={() => {console.log("Clicked!")}}
          >ENG</span>
          <span className='language-item' 
          tabIndex={0}
          onClick={() => {console.log("Clicked!")}}
          >JPN</span>
        </div>}
    </div>

  )
}
