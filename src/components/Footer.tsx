import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="footer"> {t("Footer.Main")}&nbsp;
      <a href="https://github.com/Bluskyo/Bluskyo.github.io">{t("Footer.Link")}</a>
    </footer>
  )
}

export default Footer