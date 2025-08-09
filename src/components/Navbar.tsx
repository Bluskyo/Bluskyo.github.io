import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar() {

  function scrollTo(e: string){
    const element = document.getElementById(e);
    element?.scrollIntoView({
      behavior: "smooth"
    })
  }

  const { t } = useTranslation();
  const titles: string[] = ["About", "Projects", "Contact"];

  return (
    <>
      <div className='navbar-wrapper'>
        <span className='navbar'>
          {titles.map((title) => 
            <span className='category'
            tabIndex={0}
            key={title}
            onClick={() => {scrollTo(title)}}
            >{t(title)}</span>
          )}
        </span>
      </div>
    </>
  )
}

export default Navbar