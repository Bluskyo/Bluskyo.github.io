import { useState } from "react";
import "./ThemeSelect.css"
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";

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
    <GoSun className="theme-icon"
      onClick={switchTheme}
    />)
  } else {
    return (
    <IoMoonOutline className="theme-icon"
      onClick={switchTheme}
    />)
  }
}
