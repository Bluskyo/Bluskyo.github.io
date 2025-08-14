import { Toaster } from "sonner"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  document.addEventListener("DOMContentLoaded", () => {
    const body = document.body as HTMLElement;

    body.classList.add("no-transition");
    
    void body.offsetHeight;
    
    requestAnimationFrame(() => {
      body.classList.remove("no-transition");
    });
  });

  const prefferedTheme = localStorage.getItem("theme");

  if (prefferedTheme){
    document.body.classList.add(prefferedTheme);
  } else {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    document.body.classList.add(prefersLight ? "light" : "dark");
  }

  // dev option for checking preferrd themes.
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => {
    document.body.classList.toggle("dark", !e.matches);
    document.body.classList.toggle("light", e.matches);
  });

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
