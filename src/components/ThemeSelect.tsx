import { useState } from "react";
import "./ThemeSelect.css"

export default function ThemeSelect() {

  const body = document.querySelector("body");
  const currentClass = body?.classList.toString();

  const [theme, setTheme] = useState(currentClass); 

  const switchTheme = () => {
    if (currentClass == "dark") {
      body?.classList.add("light");
      body?.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      body?.classList.add("dark");
      body?.classList.remove("light");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
    return currentClass
  }

  if (theme == "dark") {
    return (    
    <img className="theme-icon"
      src="/icons/sun.svg"
      alt="theme select icon"
      onClick={switchTheme}>
    </img>)
  } else {
    return (
    <img className="theme-icon"
      src="/icons/moon.svg"
      alt="theme select icon"
      onClick={switchTheme}>
    </img>)
  }
}
