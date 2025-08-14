import "./ThemeSelect.css"

export default function ThemeSelect() {
    function switchTheme() {
        console.log("clicked")
    }
    
  return (
    <img className="theme-icon"
        src="/icons/sun-icon.svg"
        alt="theme select icon"
        onClick={switchTheme}>
    </img>
  )
}
