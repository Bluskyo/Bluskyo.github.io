import { Toaster } from "sonner"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  const prefferedTheme = localStorage.getItem("theme");

  if (prefferedTheme){
    document.body.classList.add(prefferedTheme);
  } else {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    document.body.classList.add(prefersLight ? "light" : "dark");
  }

  return (
    <>
      <Toaster richColors={true} />
      <Navbar />
      <Content />
      <Footer />
    </>
  )
}

export default App
